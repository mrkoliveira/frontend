# **Architecture**

> Este documento descreve a arquitetura geral do projeto **BoilerPlate**, explicando como as camadas e serviços se integram para formar o sistema completo.

---

## 1. Visão Geral da Arquitetura

O sistema segue uma **arquitetura em camadas** dividida em quatro partes principais:

1. **Frontend (Nuxt 4)** — Interface e experiência do usuário.
2. **Backend (Windmill)** — Processamento de lógica e APIs.
3. **Banco de Dados (PostgreSQL)** — Persistência de dados.
4. **Automação (n8n)** — Fluxos automáticos e tarefas assíncronas.

Cada camada é independente, mas se comunica de forma padronizada através de APIs REST e webhooks.

---

## 2. Fluxo de Dados

1. O usuário interage com a interface do **Nuxt 4**, que envia requisições para o **Backend (Windmill)** através da função central `api_request()`.
2. O backend processa as solicitações, acessa o **PostgreSQL** diretamente via SQL e retorna respostas padronizadas (status, data, message).
3. Para tarefas assíncronas (envio de emails, relatórios, billing), o backend aciona **workflows no n8n** via webhooks.
4. O **n8n** executa as automações necessárias e, se aplicável, retorna dados ao backend.

---

## 3. Comunicação Entre Camadas

- **Frontend → Backend:** via `services/api.ts` com métodos HTTP (GET, POST, PUT, DELETE).
- **Backend → Banco de Dados:** via scripts SQL diretos sem ORM, priorizando performance e simplicidade.
- **Backend → n8n:** via webhooks configurados, disparando fluxos assíncronos.
- **Frontend → Banco de Dados:** nunca ocorre diretamente; todo acesso passa pelo backend.

### Comunicação Reativa (SSE)

- O **Frontend** mantém uma conexão aberta com o **Backend** por meio de **SSE (Server-Sent Events)** para receber notificações e atualizações em tempo real.
- O **Backend** envia eventos unidirecionais sempre que há novas informações, status de tarefas ou mensagens relevantes.
- Essa abordagem elimina a necessidade de **WebSocket**, pois o **Frontend** não envia dados de volta, apenas recebe notificações.
- O canal SSE é leve, eficiente e ideal para o tipo de comunicação unidirecional usada neste projeto.

### Padronização de Mensagens (i18n)

- Todas as respostas do **Backend** devem retornar mensagens como chaves de tradução (ex: `message: "user.created_successfully"`).
- O **Frontend** deve resolver essas chaves usando o sistema **i18n**, exibindo o texto traduzido correspondente.
- Essa abordagem garante consistência entre idiomas e centraliza a gestão de mensagens.
- Aplica-se a todos os tipos de resposta: sucesso, erro, alerta e notificações.

## 4. Estrutura de Dependências

- O **Frontend** depende do **Backend** para todas as operações de dados.
- O **Backend** depende do **Banco de Dados** e do **n8n** para persistência e automação.
- O **n8n** funciona de forma independente, mas recebe dados do **Backend**.

Essa estrutura garante baixo acoplamento e alta coesão, facilitando manutenção e escalabilidade.

---

## 5. Autenticação e Autorização

- O sistema usa **JWT** (JSON Web Token) para autenticação de usuários.
- Tokens são gerados pelo backend e armazenados com segurança no frontend (cookies HttpOnly ou LocalStorage, conforme o caso).
- Middleware no frontend protege rotas e verifica a validade dos tokens antes de cada requisição.

---

## 6. Integrações Externas

- **Windmill:** executa scripts e funções backend com segurança.
- **n8n:** gerencia automações, notificações e integrações de terceiros.
- **Serviços de Pagamento:** integração modular (Stripe, PayPal, etc.) futura.

---

## 7. Arquitetura em Camadas (Resumo)

```
[ Nuxt 4 (Frontend) ]
          ↓
[ API Central (services/api.ts) ]
          ↓
[ Windmill (Backend) ]
          ↓
[ PostgreSQL (Banco de Dados) ]
          ↕
[ n8n (Automação / Webhooks) ]
```

---

## 8. Segurança Adicional

- Aplicar políticas **CORS** restritivas, permitindo apenas domínios autorizados.
- Implementar **Rate Limit** para proteger endpoints críticos.
- Utilizar tokens e cookies com atributos **HttpOnly** e **Secure**.
- Adotar validação de entrada e saída de dados no backend.
- Implementar proteção contra **CSRF** em formulários e requisições autenticadas.
- Evitar exposição de informações sensíveis em headers ou logs.

---

## 9. Filosofia Arquitetural

- Separação clara entre camadas (frontend, backend, automação e dados).
- Baixo acoplamento e alta coesão.
- Código simples, modular e reutilizável.
- Preferência por comunicação explícita via API e não por dependências diretas.
- Uso mínimo de dependências externas.

---

> **Observação:** Este documento define a estrutura lógica e o fluxo do sistema. As convenções detalhadas de código, pastas e nomeação estão documentadas em `02_conventions.md`.
