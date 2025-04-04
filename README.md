# Technical Challenge

Aplicação para gerenciamento de processos.

## 🚀 Começando

Essas instruções permitirão que você obtenha uma cópia do projeto em operação na sua máquina local para fins de desenvolvimento e teste.

### 📋 Pré-requisitos

- NodeJS 20.10.0 ou maior instalado na máquina local

### 🔧 Instalação

Baixar e ir para a pasta do projeto

```
cd technical-challenge
```

Instalar dependências

```
npm install
```

Rodar o projeto local

```
npm run dev
```

Abrir a url do projeto no navegador

```
http://localhost:3000/
```

As variáveis podem ser alimentadas conforme a necessidade (.env)

```
KEYCLOAK_URL=https://staging.botcity.dev:8050/realms/fe-test
NEXT_PUBLIC_BASE_KEYCLOAK_URL=http://localhost:3000
CLIENT_ID=test
SECRET=VCZ4ke7ErTGy4NuqPlufwnob4OlglTk9jy6C5qNcvQ8=
LOGOUT_REDIRECT_URL=http://localhost:3000
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=lqr++EPg9L4qvGSPQnCIEToZF60S9mURsPNeV42NC5k=
```

## ⚠️ Atenção

As rotas de api do servidor estão com CORS habilitado, para testar a aplicação, será necessário desabilitar o CORS no servidor, liberar para localhost:3000 ou utilizar alguma extensão do navegador que ignora o CORS.

## 🛠️ Construído com

Principais ferramentas utilizadas no projeto

- [React](https://react.dev/) - Biblioteca para web e interfaces de usuário
- [NextJS](https://nextjs.org/) - Framework React
- [NextAuth.js](https://next-auth.js.org/) - Autenticação
- [Tailwind CSS](https://v3.tailwindcss.com/) - CSS
- [TypeScript](https://www.typescriptlang.org/) - Tipagem e padrão de código
- [ESLint](https://eslint.org/) - Análise de código
- [Prettier](https://prettier.io/) - Formatação de código
