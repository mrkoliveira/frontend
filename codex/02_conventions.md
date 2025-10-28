# **Coding Conventions**

> Este documento define as convenções de código e estrutura do projeto **BoilerPlate**, garantindo consistência, legibilidade e fácil manutenção em todo o código-fonte.

**Main Language:** TypeScript

## **1. File Structure**

- A base do de todo o projeto Nuxt4 fica dentro de app `/app/`
- Organize pastas por feature, não por tipo de arquivo (ex: `users/`, `payments/`).
- Componentes de páginas devem ficar dentro de `/app/pages` (padrão Nuxt 4).
- Coloque todos os componentes em `/app/components/` e organize-os por feature dentro dessa pasta (ex: `/app/components/users/`, `/app/components/payments/`).
- Composables devem ficar em `/app/composables/` e também organizados por feature (ex: `/app/composables/users/`, `/app/composables/payments/`).
- Interfaces e tipos devem ficar em `interfaces/` ou `/app/types/` e organizados por feature (ex: `/app/interfaces/users/`, `/app/interfaces/payments/`).
- Stores devem ficar em `/app/stores/` e organizadas por feature (ex: `/app/stores/users/`, `/app/stores/payments/`) usando Pinia para gerenciamento de estado.
- Serviços ou integrações externas em `/app/services/`, com convenções claras para chamadas de API, tratamento de erros e timeouts.
- Configurações globais em `/app/config/`.
- Funções em `/functions/`.
- Organize pasta de functions por feature, não por tipo de arquivo (ex: `users/`, `payments/`).
- Middleware e plugins devem ficar em `/app/middleware/` ou `/app/plugins/` e organizados por feature quando aplicável.
- Assets e arquivos estáticos devem ficar em `/public/assets/` ou `public/`, organizados por tipo ou feature.
- Variáveis de ambiente devem ser armazenadas em `.env` ou `.env.local`, nunca hardcoded.
- Internacionalização (i18n) deve ficar em `/i18n/`, suportando pt-BR e en, com arquivos organizados por idioma. As chaves devem ser idênticas entre os idiomas, alterando apenas os valores das traduções.
- Cache / Storage: usar `localStorage` para armazenar dados persistentes quando aplicável, seguindo convenções de chave únicas por feature.
- Internacionalização avançada: seguir regras sobre chaves de tradução, fallback de idioma e formatação de datas e números.

### **API Central Function**

- **Local:** `/app/services/api.ts`
- **Descrição:** Função responsável por gerenciar todas as requisições HTTP do frontend.
- **Parâmetros:** `endpoint`, `method`, `payload`, `headers` (Sempre passar o ID do Aplicativo que estará no .env como APP_ID).
- **Comportamento:**

  - Faz chamadas usando `fetch` ou `axios` com tratamento global de erros.
  - Mostra mensagens de erro amigáveis no frontend.
  - Registra erros no console apenas se o ambiente não for PROD.
  - Centraliza autenticação, headers e logs.
  - Retorna respostas padronizadas com `status`, `data` e `message`.

### **Comunicação Reativa (SSE)**

- O frontend deve usar um único listener global de **Server-Sent Events** para receber notificações do backend.
- Todos os eventos devem seguir a convenção:

  - `event: <tipo_do_evento>`
  - `data: { ...conteúdo... }`

- A conexão SSE deve ser inicializada apenas uma vez (por exemplo, em `app/plugins/sse.client.ts`) e repassar as mensagens via Pinia ou composables.
- O frontend **não envia dados** por SSE — a comunicação é unidirecional.

### **Padronização de Mensagens (i18n)**

- Todas as respostas do backend devem retornar mensagens como chaves de tradução (`message: "user.created_successfully"`).
- O frontend consulta o arquivo `i18n` para exibir a mensagem traduzida ao usuário.
- Isso se aplica a erros, notificações e respostas de sucesso. TODAS as respostas do sistema devem estar no i18n.

## **2. Naming Conventions**

- **Files:** `kebab-case.ts` ou `kebab-case.vue`
- **Components:** `PascalCase.vue`
- **Variables / Functions / Names:** `snake_case` (sempre minúsculo e em inglês)
- **Constants:** `UPPER_SNAKE_CASE`
- **Types / Interfaces:** `PascalCase`
- **Funções de API:** `api_<acao>_<entidade>`
- **Variáveis de contexto:** `ctx_<nome>`
- **Funções utilitárias:** `utils_<acao>`
- **Stores / State:** `snake_case` ou `PascalCase` para arquivos e nomes de stores

### **Naming Rules**

Sempre siga as seguintes regras:

- Prefixo `ctx_` para variáveis de contexto.
- Prefixo `api_` para endpoints.
- Use nomes claros e curtos (máximo 3 palavras).
- Prefira nomes descritivos como `get_rental_data` ao invés de `get_data`.
- Nunca use nomes genéricos como `temp`, `test`, `foo`, `bar`.

**Exemplo:**

- ✅ Certo: `calculate_rent_due`
- ❌ Errado: `calc_rent`

## **3. Code Style**

- Funções pequenas e autoexplicativas
- Nome de variáveis sempre em inglês
- Nome de classes em `PascalCase`
- Evitar comentários redundantes; use comentários para explicar **porque**, não o que
- Usar 2 tabs para indentação
- Aspas simples (`'`) para strings
- Sem uso de ponto e vírgula
- Máximo de 250 caracteres por linha
- Tipagem explícita sempre que possível
- Regras de Linter/Formatter: ESLint + Prettier, adaptadas para duas tabs e sem ponto e vírgula

## **4. Vue/Nuxt Specific**

- Componentes: template → script → style
- Props devem ter tipos e default definidos
- Composables devem começar com `use`
- Computed e watch devem ser claros e sem efeitos colaterais
- Usar `defineProps` e `defineEmits` do TypeScript para melhor tipagem
- Páginas Nuxt devem ser colocadas em `/pages`, mantendo o roteamento automático padrão
- Stores devem ser gerenciadas com Pinia e organizadas por feature
- Middleware e plugins devem ser tipados e documentados
- Lazy loading deve ser usado para componentes e imagens quando possível para performance
- Erros e logs devem ser exibidos com `console.error` se a variável de ambiente for diferente de PROD
- Mensagens de erro amigáveis para o usuário devem ser exibidas utilizando funções de fallback padrão definidas em um arquivo utilitário central
- Todas as mensagens do sistema devem ser resolvidas via `i18n.t(message)` utilizando as chaves de tradução retornadas pelo backend

## **5. Git & Commits**

- Mensagens de commit no formato: `tipo: descrição curta`

  - **feat:** nova funcionalidade
  - **fix:** correção de bug
  - **docs:** documentação
  - **style:** mudanças sem impacto no código (formatação)
  - **refactor:** refatoração
  - **test:** adicionar ou corrigir testes

- Sempre criar branch a partir de `main` ou `develop`

## **6. Testing**

- Testes unitários obrigatórios para funções críticas
- Nomenclatura de testes: `nome_da_funcao.spec.ts`
- Ferramenta de testes: **Vitest**
- Cobertura mínima: 80%

## **7. Security**

- Nenhuma credencial hardcoded
- Sanitizar inputs do usuário
- Evitar exposição de dados sensíveis em logs

## **8. Documentation**

- Cada função deve conter docstring padrão reStructuredText ou TSDoc para funções complexas
- Atualizar [DOCUMENTATION.md](http://documentation.md/) sempre que houver mudança relevante

## **9. CI/CD**

- Deploy e integração contínua serão feitos manualmente.
- Antes do deploy, executar `pnpm lint` e `pnpm build` para garantir consistência e qualidade do código.

---

**Observação:** Essas convenções são base para manter consistência no projeto BoilerPlate. Podem evoluir conforme o projeto cresce.
