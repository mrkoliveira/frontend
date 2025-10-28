# **Agents & Responsibilities**

> Este documento descreve os agentes (humanos ou automáticos) responsáveis por tarefas e fluxos no sistema **BoilerPlate**.

---

## Dev environment tips

- Use `pnpm dev` to jump to a package instead of scanning with `ls`.
- Run `pnpm install` to add the package to your workspace so Vite, ESLint, and TypeScript can see it.
- Check the name field inside each package's package.json to confirm the right name—skip the top-level one.

## Testing instructions

- From the package root you can just call `pnpm test`. The commit should pass all tests before you merge.
- Fix any test or type errors until the whole suite is green.
- After moving files or changing imports, run `pnpm lint --filter <project_name>` to be sure ESLint and TypeScript rules still pass.
- Add or update tests for the code you change, even if nobody asked.

## PR instructions

- Title format: [<project_name>] <Title>
- Always run `pnpm lint` and `pnpm test` before committing.

## **1. Visão Geral**

O projeto adota o conceito de “agentes” para representar tarefas automatizadas ou papéis definidos no sistema.  
Cada agente possui uma responsabilidade clara e atua de forma independente, comunicando-se via API, eventos SSE ou filas.

---

## **2. Agentes Principais**

| Agente             | Tipo               | Função                                                                                        | Localização   | Observações                                    |
| ------------------ | ------------------ | --------------------------------------------------------------------------------------------- | ------------- | ---------------------------------------------- |
| **Frontend**       | Humano / Interface | Interação com o usuário, envio de requisições à API central e exibição de respostas via i18n. | `/app/`       | Usa `services/api.ts` e SSE para atualizações. |
| **Backend**        | FastApi            | Processamento das requisições, execução das funções SQL, api restfull.                        | Python 3.14   | Centraliza lógica de negócio.                  |
| **Email**          | Sistema de Emails  | Disparo de e-mails,                                                                           | BackEnd       | Sistema em TypeScript e WindMill.              |
| **Automação**      | Automático (n8n)   | Quando necessario.                                                                            | n8n Server    | Ouve eventos do backend.                       |
| **Banco de Dados** | Sistema            | Execução das funções SQL e triggers.                                                          | PostgreSQL 18 | Garante integridade e performance.             |

---

## **3. Fluxo de Comunicação**

1. O **Frontend** envia requisições à **API Central**.
2. O **Backend (FastApi)** executa funções SQL (`fnc_...`) e triggers no banco.
3. O **Banco** aciona eventos (logs, filas) automaticamente.
4. O **FastApi** escuta eventos e dispara e-mails, notificações ou integrações.
5. O **n8n** somente quando é chamado, não é usado o tempo inteiro.
6. O **Frontend** recebe atualizações via **SSE**.

---

## **4. Manutenção de Agentes**

- Cada agente deve ter logs próprios e política de monitoramento.
- Alterações em automações (n8n) devem ser documentadas com versão e data.
- Recomenda-se testar cada fluxo em ambiente de staging antes de produção.

---

**Observação:** Este documento deve ser atualizado sempre que novos agentes, automações ou integrações forem criados.
