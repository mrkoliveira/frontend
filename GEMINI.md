# GEMINI.md - Project Context

This document provides a comprehensive overview of the **BoilerPlate** project, designed to be used as instructional context for Gemini.

## 1. Project Overview

The **BoilerPlate** project is a modern, highly componentized web system designed to serve as a reusable foundation for various SaaS (Software as a Service) applications. Its primary goal is to accelerate development by providing a solid, consistent, and scalable base with essential features already built-in.

### 1.1. Key Technologies

*   **Frontend:** Nuxt 4, Vue 3, TypeScript, TailwindCSS 4, DaisyUI 5
*   **Backend:** Node.js with Fastify
*   **Database:** PostgreSQL 18
*   **Automation:** n8n
*   **Package Manager:** pnpm with workspaces
*   **UI:** Tairo and Shuriken UI (via the `@cssninja/tairo` layer)
*   **Real-time Communication:** Server-Sent Events (SSE) for unidirectional updates from the backend.

### 1.2. Architecture

The system follows a layered architecture:
1.  **Frontend (Nuxt):** Handles the user interface and experience.
2.  **Backend (Node + Fastify):** Manages business logic and exposes APIs.
3.  **Database (PostgreSQL):** Ensures data persistence.
4.  **Automation (n8n):** Executes asynchronous tasks and workflows.

Communication between the frontend and backend is standardized through a central API function (`/app/services/api.ts`), which handles all HTTP requests. The backend communicates with the database using raw SQL for performance.

---

## 2. Building and Running

### 2.1. Prerequisites

*   **Node.js:** Version `_=_22`
*   **pnpm:** Version `_=_8`

### 2.2. Commands

*   **Install dependencies:**
    ```bash
    pnpm install
    ```
*   **Run development server:**
    ```bash
    pnpm dev
    ```
    The application will be available at `http://localhost:3000`.

*   **Build for production:**
    ```bash
    pnpm build
    ```
*   **Run type checking:**
    ```bash
    pnpm typecheck
    ```
*   **Linting:**
    Before deployment, run the following command to ensure code quality:
    ```bash
    pnpm lint
    ```

---

## 3. Development Conventions

The project enforces a strict set of conventions to maintain code quality and consistency, as detailed in the `codex/` directory.

### 3.1. Naming Conventions

*   **Files:** `kebab-case.ts`
*   **Components:** `PascalCase.vue`
*   **Variables & Functions:** `snake_case` (lowercase, English)
*   **Constants:** `UPPER_SNAKE_CASE`
*   **Types & Interfaces:** `PascalCase`
*   **API Functions:** `api_<action>_<entity>`
*   **Utility Functions:** `utils_<action>`

### 3.2. Code Style

*   **Indentation:** 2 tabs
*   **String Quotes:** Single quotes (`'`)
*   **Semicolons:** Not used
*   **Line Length:** Maximum 250 characters
*   **Comments:** Used to explain the *why*, not the *what*.

### 3.3. Git & Commits

Commit messages must follow the **Conventional Commits** specification.
*   **Format:** `type: short description`
*   **Examples:** `feat: add user authentication`, `fix: resolve login bug`

### 3.4. Internationalization (i18n)

*   All user-facing messages must be handled through `i18n`.
*   The backend returns translation keys (e.g., `"user.created_successfully"`).
*   The frontend uses these keys to display the translated message.

---

## 4. Project Structure

The folder structure is organized by feature to promote modularity.

```
/
├── app/                # Nuxt application source
│   ├── components/     # Feature-based components (e.g., /users, /payments)
│   ├── composables/    # Feature-based composables
│   ├── layouts/        # Application layouts
│   ├── pages/          # Page components
│   ├── services/       # External service integrations (e.g., api.ts)
│   ├── stores/         # Pinia stores, organized by feature
│   └── types/          # TypeScript types and interfaces
├── server/             # Backend API source
│   └── api/
├── layers/
│   └── tairo/          # Tairo UI layer (pnpm workspace)
├── codex/              # Project documentation (architecture, conventions)
├── i18n/               # Translation files (e.g., pt-BR.yaml, en-US.yaml)
├── public/             # Static assets
├── nuxt.config.ts      # Nuxt configuration
├── package.json        # Dependencies and scripts
└── pnpm-workspace.yaml # pnpm workspace configuration
```

---

## 5. Testing

*   **Framework:** **Vitest**
*   **Requirement:** All critical functions must have unit tests.
*   **Test File Naming:** `function_name.spec.ts`
*   **Coverage:** A minimum of **80%** code coverage is required.

---

## 6. Key Files & Directories

*   `GEMINI.md`: This file. Provides project context for AI assistants.
*   `codex/`: Contains all project documentation, including architecture, conventions, and tasks. This is the source of truth for project standards.
*   `package.json`: Defines scripts and dependencies for the entire project.
*   `nuxt.config.ts`: The main configuration file for the Nuxt application.
*   `app/services/api.ts`: The central function for all frontend-to-backend communication.
*   `layers/tairo/`: The directory for the Tairo UI layer, a key component of the visual identity.