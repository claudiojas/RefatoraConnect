# Mini Assistant

Mini Assistant é um projeto de orquestração de agentes de IA utilizando Node.js, Express, Google Gemini e PostgreSQL com Prisma, com foco em uma arquitetura SaaS multi-tenant.

> **Documentação Detalhada**: Para um entendimento completo da arquitetura, estado atual e próximos passos, consulte o arquivo [**DOCS/CONTEXT.md**](./DOCS/CONTEXT.md).

> Repositório: [github.com/claudiojas/mini-assistant](https://github.com/claudiojas/mini-assistant.git)

---

## Tecnologias Usadas

- Node.js, Express, TypeScript
- Google Gemini API (`@google/genai`)
- PostgreSQL com Prisma ORM
- TSX para desenvolvimento com hot-reload

---

## Como Rodar o Projeto

1.  **Clone o repositório** e instale as dependências:
    ```bash
    git clone https://github.com/claudiojas/mini-assistant.git
    cd mini-assistant
    npm install
    ```

2.  **Configure o arquivo `.env`**: Copie o conteúdo de `.env.example` para um novo arquivo `.env` e preencha com suas credenciais:
    ```dotenv
    GEMINI_API_KEY="Sua chave da API Gemini"
    CORS_ORIGIN="URL da sua aplicação frontend"
    DATABASE_URL="URL de conexão com seu banco de dados PostgreSQL"
    DIRECT_URL="URL de conexão direta com seu banco de dados (para migrações Prisma)"
    JWT_SECRET="Sua chave secreta para JWT"
    WHATSAPP_VERIFY_TOKEN="Seu token de verificação para o webhook do WhatsApp"
    META_APP_ID="O App ID do seu aplicativo da Meta"
    META_APP_SECRET="O App Secret do seu aplicativo da Meta"
    ```

3.  **Execute as migrações do Prisma**:
    ```bash
    npx prisma migrate dev
    ```

4.  **Inicie o projeto** em modo de desenvolvimento:
    ```bash
    npm run dev
    ```

---

## Fluxo da Aplicação

O projeto funciona como um SaaS onde empresas (clientes) podem configurar agentes de IA para responder a perguntas em seu nome. A plataforma suporta múltiplos agentes (preços, serviços, história, etc.) e uma integração multi-tenant com a API do WhatsApp Cloud.

Para mais detalhes sobre o fluxo de orquestração e a arquitetura da integração com o WhatsApp, consulte [**DOCS/CONTEXT.md**](./DOCS/CONTEXT.md).

---

## Endpoints da API

### Autenticação e Onboarding do WhatsApp

-   `POST /auth/register`: Registra um novo usuário e cria um cliente (tenant).
-   `POST /auth/login`: Autentica um usuário existente.
-   `POST /auth/whatsapp/callback`: Endpoint de backend para o fluxo "Embedded Signup" da Meta. Recebe um código de autorização, troca por um token de acesso e salva as credenciais do WhatsApp para o cliente.

### Gerenciamento de Clientes e Configurações de Agentes

-   `POST /client`: Cria um novo cliente.
-   `POST /client/:clientId/config/:agentType`: Adiciona uma configuração de agente para um cliente.
-   `PUT /client/:clientId/config/:agentType/:configId`: Atualiza uma configuração de agente.
-   `DELETE /client/:clientId/config/:agentType/:configId`: Deleta uma configuração de agente.

### Interação com o Assistente

-   `POST /task`: Envia uma pergunta para o assistente de um cliente específico (requer header `X-Client-ID`).

### Webhook do WhatsApp

-   `GET /webhook/whatsapp`: Endpoint para verificação do webhook pela Meta.
-   `POST /webhook/whatsapp`: Recebe mensagens e eventos de usuários do WhatsApp.

---

## 📄 Licença

Este projeto está licenciado sob a **MIT License**.