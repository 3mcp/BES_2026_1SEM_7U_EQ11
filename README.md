# OlympycShare

Rede social esportiva para criar e participar de eventos esportivos
oficiais e informais, manter um feed de publicacoes e organizar grupos
por modalidade.

## Descricao

Este projeto foi desenvolvido como parte da disciplina de **DevOps**
(Bacharelado em Engenharia de Software, PUCPR). A aplicacao tem como
objetivo demonstrar um sistema funcional com tela de login, navegacao
entre paginas, organizacao de codigo, versionamento, documentacao,
testes automatizados e pipeline de Integracao Continua no Azure
DevOps.

## Funcionalidades

- Tela de login com autenticacao simulada e protecao de rotas
- Feed social esportivo com publicacoes
- Pagina de eventos com filtros por esporte e por tipo (oficial /
  informal)
- Pagina de grupos por modalidade
- Pagina de perfil do usuario
- Modal de criacao de evento
- Logout e indicador do usuario logado no header

## Login de Teste

```
E-mail: admin@email.com
Senha:  123456
```

A sessao e mantida em `localStorage`. Acessar qualquer rota protegida
sem sessao redireciona para `/login`.

## Tecnologias Utilizadas

- Next.js 16 (App Router) + React 19 + TypeScript
- Tailwind CSS v4 + shadcn/ui (componentes acessiveis)
- Vitest + Testing Library (testes unitarios)
- Azure DevOps (repositorio Git, Boards e Pipelines)

## Como Executar o Projeto

### Pre-requisitos

- Node.js 20 ou superior
- npm 10 ou superior

### Passo a passo

```bash
# 1. Clone o repositorio
git clone git@ssh.dev.azure.com:v3/pucpr-estudantes/BES_2026_1SEM_7U_EQ11/BES_2026_1SEM_7U_EQ11
cd BES_2026_1SEM_7U_EQ11

# 2. Instale as dependencias
npm install

# 3. Suba o servidor de desenvolvimento
npm run dev
```

Acesse http://localhost:3000 — voce sera redirecionado para
`/login`. Use as credenciais de demonstracao para entrar.

### Scripts disponiveis

```bash
npm run dev     # servidor de desenvolvimento (Turbopack)
npm run build   # build de producao
npm run start   # servidor de producao
npm test        # executa os testes Vitest uma vez
npm run lint    # executa o ESLint
```

## Estrutura do Projeto

```
.
|-- app/                # Rotas (App Router): /, /login, /dashboard
|   |-- login/          # Tela de login + testes
|   `-- dashboard/      # Dashboard administrativo
|-- components/         # Componentes de UI e features
|   |-- auth-guard.tsx  # Protecao de rotas autenticadas
|   `-- ui/             # Primitives shadcn/ui
|-- lib/                # Helpers (auth, mock-data, utils) + testes
|-- hooks/              # Custom hooks
|-- public/             # Assets estaticos
|-- selenium-teste/     # Testes E2E em Selenium (executado a parte)
|-- azure-pipelines.yml # Pipeline CI: install -> test -> build
|-- vitest.config.ts    # Configuracao do Vitest (jsdom + paths)
`-- vitest.setup.ts     # Setup global dos testes
```

## Pipeline de Integracao Continua

Toda mudanca empurrada para `master` e todo Pull Request direcionado
a `master` disparam o pipeline definido em `azure-pipelines.yml`,
que executa, em sequencia:

1. Instalacao do Node.js 20
2. `npm ci` — instalacao reproduzivel das dependencias
3. `npm test` — testes unitarios com Vitest
4. `npm run build` — build de producao do Next.js

O status visual da execucao fica disponivel em `Pipelines` no Azure
DevOps. O pipeline so e considerado verde quando todas as etapas
passam.

## Estrategia de Branches e Pull Requests

- `master` — branch principal, recebe somente codigo validado por
  pipeline e revisao
- `feature/*` — branches de feature criadas a partir de `master`,
  integradas via Pull Request

Padrao de mensagens (Conventional Commits):

```
feat:     nova funcionalidade
fix:      correcao de bug
test:     testes automatizados
ci:       pipeline / build
docs:     documentacao
style:    formatacao, ajustes visuais
chore:    tarefas de manutencao
refactor: refatoracao sem mudanca de comportamento
```

## Objetivo Academico

A entrega demonstra a aplicacao de praticas de DevOps:

- Versionamento e estrategia de branches no Azure Repos
- Trabalho organizado no Azure Boards (User Stories e Features)
- Pull Request como ponto de revisao e integracao
- Pipeline CI com build e testes automatizados
- Documentacao da execucao e do design do projeto

## Equipe

Projeto desenvolvido pela equipe **BES_2026_1SEM_7U_EQ11** —
Bacharelado em Engenharia de Software, PUCPR. A autoria de cada
contribuicao fica registrada no historico do repositorio.

## Status

Em finalizacao para entrega academica.
