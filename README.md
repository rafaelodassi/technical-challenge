# Technical Challenge

Application for process management.

## 🚀 Getting started

These instructions will help you get a copy of the project up and running on your local machine for development and testing purposes.

### 📋 Prerequisites

- NodeJS version 20.10.0 or higher installed on the local machine

### 🔧 Installation

Download and navigate to the project folder

```
cd technical-challenge
```

Install dependencies

```
npm install
```

Run the project locally

```
npm run dev
```

Open the project URL in the browser

```
http://localhost:3000/
```

The variables can be set as needed in the .env file

```
KEYCLOAK_URL=https://staging.botcity.dev:8050/realms/fe-test
NEXT_PUBLIC_BASE_KEYCLOAK_URL=http://localhost:3000
CLIENT_ID=test
SECRET=VCZ4ke7ErTGy4NuqPlufwnob4OlglTk9jy6C5qNcvQ8=
LOGOUT_REDIRECT_URL=http://localhost:3000
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=lqr++EPg9L4qvGSPQnCIEToZF60S9mURsPNeV42NC5k=
```

## ⚠️ Attention

The server's API routes have CORS enabled. To test the application, you will need to either disable CORS on the server, allow requests from localhost:3000, or use a browser extension that bypasses CORS.

## 🛠️ Built with

Main tools used in the project

- [React](https://react.dev/) - Library for web and user interfaces
- [NextJS](https://nextjs.org/) - Framework React
- [NextAuth.js](https://next-auth.js.org/) - Authentication
- [Tailwind CSS](https://v3.tailwindcss.com/) - CSS
- [TypeScript](https://www.typescriptlang.org/) - Typing and code standards
- [ESLint](https://eslint.org/) - Code analysis
- [Prettier](https://prettier.io/) - Code formatting
