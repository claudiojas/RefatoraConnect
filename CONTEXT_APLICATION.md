# CONTEXT_APLICATION.MD: Estado Atual e Próximos Passos

*Este documento é um guia "vivo" para o assistente de IA, detalhando o estado atual do projeto, o que já foi tentado e quais são os próximos passos.*

## 1. Visão Geral e Arquitetura

- **Projeto:** RefatoraConnect, uma plataforma SaaS para automação de atendimento ao cliente no WhatsApp.
- **Arquitetura:** Monorepo gerenciado com **Turborepo**.
  - `apps/api`: Backend em Node.js, Express, TypeScript, com Prisma ORM para o banco de dados PostgreSQL (Supabase).
  - `apps/web-plataforma`: Frontend em Vite, React, TypeScript, usando TanStack Query.
  - `apps/web-institucional`: Frontend em Next.js para o site de marketing.
- **Autenticação:** Sistema baseado em Cookies HttpOnly com token JWT.

## 2. Estado Atual do Projeto (Pronto para Deploy)

O projeto está em um estado estável e pronto para o deploy. Todos os bugs conhecidos que impediam a funcionalidade principal (login, onboarding) foram resolvidos. O comando `npm run build` agora é executado com sucesso para todos os workspaces (`api`, `web-plataforma`, `web-institucional`), garantindo que não há erros de compilação ou tipagem.

## 3. Resumo das Correções e Debugging

Abaixo está um resumo do processo de depuração que nos trouxe ao estado atual.

### 3.1. O Problema dos Túneis Locais
A tentativa inicial de testar a integração com o WhatsApp usando um túnel local falhou repetidamente.
- **`ngrok`:** Falhou devido a uma conta não verificada (`ERR_NGROK_4018`).
- **`localtunnel`:** Falhou devido a um bloqueio de rede/firewall (`connection refused`).
- **`serveo.net`:** Criou um túnel com sucesso, mas apenas para `http`, enquanto a Meta exige `https`.
- **Decisão:** Abandonamos a abordagem de túnel local e focamos em corrigir a lógica da aplicação para, em seguida, fazer o deploy em um ambiente de produção/staging que forneceria as URLs HTTPS necessárias.

### 3.2. Correção do Onboarding (Bug Inicial)
- **Problema:** O formulário de onboarding falhava ao salvar.
- **Causa:** O modelo `ServicesConfig` no `schema.prisma` exigia um campo `conversationStyle`, que não era enviado pelo frontend.
- **Solução:** Alteramos o campo para `conversationStyle String?` no `schema.prisma` e executamos `prisma migrate dev` para aplicar a mudança no banco de dados.

### 3.3. Correção do Bug de Conexão no Login
- **Problema:** Após a migração do banco, o login parou de funcionar com um erro `PrismaClientInitializationError`, indicando que não conseguia se conectar ao pooler do Supabase (porta `6543`).
- **Causa:** O processo de migração deixou o Prisma Client em um estado inconsistente.
- **Solução:** Executamos `npx prisma generate` para forçar a regeneração do cliente, o que restabeleceu a conexão com o banco de dados.

### 3.4. Correção da Lógica de `clientId` no Frontend
- **Problema:** O onboarding continuava falhando com um erro `Client ID não encontrado`.
- **Causa:** O frontend (`Onboarding.tsx`) tentava ler o `clientId` de um token JWT no `localStorage`. No entanto, o backend estava (corretamente) salvando o token em um cookie `httpOnly`, inacessível para o JavaScript.
- **Solução:**
  1.  Modificamos `Login.tsx` para, no sucesso do login, salvar o `clientId` (recebido no corpo da resposta) no `localStorage`.
  2.  Modificamos `Onboarding.tsx` para ler o `clientId` diretamente do `localStorage` em vez de tentar decodificar o token.

### 3.5. Estabilização do Servidor da API
- **Problema:** A API estava configurada para se desconectar do banco de dados (`prisma.$disconnect()`) após cada requisição.
- **Causa:** Isso fazia com que, em operações com múltiplas chamadas (como o `Promise.all` do onboarding), a primeira chamada funcionasse e as subsequentes falhassem porque a conexão já estava fechada.
- **Solução:** Removemos todas as instâncias de `finally { await prisma.$disconnect(); }` dos arquivos de rotas (`client.ts` e `auth.ts`).

### 3.6. Correção dos Erros de Build
- **Problema:** O comando `npm run build` falhava com múltiplos erros de TypeScript e de script.
- **Solução:**
  - Corrigimos a importação do Prisma Client em `interfaces.ts`.
  - Adicionamos tipagem explícita para parâmetros com `any` implícito.
  - Adicionamos guardas de tipo (`isAxiosError`) para tratar o tipo `unknown` em blocos `catch`.
  - Adicionamos verificações de nulidade (`if (!user?.id)`) para evitar erros de "possibly 'undefined'".
  - Removemos um script obsoleto `copy-prisma` que tentava copiar um diretório inexistente.

## 4. Próximos Passos

1.  **Commit das Mudanças:** Fazer o commit de todas as correções para o repositório Git.
2.  **Deploy do Backend (`api`):**
    - Fazer o deploy na **Render** (ou serviço similar).
    - Configurar todas as variáveis de ambiente do arquivo `.env` no painel do serviço.
3.  **Deploy do Frontend (`web-plataforma`):**
    - Fazer o deploy na **Vercel** (ou serviço similar).
    - Configurar a variável de ambiente do frontend (ex: `VITE_API_URL`) para apontar para a URL pública do backend na Render.
4.  **Configuração da Meta:**
    - Com as URLs públicas do frontend e backend em mãos, configurar o App da Meta com os Redirect URIs e a URL do Webhook.
5.  **Teste Final:** Testar o fluxo de conexão do WhatsApp de ponta a ponta no ambiente de produção.