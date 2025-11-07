# CONTEXT.MD: Estado Atual e Próximos Passos do Projeto

*Este documento é um guia "vivo" para qualquer desenvolvedor ou LLM que precise entender o estado atual do projeto, sua arquitetura e como continuar o desenvolvimento.*

## 1. Visão Geral do Projeto

O **RefatoraConnect** é uma plataforma SaaS (Software as a Service) multi-tenant projetada para permitir que empresas clientes automatizem o atendimento ao cliente via WhatsApp. O núcleo do serviço é um sistema de orquestração de agentes de IA (usando Google Gemini) que respondem a perguntas com base em informações específicas de cada empresa, configuradas na plataforma.

## 2. Arquitetura

### 2.1. Monorepo com Turborepo

O projeto é estruturado como um monorepo gerenciado pelo **Turborepo**.

- **`apps/`**: Contém as aplicações implantáveis.
  - **`api`**: Backend em Node.js/Express. Responsável pela lógica de negócio, orquestração de agentes e comunicação com o banco de dados.
  - **`web-institucional`**: Aplicação em Next.js para o site de marketing (atualmente boilerplate).
  - **`web-plataforma`**: Aplicação em Vite+React que funciona como o painel de controle para os clientes.

- **`packages/`**: Destinado a pacotes de código compartilhado (atualmente vazio).

### 2.2. Autenticação (Cookie-Based)

O sistema utiliza um fluxo de autenticação seguro baseado em cookies `HttpOnly`.

1.  **Login/Registro**: O frontend envia as credenciais para a API.
2.  **API**: Valida as credenciais, gera um token JWT e o define em um cookie `HttpOnly` na resposta.
3.  **Requisições Subsequentes**: O navegador anexa automaticamente o cookie a todas as requisições para a API.
4.  **Validação**: Um endpoint `GET /auth/me` permite que o frontend verifique a validade do cookie e obtenha os dados do usuário a qualquer momento.

## 3. Estado da Implementação (O que foi feito até aqui)

1.  **Estrutura do Monorepo:** A estrutura com Turborepo está funcional, com os três projetos (`api`, `web-institucional`, `web-plataforma`) configurados como workspaces.

2.  **Backend (`apps/api`):**
    - Implementado o sistema de autenticação com cookies `HttpOnly`.
    - Adicionados endpoints `GET /auth/me` e `POST /auth/logout`.
    - Adicionado o campo `onboardingCompleted` ao modelo `Client` no banco de dados para rastrear o status do onboarding.
    - Criado o endpoint `POST /client/:clientId/complete-onboarding` para atualizar esse status.

3.  **Frontend (`apps/web-plataforma`):**
    - **Fluxo de Autenticação Completo:** As páginas de Login e Registro estão funcionais e integradas com a API via `TanStack Query`.
    - **Fluxo de Onboarding Implementado:**
        - Criada a página `/onboarding` com o formulário para configuração inicial dos agentes (História, Serviços, etc.).
        - A submissão do formulário salva as configurações e marca o onboarding como concluído.
    - **Rotas Protegidas:** Foi criado o componente `ProtectedRoute` que gerencia o acesso às páginas, redirecionando o usuário para `/login`, `/onboarding` ou `/dashboard` com base no seu status.

## 4. Como Continuar o Desenvolvimento

### Rodando o Ambiente

1.  **Variáveis de Ambiente:** Certifique-se de que o arquivo `apps/api/.env` está configurado corretamente. As variáveis mais importantes são:
    - `DATABASE_URL`: URL de conexão com o banco de dados.
    - `CORS_ORIGIN`: Deve ser a URL do frontend da plataforma (ex: `http://localhost:5173`).
    - `PORT`: Porta para a API (ex: `3001`) para evitar conflito com o Next.js.

2.  **Instalar dependências (se necessário):**
    ```bash
    npm install
    ```
3.  **Iniciar o ambiente de desenvolvimento:**
    Este comando sobe todas as aplicações simultaneamente. A API rodará na porta definida em `.env` (ex: 3001), o Next.js na 3000 e o Vite na 5173.
    ```bash
    npx turbo run dev
    ```

### Próximo Passo Essencial: Integração com WhatsApp

O fluxo de cadastro e configuração inicial está pronto. O próximo grande passo é implementar a **conexão com o WhatsApp** dentro do Dashboard, conforme o plano original.

**Tarefa: Implementar o "Embedded Signup" do WhatsApp no Dashboard (`apps/web-plataforma/src/pages/Dashboard.tsx`)**

1.  **Adicionar o SDK do Facebook:** Carregue o script do SDK do Facebook na sua aplicação React. Isso geralmente é feito no `index.html` ou dinamicamente em um `useEffect`.

2.  **Criar o Botão de Conexão:** No `Dashboard.tsx`, modifique o botão "Conectar WhatsApp" para que ele chame a função `FB.login()` do SDK da Meta.

3.  **Obter o Código de Autorização:** Configure a chamada `FB.login()` para pedir a permissão `whatsapp_business_management`. No sucesso, a resposta da Meta incluirá um `code` de autorização.

4.  **Enviar o Código para a API:** Crie uma nova `mutation` com `TanStack Query` no `Dashboard.tsx`. Essa `mutation` deve fazer uma chamada `POST` para o endpoint `POST /api/auth/whatsapp/callback`, enviando o `code` recebido e o `clientId` do usuário logado.

5.  **Atualizar a UI:** No `onSuccess` da `mutation`, atualize a interface do Dashboard para refletir que a conta foi conectada com sucesso (ex: mudar o status para "Conectado" e talvez exibir o número de telefone).

## 5. Pontos de Melhoria (Dívida Técnica Notada na API)

- **Modelo Gemini Inválido**: Em `apps/api/src/services/callGeminiAgent.ts`, o modelo está como `gemini-2.5-flash`. Deve ser corrigido para `gemini-1.5-flash`.
- **Dependências**: O `package.json` da API inclui `openai`, que não parece ser utilizada.