# **Database Conventions**

> Este documento define as convenções e boas práticas para a modelagem, nomeação e manipulação de dados no **BoilerPlate**, garantindo consistência, performance e legibilidade. O sistema **não utiliza ORM**, portanto todas as interações são realizadas via **SQL puro**.

---

## **1. Estrutura Geral**

- Todas as instruções SQL estruturais (`CREATE TABLE`, `ALTER TABLE`, `DROP`, etc.) devem estar centralizadas em `/data-base/config-db.sql`.
- Cada módulo ou feature deve ter seu próprio conjunto de tabelas, com prefixo correspondente (ex: `tab_users`, `tab_payments`, `tab_logs`).
- Scripts SQL devem ser organizados por feature dentro da pasta `/data-base/` (ex: `/data-base/users/`, `/data-base/payments/`).
- Cada script deve conter:

  - Cabeçalho com data, autor e descrição.
  - SQL formatado e legível (uppercase para comandos, lowercase para nomes de colunas e tabelas).
  - Comentários explicando decisões importantes.

---

## **2. Convenções de Nomes**

Todas as nomenclaturas seguem **snake_case**, sempre em minúsculas, com prefixos definidos conforme o tipo de objeto:

- **Tabelas:** prefixo `tab_` + nome da entidade no plural (ex: `tab_users`, `tab_payments`).
- **Colunas:** `snake_case` e sempre singular (ex: `user_id`, `created_at`).
- **Chaves primárias:** prefixo `pk_` + referência da tabela (ex: `pk_tab_users`).
- **Chaves estrangeiras:** prefixo `fk_` + tabela_origem + tabela_destino (ex: `fk_tab_users_roles`).
- **Views:** prefixo `view_` + nome da feature (ex: `view_user_stats`).
- **Índices:** prefixo `idx_` + nome da tabela + campo (ex: `idx_tab_users_email`).
- **Funções:** prefixo `fnc_` + ação ou contexto (ex: `fnc_calculate_discount`).
- **Procedures:** prefixo `prc_` + ação (ex: `prc_archive_logs`).
- **Triggers:** prefixo `tgg_` + tabela + ação (ex: `tgg_tab_users_before_insert`, `tgg_tab_payments_after_update`).

---

## **3. Tipagem e Padrões de Colunas**

- Sempre usar tipos nativos do PostgreSQL.
- Padrões recomendados:

  - Chave primária principal: `id_user UUID DEFAULT gen_random_uuid_v7() PRIMARY KEY`. Essa será a chave da tabela `tab_users` e servirá como referência para todas as demais tabelas como chave estrangeira. O tipo `UUID v7` garante unicidade e ordenação temporal.
  - Campos booleanos: `is_` + descrição (ex: `is_active`, `is_deleted`).
  - Datas: `created_at`, `updated_at`, `deleted_at` (quando aplicável).
  - JSON: utilizar `JSONB` para dados estruturados e de formato variável.
  - Enum: quando necessário, usar `CHECK` ou tabelas auxiliares de domínio.
  - Logs importantes devem ser armazenados em `tab_logs`, cuja chave primária será um campo serial auto incrementado (`id_log SERIAL PRIMARY KEY`).
  - A tabela `tab_logs` conterá o campo `data_log` com o conteúdo textual do log e demais metadados relevantes.

---

## **4. Integridade e Relacionamentos**

- Toda relação entre tabelas deve ter **chaves estrangeiras explícitas**.
- Cascades devem ser aplicadas **sempre com ON DELETE CASCADE**, pois a estrutura é baseada em uma entidade principal `tab_users`, cuja chave primária `id_user` atua como chave estrangeira em todas as demais tabelas.
- O campo `email` em `tab_users` deve ter uma **constraint UNIQUE**, garantindo que não haja duplicidade de registros.
- Manter consistência referencial sempre ativa.
- Evitar redundância de dados (seguir normalização até 3FN, exceto em casos justificados de performance).

---

## **5. Scripts e Versionamento**

- Scripts SQL devem ser versionados no Git dentro de `/data-base/`.
- Nomeie os arquivos no formato: `YYYYMMDD_<descricao>.sql` (ex: `20251024_create_tab_users.sql`).
- Cada alteração estrutural deve ter um script próprio e reversível (ex: `down` script para rollback).
- Nunca alterar diretamente tabelas em produção — sempre via script versionado.

---

## **6. Consultas e Performance**

- Sempre usar `EXPLAIN` para validar performance de queries complexas.
- Evitar subqueries desnecessárias — prefira `JOIN`s.
- Indexar colunas usadas em `WHERE`, `JOIN` ou `ORDER BY`.
- Evitar `SELECT *`; selecione apenas colunas necessárias.
- Queries devem estar otimizadas para leituras rápidas — operações de escrita pesadas devem ser tratadas via filas (n8n).

---

## **7. Segurança e Acesso**

- Nunca armazenar senhas em texto puro — sempre usar `bcrypt` ou similar.
- Conexões ao banco devem utilizar SSL.
- Cada ambiente (dev, staging, prod) deve ter credenciais isoladas.
- Aplicar políticas de **least privilege** (usuários do banco com permissões restritas).

---

## **8. Padronização de Respostas e Mensagens**

- Toda função ou trigger que retorna mensagens deve retornar **chaves i18n** (ex: `message: 'user.created_successfully'`).
- O backend é responsável por traduzir essas chaves no frontend via `i18n.t()`.

---

## **9. Backup e Recuperação**

- Backups automáticos diários e semanais.
- Manter no mínimo 7 dias de retenção de backup.
- Restaurar sempre em ambiente de staging antes de produção.

---

## **10. Filosofia de Banco de Dados**

- Priorizar legibilidade e simplicidade sobre abstrações.
- SQL deve ser direto, explícito e versionado.
- Nenhum dado sensível deve ser inserido ou manipulado fora do controle de scripts versionados.
- Todo relacionamento e integridade devem ser definidos **no banco**, não apenas na aplicação.
- Todos os objetos devem seguir **snake_case**, em letras minúsculas, sem exceções.
- Toda operação deve ser encapsulada em **funções SQL** (`fnc_`) para garantir padronização, controle e reuso. Exemplo: `fnc_register_user` verifica se o email existe, cadastra o usuário, registra o log e insere o evento na fila de emails (`tab_queue_mail`).
- Senhas devem ser tratadas **na camada de aplicação**, ou seja, o banco sempre receberá a senha já criptografada.
- **Triggers** e **funções** podem ser usadas para eventos automáticos, como registro de logs ou disparo de processos assíncronos. O backend pode ouvir esses eventos para enviar notificações ou emails.

---

**Observação:** Essas convenções garantem padronização e previsibilidade em um ambiente SQL puro, sem dependência de ORM, mantendo o controle total sobre a estrutura, performance e automação do banco.

---

## **Exemplos Práticos**

### **Tabela Principal: tab_users**

```sql
CREATE TABLE tab_users (
  id_user UUID DEFAULT gen_random_uuid_v7() PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT NOW()
);
```

### **Tabela de Logs: tab_logs**

```sql
CREATE TABLE tab_logs (
  id_log SERIAL PRIMARY KEY,
  id_user UUID REFERENCES tab_users(id_user) ON DELETE CASCADE,
  data_log TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);
```

### **Fila de E-mails: tab_queue_mail**

```sql
CREATE TABLE tab_queue_mail (
  id_queue SERIAL PRIMARY KEY,
  id_user UUID REFERENCES tab_users(id_user) ON DELETE CASCADE,
  email_to TEXT NOT NULL,
  subject TEXT NOT NULL,
  body TEXT NOT NULL,
  status TEXT DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT NOW()
);
```

### **Função de Registro de Usuário: fnc_register_user**

```sql
CREATE OR REPLACE FUNCTION fnc_register_user(p_email TEXT, p_password_hash TEXT)
RETURNS TEXT AS $$
BEGIN
  IF EXISTS (SELECT 1 FROM tab_users WHERE email = p_email) THEN
    RETURN 'user.email_already_exists';
  END IF;

  INSERT INTO tab_users (email, password_hash) VALUES (p_email, p_password_hash);

  INSERT INTO tab_logs (data_log) VALUES ('Novo usuário registrado: ' || p_email);

  INSERT INTO tab_queue_mail (id_user, email_to, subject, body)
  VALUES ((SELECT id_user FROM tab_users WHERE email = p_email), p_email, 'Bem-vindo!', 'Seu cadastro foi realizado com sucesso.');

  RETURN 'user.created_successfully';
END;
$$ LANGUAGE plpgsql;
```

### **Trigger Automática: tgg_tab_users_after_insert**

```sql
CREATE OR REPLACE FUNCTION fnc_log_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO tab_logs (id_user, data_log) VALUES (NEW.id_user, 'Usuário criado via trigger.');
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER tgg_tab_users_after_insert
AFTER INSERT ON tab_users
FOR EACH ROW
EXECUTE FUNCTION fnc_log_new_user();
```

Esses exemplos demonstram o padrão de criação e automação adotado no banco de dados: uso de UUID v7, padronização de nomes, funções encapsulando operações e triggers automatizando logs e integrações.

---

## **Exemplo de Script de Rollback (Down Script)**

```sql
-- Rollback para remoção das tabelas e funções criadas
-- Executar apenas em ambiente de desenvolvimento ou staging

DROP TRIGGER IF EXISTS tgg_tab_users_after_insert ON tab_users;
DROP FUNCTION IF EXISTS fnc_log_new_user();
DROP FUNCTION IF EXISTS fnc_register_user(TEXT, TEXT);

DROP TABLE IF EXISTS tab_queue_mail CASCADE;
DROP TABLE IF EXISTS tab_logs CASCADE;
DROP TABLE IF EXISTS tab_users CASCADE;
```

Esse exemplo ilustra o padrão de rollback utilizado para manter versionamento e segurança das alterações no banco de dados.
