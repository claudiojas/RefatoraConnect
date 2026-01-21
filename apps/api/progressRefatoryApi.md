# Progresso da Refatoração e Documentação da API

Este documento serve como um registro do trabalho em andamento na API, detalhando as decisões de arquitetura, o progresso e os próximos passos.

## A Ideia: Documentação e Modularização

O objetivo principal é duplo:

1.  **Documentar a API:** Criar uma documentação interativa e completa utilizando **Swagger (OpenAPI)** para que todos os endpoints sejam claros, testáveis e fáceis de consumir.
2.  **Modularizar as Rotas:** Refatorar os arquivos de rota monolíticos (como `auth.ts` e `client.ts`) em módulos menores e mais focados, seguindo o princípio de responsabilidade única.

## Por que estamos refatorando?

A motivação é melhorar a **manutenibilidade** e a **escalabilidade** da API.

-   **Arquivos de Rota Grandes:** Arquivos com centenas de linhas e múltiplas responsabilidades são difíceis de ler, depurar e dar manutenção.
-   **Organização Lógica:** Agrupar rotas por funcionalidade (ex: `auth/login.ts`, `client/create.ts`) torna a base de código mais intuitiva.
-   **Documentação Limpa:** A refatoração suporta nossa estratégia de documentação híbrida, onde cada pequeno arquivo de rota contém sua própria documentação JSDoc, sem poluir o código.

## Status da Refatoração (Até 21/01/2026)

**Concluído:**

-   **Implementação do Swagger:**
    -   A estrutura base do Swagger foi implementada, com a documentação sendo servida em `/api-docs`.
    -   Adotamos uma abordagem híbrida: definições e schemas ficam em arquivos `.yaml` em `DOCS/swagger/`, e os endpoints são anotados com JSDoc.
-   **Refatoração do Módulo `auth`:**
    -   O arquivo `auth.ts` foi dividido em rotas individuais dentro do diretório `src/router/auth/`.
    -   O `auth.ts` principal agora atua como um agregador.
    -   Toda a documentação do Swagger para as rotas de autenticação foi concluída.
-   **Refatoração do Módulo `client`:**
    -   O arquivo `client.ts` foi dividido em rotas individuais dentro do diretório `src/router/client/`.
    -   O `client.ts` principal agora atua como um agregador.
    -   Toda a documentação do Swagger para as rotas de gerenciamento de cliente foi concluída.

**Próximos Passos:**

-   Continuar a documentação para os endpoints restantes (`POST.ts` e `whatsapp.ts`).
-   Considerar a refatoração desses módulos também, se necessário.

## Bibliotecas Instaladas

As seguintes dependências foram adicionadas à `apps/api` para suportar este trabalho:

-   `swagger-ui-express`: Para servir a UI do Swagger.
-   `swagger-jsdoc`: Para gerar a especificação Swagger a partir do código e dos arquivos YAML.
-   `js-yaml`: Para interpretar os arquivos de definição `.yaml`.
-   `@prisma/adapter-pg` e `pg`: Para a conexão explícita do Prisma com o PostgreSQL.
-   `prisma@latest` e `@prisma/client@latest`: Atualização das dependências do Prisma.

## Contexto para o Próximo Dia

Paramos após concluir com sucesso a refatoração e documentação dos módulos `auth` e `client`. Os testes nas rotas de `register` e `login` foram bem-sucedidos. O próximo passo lógico é analisar o roteador `POST.ts` (que contém o endpoint `/task`) e o `whatsapp.ts` (que contém o webhook) e aplicar o mesmo processo de documentação e, se aplicável, refatoração.
