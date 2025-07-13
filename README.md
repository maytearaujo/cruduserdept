# CRUD de Usuários e Departamentos

Este é um projeto de frontend para um sistema de CRUD (Criar, Ler, Atualizar, Deletar) para gerenciar usuários e seus respectivos departamentos. A aplicação foi desenvolvida utilizando Next.js e TypeScript.

## ✨ Tecnologias Utilizadas

- **Next.js**: Framework React para produção.
- **React**: Biblioteca para construir interfaces de usuário.
- **TypeScript**: Superset de JavaScript que adiciona tipagem estática.
- **Tailwind CSS**: Framework de CSS utility-first para estilização rápida.
- **Axios**: Cliente HTTP baseado em Promises para fazer requisições a uma API.
- **Geist**: Família de fontes utilizada no projeto.

## 🚀 Começando

Siga as instruções abaixo para configurar e executar o projeto em seu ambiente de desenvolvimento local.

### Pré-requisitos

- Node.js (versão 18.x ou superior)
- npm, yarn, ou pnpm

### Instalação

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/maytearaujo/cruduserdept.git
    cd cruduserdept
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    # ou
    yarn install
    # ou
    pnpm install
    ```

3.  **Configure as Variáveis de Ambiente:**
    Este projeto precisa se conectar a uma API backend para funcionar. Crie um arquivo `.env.local` na raiz do projeto, copiando o exemplo de `.env.local.example`:

    ```bash
    cp .env.local.example .env.local
    ```

    Em seguida, edite o arquivo `.env.local` e defina a URL da sua API:
    ```
    NEXT_PUBLIC_API_URL=http://localhost:8080
    ```

4.  **Execute o servidor de desenvolvimento:**
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
