# Repository Guidelines

## Project Structure & Module Organization
- `app/` hosts Nuxt UI; keep feature-first folders (`components/payments/`, `composables/users/`, `services/`, `stores/`, `types/`).
- `layers/` (currently `tairo`) ships reusable UI packages, while `modules/` bundles Nuxt extensions wired in `nuxt.config.ts`.
- `server/` exposes API routes and middleware; `functions/` stores deployment serverless handlers—frontend code never touches the database.
- `public/` keeps static assets, `i18n/` centralizes translations, and `data-base/` supplies build-time seed data.

## Architecture & Integration Practices
- Route HTTP calls through `app/services/api.ts` (`api_*` helpers), pass the `APP_ID` header, and resolve responses via i18n keys.
- Use `app/plugins/sse.client.ts` for SSE notifications propagated through Pinia/composables.
- JWT auth is issued by Fastify and checked in Nuxt middleware; PostgreSQL stays server-side.
- Review `codex/*.md` before structural changes.

## Build, Test, and Development Commands
- `pnpm install` installs dependencies (Node >= 22, pnpm >= 8).
- `pnpm dev` starts the Nuxt dev server on your network; use `pnpm dev2` if you need automatic browser launch.
- `pnpm build` creates the production bundle, and `pnpm generate` emits a static site to `.output/public`.
- `pnpm typecheck` runs Nuxt’s TypeScript verification; keep it green before pushing.
- Use `pnpm clean` or `pnpm fullClean` to drop build artifacts.
- Run linting with `pnpm exec eslint app` and formatting via `pnpm exec prettier --check .`.

## Coding Style & Naming Conventions
- Enforce ESLint/Prettier: two tabs, single quotes, no semicolons, consistent Vue `<script>` / `<style>` formatting.
- Favor `<script setup lang="ts">`; keep components in PascalCase, composables with `use*`, routes/server files in kebab-case.
- Use snake_case for variables/functions, `UPPER_SNAKE_CASE` for constants, PascalCase for types; prefix context variables with `ctx_` and resolve UI text via `i18n.t()`.

## Testing Guidelines
- Adopt Vitest; mirror the feature tree in `tests/` and target 80%+ coverage.
- Name specs after the unit (`components/dashboard-card.spec.ts`) and run them with `pnpm vitest --run` (add the script alongside the first suite).
- Until automation exists, document manual QA in PRs for auth, billing, and n8n workflows.

## Commit & Pull Request Guidelines
- Follow Conventional Commits from `.versionrc.json` (`feat`, `fix`, `docs`, `perf`); e.g., `feat: integrate sse notifications`.
- Branch off `main` or `develop`, keep messages intent-focused, and tag breaking changes with `BREAKING CHANGE:`.
- PRs should link the matching task in `codex/04_tasks.md`, include UI evidence when relevant, and list executed checks (`pnpm typecheck`, future `pnpm vitest`).
- Seek a reviewer for layer/module updates, verify lint/typecheck, and update `codex/04_tasks.md` after merges.
