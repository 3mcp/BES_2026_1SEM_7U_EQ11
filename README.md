# 🏅 OlympycShare

> Rede social esportiva para criação e participação em eventos esportivos oficiais e não oficiais.

---

## 📋 Sobre o Projeto

O **OlympycShare** é uma plataforma que integra pessoas interessadas no meio esportivo, permitindo:

- Criação e participação em eventos esportivos (oficiais e informais)
- Feed de publicações com interações sociais
- Sistema de amizades e grupos por esporte ou interesse
- Agendamento e organização de eventos

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Descrição |
|---|---|
| [Next.js](https://nextjs.org/) | Framework React para produção |
| [TypeScript](https://www.typescriptlang.org/) | Tipagem estática |
| [Tailwind CSS](https://tailwindcss.com/) | Estilização utilitária |
| [shadcn/ui](https://ui.shadcn.com/) | Componentes de interface |
| [Azure DevOps](https://azure.microsoft.com/pt-br/products/devops) | Repositório, Boards e CI/CD |

---

## 📁 Estrutura do Projeto

```
projeto-teste/
├── app/                    # Páginas e layouts (App Router do Next.js)
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/             # Componentes reutilizáveis
│   ├── sidebar.tsx
│   ├── theme-provider.tsx
│   └── ui/                 # Componentes shadcn/ui
├── hooks/                  # Custom hooks React
├── lib/                    # Utilitários e configurações
├── public/                 # Arquivos estáticos
├── styles/                 # Estilos globais
├── next.config.mjs
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## 🚀 Como Rodar Localmente

### Pré-requisitos

- [Node.js](https://nodejs.org/) v18 ou superior
- [Git](https://git-scm.com/)

### Passo a passo

```bash
# 1. Clone o repositório
git clone <URL_DO_REPOSITORIO>
cd projeto-teste

# 2. Instale as dependências
npm install

# 3. Rode o servidor de desenvolvimento
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) no navegador.

### Scripts disponíveis

```bash
npm run dev       # Inicia o servidor de desenvolvimento
npm run build     # Gera o build de produção
npm run start     # Inicia o servidor em modo produção
npm run lint      # Executa o linter
```

---

## 🌿 Fluxo de Branches (Git)

```
main
└── feat/inicial     ← branch atual de desenvolvimento
```

> Sempre crie uma nova branch a partir de `main` para novas features:

```bash
git checkout main
git pull
git checkout -b feat/nome-da-feature
```

### Convenção de commits

```
feat: nova funcionalidade
fix: correção de bug
chore: tarefas de configuração/build
docs: atualização de documentação
style: formatação/estilo de código
refactor: refatoração sem mudança de comportamento
```

---

## 📦 Entregas da Sprint (Azure DevOps)

Conforme orientação do professor, cada entrega deve conter:

- [x] Backlog estruturado no Azure Boards
- [x] Sprint planejada
- [x] Board com tasks em diferentes estados
- [x] Link do repositório no Azure DevOps
- [ ] Breve relatório (1 a 2 páginas) com:
  - Como a equipe se organizou
  - Dificuldades encontradas
  - O que aprenderam com o uso das ferramentas
  - Como dividiram as tarefas

---

## 👥 Equipe

Projeto desenvolvido pela equipe **BES_2026_1SEM_7U_EQ11** — PUCPR.

---

## 📄 Licença

Este projeto é de uso acadêmico e não possui licença para distribuição comercial.
