# Tasks

> Este documento descreve as principais tarefas, metas e responsabilidades do projeto **BoilerPlate**, organizadas por prioridade e área de desenvolvimento.

## 1. Estrutura Geral

As tarefas são organizadas neste arquivo **sem uso de ferramentas externas**, servindo como o único ponto de acompanhamento e progresso do projeto.

Cada tarefa deve conter:

- **Título curto e direto**
- **Descrição detalhada (quando necessário)**
- **Prioridade:** Alta / Média / Baixa
- **Status:** Pendente / Em andamento / Concluída

---

## 2. Categorias de Tarefas

### 🧱 Base do Projeto (Em andamento)

- [x] Criar estrutura inicial do projeto (Nuxt 4 + TypeScript + TailwindCSS + DaisyUI)
- [x] Configurar TailwindCSS com DaisyUI no `tailwind.config.ts`
- [x] Adicionar `main.css` com diretivas base do Tailwind
- [x] Importar CSS global no `nuxt.config.ts`
- [x] Testar renderização inicial e estilos
- [x] Criar pastas principais (`app/components/`, `app/composables/`, `app/services/`, `app/stores/`, `app/interfaces/`, `app/i18n/`, etc.)
- [ ] Criar função central de API em `services/api.ts`
- [ ] Configurar ESLint + Prettier (sem ponto e vírgula, 2 tabs)
- [ ] Configurar variáveis de ambiente (`.env` e `.env.local`)

### ⚙️ Backend & Integrações

- [ ] Definir backend final (Windmill, Motia ou Supabase)
- [ ] Implementar autenticação e gerenciamento de tokens
- [ ] Definir padrão de respostas e tratamento global de erros

### 🎨 Frontend & UI

- [ ] Criar layout base (Header, Sidebar, Footer)
- [ ] Implementar sistema de temas (claro/escuro)
- [ ] Configurar autenticação e sistema de e-mails por fila
- [ ] Implementar layout base e dashboard inicial
- [ ] Integrar backend (Windmill)
- [ ] Criar documentação de instalação e uso
- [ ] Criar componentes reutilizáveis (botões, formulários, modais)
- [ ] Adicionar animações suaves com Framer Motion

### 🌐 Internacionalização (i18n)

- [ ] Configurar idiomas `pt-BR` e `en`
- [ ] Criar estrutura de tradução (`i18n/pt-BR.json`, `i18n/en.json`)
- [ ] Implementar fallback automático de idioma

### 🔐 Segurança

- [ ] Implementar sanitização de inputs no frontend
- [ ] Garantir que nenhuma credencial fique hardcoded
- [ ] Criar função para log seguro de erros (somente fora de PROD)

### 🧠 Performance & Cache

- [ ] Implementar lazy loading de componentes e imagens
- [ ] Usar `localStorage` para armazenar dados simples por feature
- [ ] Configurar cache controlado para chamadas de API frequentes

### 📚 Documentação

- [ ] Criar README principal com instruções de setup
- [ ] Adicionar docstrings (reStructuredText ou TSDoc) em funções complexas
- [ ] Atualizar `codex/` conforme o projeto evolui

---

## 3. Próximos Passos

1. [ ] Criar a função central de API (`services/api.ts`) para padronizar chamadas.
2. [ ] Organizar estrutura de pastas conforme o `02_conventions.md`.
3. [ ] Configurar ESLint + Prettier.
4. [ ] Implementar layout base e tema com DaisyUI.
5. [ ] Criar os arquivos iniciais de tradução (`i18n/pt-BR.json` e `i18n/en.json`).
6. [ ] Definir backend (Windmill, Motia ou Supabase) e iniciar integração.
7. [ ] Criar README com setup completo do ambiente.

---

**Observação:** Este documento é o **único ponto de controle de tarefas** do projeto BoilerPlate. Deve ser atualizado manualmente conforme o progresso.
