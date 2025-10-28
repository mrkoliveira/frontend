# **Project Overview**

**Name:** BoilerPlate

**Objective:** Criar um sistema web moderno e altamente componetizado para uso em múltiplos projetos SaaS, incluindo cadastro, pagamento e outras funções essenciais, permitindo rápida duplicação e reuso.

**Motivação / Problema:** Fornecer uma base sólida e reutilizável que acelere o desenvolvimento de novos sistemas SaaS, garantindo consistência, escalabilidade e menor tempo de setup.

**Escopo / Funcionalidades Principais:**

- Cadastro, autenticação de usuários, validação de email, recuperação de senha e 2FA
- Sistema completo de envio de emails por filas no banco de dados (PostgreSQL)
- Integração com sistema de pagamento
- Painel administrativo e dashboard
- Internacionalização (pt-BR e en)
- Estrutura modular e reaproveitável

**Stack:**

- Frontend: Nuxt 4 + TailwindCSS 3 + DaisyUI 5
- Backend: Windmill ([https://www.windmill.dev/](https://www.windmill.dev/))
- Database: PostgreSQL 18
- Automation: n8n

**Status Atual:** Base Nuxt 4 + TailwindCSS + DaisyUI configurada. Estrutura de pastas e API central em andamento.

**Philosophy:**

- Código limpo, legível e modular.
- Nenhum dado sensível hardcoded.
- Preferência por funções puras e nomes autoexplicativos.

**Licença / Uso:** Este projeto é propriedade da empresa [CodeHaven42](https://codehaven42.com) e é de **uso restrito, licenciado somente mediante compra**. A cópia, redistribuição ou utilização sem aquisição prévia é expressamente proibida.

---

> **Nota:** O roadmap detalhado e os próximos passos do desenvolvimento estão descritos no arquivo `03_tasks.md`, que serve como controle principal das etapas do projeto.
