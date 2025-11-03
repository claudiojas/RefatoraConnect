# Contexto e Estado Atual do Projeto: Mini Assistant

## 1. Visão Geral do Projeto

O **Mini Assistant** é uma plataforma SaaS (Software as a Service) projetada para permitir que empresas clientes automatizem o atendimento ao cliente via WhatsApp. O núcleo do serviço é um sistema de orquestração de agentes de IA (usando a API Google Gemini) que respondem a perguntas de forma humanizada, com base em informações específicas de cada empresa cliente, que são configuradas na plataforma.

## 2. Arquitetura Principal

- **Backend**: Node.js com Express e TypeScript.
- **Banco de Dados**: PostgreSQL, gerenciado pelo ORM Prisma.
- **Inteligência Artificial**: Orquestração de múltiplos agentes que utilizam o Google Gemini para gerar respostas.
- **Multi-Tenancy**: A arquitetura é projetada para ser multi-tenant, onde cada cliente (tenant) tem suas próprias configurações de agentes e integração com o WhatsApp, garantindo que os dados e o comportamento do assistente sejam isolados.

## 3. Estado da Implementação (O que foi feito)

Até o momento, a base da aplicação foi estabelecida, com foco recente na implementação da complexa integração com o WhatsApp de uma forma que atenda ao modelo SaaS.

### 3.1. Orquestração de Agentes

- O `orchestrator` (`src/orchestrator/orchestrator.ts`) é o cérebro do sistema.
- Ele primeiro usa um `classifyService` para categorizar a pergunta do usuário (ex: `history`, `pricing`, `services`).
- Com base na categoria, ele delega a tarefa para um agente específico (ex: `historyAgent`, `pricingAgent`).
- Cada agente busca as configurações personalizadas do cliente no banco de dados para construir um prompt específico e obter uma resposta do Gemini.

### 3.2. Integração Multi-Tenant com WhatsApp (Implementação Chave)

Esta foi a principal funcionalidade implementada recentemente. O objetivo era permitir que cada cliente do SaaS conectasse seu próprio número de WhatsApp Business à plataforma.

**Por que foi feito?**
Para que o serviço seja um verdadeiro SaaS, ele não pode operar com um único número de WhatsApp. Cada empresa cliente precisa que o assistente responda a partir de seu próprio número oficial.

**Como foi feito?**

1.  **Atualização do Banco de Dados**:
    - O modelo `Client` em `prisma/schema.prisma` foi estendido para armazenar as credenciais de API para cada cliente:
      - `whatsappAccessToken`: O token de acesso de longa duração da Meta.
      - `whatsappPhoneNumberId`: O ID do número de telefone do WhatsApp do cliente.
      - `whatsappBusinessId`: O ID da Conta Empresarial do WhatsApp (WABA) do cliente.

2.  **Lógica de Webhook (`src/router/whatsapp.ts`)**:
    - O endpoint `POST /webhook/whatsapp` foi completamente reescrito.
    - **Antes**: A lógica tentava (incorretamente) identificar o cliente com base no número do remetente (o usuário final).
    - **Agora**: A lógica identifica corretamente o cliente (tenant) lendo o campo `phone_number_id` do payload do webhook, que indica para qual número de telefone da empresa a mensagem foi enviada. Isso garante que a resposta seja processada com as configurações corretas.

3.  **Lógica de Envio de Mensagens (`src/router/whatsapp.ts`)**:
    - A função `sendWhatsAppMessage` foi modificada para aceitar as credenciais específicas do cliente.
    - **Antes**: Usava um token de acesso global a partir de variáveis de ambiente.
    - **Agora**: Usa o `accessToken` e o `phoneNumberId` do cliente (buscados do banco de dados) para fazer a chamada à API da Meta, garantindo que a resposta seja enviada a partir do número de telefone correto.

4.  **Backend do Fluxo de Onboarding (`src/router/auth.ts`)**:
    - Foi criada uma nova rota, `POST /auth/whatsapp/callback`, para lidar com a parte de backend do fluxo "Embedded Signup" da Meta.
    - Esta rota recebe um código de autorização, troca-o por um token de acesso de longa duração e, em seguida, usa esse token para buscar o `whatsappPhoneNumberId` e o `whatsappBusinessId` do cliente, salvando tudo no banco de dados.

## 4. Estado Atual e Próximos Passos (O que deve ser feito agora)

O backend para a integração com o WhatsApp está funcional e pronto. No entanto, para que a solução seja completa, os seguintes passos são **essenciais e devem ser executados pelo desenvolvedor**:

1.  **Configurar um Aplicativo na Plataforma da Meta**:
    - **Ação**: Ir para [Meta for Developers](https://developers.facebook.com/), criar um novo App, adicionar o produto "WhatsApp Business Platform".
    - **Objetivo**: Obter o **App ID** e o **App Secret**.
    - **Onde usar**: Preencher as variáveis `META_APP_ID` e `META_APP_SECRET` no seu arquivo `.env`.

2.  **Executar a Migração do Banco de Dados**:
    - **Ação**: Rodar o comando no terminal para aplicar as mudanças no schema do banco de dados.
    - **Comando**: `npx prisma migrate dev --name update_client_for_whatsapp_credentials`

3.  **Implementar o Frontend do "Embedded Signup"**:
    - **Ação**: Na interface de usuário do seu SaaS (o painel onde seus clientes gerenciam suas contas), você deve adicionar o fluxo de "Embedded Signup".
    - **Como**: Isso envolve adicionar o SDK JavaScript do Facebook e um botão "Conectar com WhatsApp" que inicia o processo de login e autorização, conforme a documentação oficial da Meta.
    - **Resultado**: Ao final do fluxo, o frontend deve enviar o `code` de autorização recebido para o endpoint de backend `POST /auth/whatsapp/callback`.

## 5. Pontos de Melhoria Futuros (Inconsistências Notadas)

Durante a análise, foram identificados alguns pontos que podem ser melhorados futuramente:

- **Modelo Gemini Inválido**: Em `src/services/callGeminiAgent.ts`, o modelo está como `gemini-2.5-flash`, que é inválido. Deve ser corrigido para um modelo válido como `gemini-1.5-flash`.
- **Agentes Faltando**: A `Category` em `src/types/index.ts` inclui `projects` e `tech`, mas os agentes correspondentes não existem e não são tratados no `orchestrator`.
- **Lógica de Cache**: A função `findSimilarQuestion` faz uma busca por correspondência exata, não por similaridade, o que limita sua eficácia.
- **Dependências**: O `package.json` inclui a dependência `openai`, que não parece ser utilizada.
