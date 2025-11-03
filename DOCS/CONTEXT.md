# CONTEXT.md: Estado Atual e Próximos Passos do Projeto

*Este documento é um guia "vivo" para qualquer desenvolvedor ou LLM que precise entender o estado atual do projeto, sua arquitetura e como continuar o desenvolvimento.*

## 1. Visão Geral do Projeto

O **RefatoraConnect** é uma plataforma SaaS (Software as a Service) multi-tenant projetada para permitir que empresas clientes automatizem o atendimento ao cliente via WhatsApp. O núcleo do serviço é um sistema de orquestração de agentes de IA (usando Google Gemini) que respondem a perguntas com base em informações específicas de cada empresa, configuradas na plataforma.

## 2. Arquitetura do Monorepo

O projeto foi recentemente migrado para uma arquitetura de monorepo gerenciada pelo **Turborepo** para facilitar o compartilhamento de código e a manutenibilidade.

- **`apps/`**: Contém as aplicações independentes.
  - **`api`**: O backend em Node.js/Express. É o cérebro da aplicação, responsável pela autenticação, orquestração dos agentes, e comunicação com o banco de dados e a API do WhatsApp.
  - **`web-institucional`**: Aplicação em Next.js destinada ao site de marketing, blog e páginas públicas. Otimizada para SEO.
  - **`web-plataforma`**: Aplicação em Vite+React que funciona como o painel de controle para os clientes. É aqui que eles se cadastram, fazem login e configuram seus agentes.

- **`packages/`**: Contém pacotes de código compartilhado.
  - Atualmente vazio, mas destinado a abrigar bibliotecas de componentes de UI, configurações de TypeScript (`@repo/tsconfig`), etc.

## 3. Estado da Implementação (O que foi feito até aqui)

1.  **Estrutura do Monorepo:** Toda a estrutura de pastas e arquivos de configuração (`turbo.json`, `package.json` com workspaces) foi criada e as dependências foram instaladas. O Turborepo está funcional e consegue executar tarefas nos 3 projetos (`api`, `web-institucional`, `web-plataforma`).

2.  **Backend (`apps/api`):**
    - A API está funcional e pronta.
    - A lógica de **autenticação de usuários** e **criação de clientes (tenants)** está implementada.
    - O **orquestrador de agentes** que classifica as perguntas e delega para o agente correto está funcional.
    - A **integração multi-tenant com o WhatsApp** está implementada: o sistema consegue identificar o cliente pelo ID do número de telefone e usar o token de acesso específico daquele cliente para enviar respostas.
    - O endpoint de callback (`/auth/whatsapp/callback`) para o fluxo de "Embedded Signup" da Meta está pronto para receber o código de autorização do frontend.

3.  **Frontends (`apps/web-institucional` e `apps/web-plataforma`):**
    - Os projetos foram criados com suas respectivas ferramentas (`create-next-app` e `create-vite`).
    - Atualmente, ambos contêm apenas o código boilerplate inicial. **Nenhuma funcionalidade foi implementada ainda.**

## 4. Como Continuar o Desenvolvimento

### Rodando o Ambiente

1.  **Instalar dependências (se for a primeira vez ou se houver novas):**
    ```bash
    npm install
    ```
2.  **Iniciar o ambiente de desenvolvimento:**
    Este comando subirá todas as aplicações (`api`, `web-institucional`, `web-plataforma`) simultaneamente.
    ```bash
    turbo run dev
    ```

### Próximos Passos Essenciais

O foco agora é construir a interface da **plataforma do cliente (`apps/web-plataforma`)**.

**Tarefa Imediata: Implementar o fluxo de conexão com o WhatsApp.**

1.  **Criar Páginas de Autenticação:**
    - Implementar as telas de Login e Cadastro na `web-plataforma`.
    - Conectar essas telas aos endpoints `POST /auth/login` e `POST /auth/register` da `api`.

2.  **Criar o Painel do Cliente:**
    - Após o login, o usuário deve ser direcionado para um painel de controle.
    - Este painel deve exibir o status da conexão com o WhatsApp (Conectado/Não Conectado).

3.  **Implementar o "Embedded Signup" do WhatsApp:**
    - No painel, adicione um botão "Conectar com o WhatsApp".
    - **Adicione o SDK JavaScript do Facebook** ao projeto React.
    - Ao clicar no botão, inicie o fluxo de login da Meta, conforme a [documentação oficial](https://developers.facebook.com/docs/whatsapp/embedded-signup/web/)
    - Ao final do fluxo, a Meta irá redirecionar de volta para sua aplicação com um **código de autorização** de curta duração.
    - Sua aplicação frontend deve pegar esse `code` e o `clientId` do usuário logado e enviá-los para o backend no endpoint: `POST /api/auth/whatsapp/callback`.

4.  **Atualizar a UI:**
    - Após a chamada bem-sucedida ao backend, a UI do painel deve ser atualizada para mostrar o status "Conectado".

## 5. Pontos de Melhoria (Dívida Técnica Notada na API)

Durante a análise inicial da API, foram identificados alguns pontos que devem ser corrigidos futuramente:

- **Modelo Gemini Inválido**: Em `apps/api/src/services/callGeminiAgent.ts`, o modelo está como `gemini-2.5-flash`, que é inválido. Deve ser corrigido para um modelo válido como `gemini-1.5-flash`.
- **Agentes Faltando**: A `Category` em `apps/api/src/types/index.ts` inclui `projects` e `tech`, mas os agentes correspondentes não existem e não são tratados no `orchestrator`.
- **Lógica de Cache**: A função `findSimilarQuestion` faz uma busca por correspondência exata, não por similaridade, o que limita sua eficácia.
- **Dependências**: O `package.json` da API inclui a dependência `openai`, que não parece ser utilizada e pode ser removida.
