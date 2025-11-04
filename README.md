# RefatoraConnect: Assistente de IA para WhatsApp

RefatoraConnect é uma plataforma SaaS (Software as a Service) projetada para revolucionar o atendimento ao cliente, permitindo que empresas de qualquer porte automatizem suas interações no WhatsApp de forma inteligente e personalizada.

## Para que serve?

No cenário atual, clientes esperam respostas rápidas e eficientes. Manter uma equipe de atendimento disponível 24/7 é caro e complexo. O RefatoraConnect resolve esse problema fornecendo um assistente de IA que pode ser treinado com informações específicas de cada negócio, garantindo que as respostas sejam sempre precisas, contextuais e alinhadas à marca.

## A Ideia do Produto

A plataforma permite que uma empresa cliente (tenant) se cadastre, conecte sua conta do WhatsApp Business e configure uma série de "agentes" de IA. Cada agente é especializado em um tópico (ex: Preços, Serviços, História da Empresa). Quando um cliente final envia uma mensagem para o WhatsApp da empresa, nosso sistema orquestra os agentes para fornecer a resposta mais adequada, utilizando as informações configuradas pelo nosso cliente na plataforma.

## Tecnologias Utilizadas

O projeto é construído como um monorepo utilizando as tecnologias mais modernas para garantir escalabilidade e manutenibilidade.

- **Monorepo:** [Turborepo](https://turbo.build/repo)
- **Backend:** Node.js, Express, TypeScript, PostgreSQL, Prisma ORM
- **Autenticação:** Sistema seguro baseado em Cookies HttpOnly
- **Inteligência Artificial:** Google Gemini
- **Frontend (Site Institucional):** Next.js, React, Tailwind CSS
- **Frontend (Plataforma do Cliente)::** Vite, React, TypeScript, TanStack Query, Tailwind CSS

## Estrutura do Projeto

O código é organizado em um monorepo com a seguinte estrutura:

- **/apps**: Contém as aplicações implantáveis.
  - `api`: O backend (Node.js/Express) que serve a lógica de negócio.
  - `web-institucional`: O site de marketing e apresentação do produto (Next.js).
  - `web-plataforma`: A plataforma onde os clientes fazem login e gerenciam seus assistentes (Vite/React).
- **/packages**: Contém pacotes de código compartilhado entre as aplicações, como componentes de UI, configurações, etc.
