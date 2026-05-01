# Evidencia de Execucao do Pipeline CI

Entrega: **TDE - Implementar pipeline CI do projeto** (DevOps,
BES_2026_1SEM_7U_EQ11).

## Resultado

**Pipeline:** `BES_2026_1SEM_7U_EQ11` (definitionId 820)
**Run:** `20260430.1` (Run ID **44616**)
**Status:** `completed`
**Resultado:** `succeeded`
**Branch:** `refs/heads/feature/entrega-final-tde`
**Commit:** `8b6a4f7c6b9c63566135bdfcc2b1eceadb124924`
**Disparo:** manual (validacao da entrega TDE antes do merge para
master)

### Janela de execucao

| Evento     | Horario (UTC)               |
| ---------- | --------------------------- |
| Enfileirado| 2026-05-01 00:08:43.801037  |
| Iniciado   | 2026-05-01 00:08:52.632811  |
| Finalizado | 2026-05-01 00:09:50.689994  |
| Duracao    | ~67 segundos                |

### URL direta da execucao

```
https://dev.azure.com/pucpr-estudantes/BES_2026_1SEM_7U_EQ11/_build/results?buildId=44616
```

## Saida do `az pipelines runs show`

```
Run ID    Number      Status     Result     Pipeline ID    Pipeline Name          Source Branch              Queued Time                 Reason
--------  ----------  ---------  ---------  -------------  ---------------------  -------------------------  --------------------------  --------
44616     20260430.1  completed  succeeded  820            BES_2026_1SEM_7U_EQ11  feature/entrega-final-tde  2026-04-30 21:08:43.801037  manual
```

## Etapas executadas (todas verdes)

Saida da timeline da execucao (`az devops invoke --area build
--resource Timeline ...`):

```
Name                                                                     Result     Started                       Finished
-----------------------------------------------------------------------  ---------  ----------------------------  ----------------------------
Initialize job                                                           succeeded  2026-05-01T00:08:56.4866667Z  2026-05-01T00:08:59.64Z
Checkout BES_2026_1SEM_7U_EQ11@feature/entrega-final-tde to s            succeeded  2026-05-01T00:08:59.8233333Z  2026-05-01T00:09:02.67Z
Install Node.js 20.x                                                     succeeded  2026-05-01T00:09:02.67Z       2026-05-01T00:09:02.8566667Z
Install dependencies (npm ci)                                            succeeded  2026-05-01T00:09:02.8566667Z  2026-05-01T00:09:24.8066667Z
Run unit tests (Vitest)                                                  succeeded  2026-05-01T00:09:24.81Z       2026-05-01T00:09:27.9366667Z
Build production bundle (next build)                                     succeeded  2026-05-01T00:09:27.94Z       2026-05-01T00:09:40.1866667Z
Post-job: Checkout BES_2026_1SEM_7U_EQ11@feature/entrega-final-tde to s  succeeded  2026-05-01T00:09:40.1866667Z  2026-05-01T00:09:40.4Z
Finalize Job                                                             succeeded  2026-05-01T00:09:40.4033333Z  2026-05-01T00:09:40.43Z
Report build status                                                      succeeded  2026-05-01T00:09:50.9266667Z  2026-05-01T00:09:51.0533333Z
```

## Mapeamento etapa -> arquivo YAML

A pipeline esta declarada em `azure-pipelines.yml`. As etapas
correspondem a:

1. `Install Node.js 20.x` -> task `NodeTool@0` com `versionSpec:
   $(NODE_VERSION)`.
2. `Install dependencies (npm ci)` -> `script: npm ci`.
3. `Run unit tests (Vitest)` -> `script: npm test` (executa
   `vitest run` cobrindo `lib/__tests__/auth.test.ts` e
   `app/login/__tests__/page.test.tsx`).
4. `Build production bundle (next build)` -> `script: npm run
   build`.

## Requisitos atendidos

- [x] **Trigger automatico por push em master** — declarado em
      `azure-pipelines.yml` (`trigger.branches.include: master`).
- [x] **Validacao automatica em Pull Request para master** —
      declarado em `azure-pipelines.yml` (`pr.branches.include:
      master`).
- [x] **Etapa de build** — `npm run build` (Next.js production
      build).
- [x] **Execucao de testes automatizados** — `npm test` (Vitest +
      Testing Library, 11 testes).
- [x] **Feedback visual do status** — disponivel na pagina
      Pipelines do Azure DevOps (link acima).
- [x] **Boas praticas DevOps** — branch `feature/entrega-final-tde`
      criada a partir de `master`, integracao via Pull Request
      **#2859**, mensagens em padrao Conventional Commits.
