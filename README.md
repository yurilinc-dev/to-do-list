## Language Selection

- [Português (PT-BR)](#projeto-to-do-list)
- [English (EN-US)](#to-do-list-project)


# Projeto To-Do List

## Descrição

Este é um projeto em NodeJS que implementa uma aplicação To-Do List seguindo a arquitetura MVC (Model-View-Controller). A aplicação utiliza EJS como mecanismo de template para renderização das páginas, Express como framework web, MongoDB como banco de dados NoSQL, e Mongoose como ODM (Object Data Modeling). O código é estruturado de forma modular, facilitando a manutenção e extensão do projeto.

**Language:** PT-BR

## Instalação

Certifique-se de ter o Node.js e o MongoDB instalados na sua máquina antes de prosseguir.

1. Clone o repositório:

```bash
git clone https://seu-repositorio/to-do-list.git
cd to-do-list
```

2. Instale as dependências:

```bash
npm install
```

3. Crie um arquivo `.env` na raiz do projeto e configure as variáveis de ambiente necessárias. Exemplo:

```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/to-do-list
```

**Language:** PT-BR

## Execução

Existem dois scripts disponíveis:

- `npm start`: Inicia o servidor NodeJS.
- `npm run dev`: Inicia o servidor NodeJS usando nodemon para reinicialização automática durante o desenvolvimento.

Execute o script desejado:

```bash
npm start
# ou
npm run dev
```

Acesse a aplicação em [http://localhost:3000](http://localhost:3000) no seu navegador.

**Language:** PT-BR

## Estrutura do Projeto

O projeto é organizado da seguinte forma:

- `index.js`: Ponto de entrada da aplicação.
- `src/`:
  - `controllers/`: Controladores da aplicação.
  - `models/`: Definição dos modelos MongoDB utilizando Mongoose.
  - `routes/`: Rotas da aplicação.
  - `views/`: Arquivos EJS para as visualizações.
  - `public/`: Arquivos estáticos (CSS, imagens, etc.).
- `.env`: Arquivo de configuração das variáveis de ambiente.

**Language:** PT-BR

## Dependências

- `ejs`: Módulo de template para renderização de páginas HTML.
- `express`: Framework web para NodeJS.
- `mongodb`: Driver oficial do MongoDB para NodeJS.
- `mongoose`: ODM para modelagem de dados MongoDB.
- `nodemon`: Ferramenta que reinicia automaticamente a aplicação durante o desenvolvimento.
- `dotenv`: Carrega variáveis de ambiente de um arquivo `.env`.

**Language:** PT-BR

## Autor

Yuri Lincoln

**Language:** PT-BR

## Licença

ISC (Licença Pública de Software Simplificada)

---

# To-Do List Project

## Description

This is a NodeJS project that implements a To-Do List application following the MVC (Model-View-Controller) architecture. The application uses EJS as the template engine for rendering pages, Express as the web framework, MongoDB as the NoSQL database, and Mongoose as the Object Data Modeling (ODM) library. The code is modularly structured, making it easy to maintain and extend.

**Language:** EN-US

## Installation

Make sure you have Node.js and MongoDB installed on your machine before proceeding.

1. Clone the repository:

```bash
git clone https://your-repository/to-do-list.git
cd to-do-list
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the project root and configure the necessary environment variables. Example:

```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/to-do-list
```

**Language:** EN-US

## Execution

There are two available scripts:

- `npm start`: Starts the NodeJS server.
- `npm run dev`: Starts the NodeJS server using nodemon for automatic restart during development.

Run the desired script:

```bash
npm start
# or
npm run dev
```

Access the application at [http://localhost:3000](http://localhost:3000) in your browser.

**Language:** EN-US

## Project Structure

The project is organized as follows:

- `index.js`: Entry point of the application.
- `src/`:
  - `controllers/`: Application controllers.
  - `models/`: MongoDB model definitions using Mongoose.
  - `routes/`: Application routes.
  - `views/`: EJS files for views.
  - `public/`: Static files (CSS, images, etc.).
- `.env`: Configuration file for environment variables.

**Language:** EN-US

## Dependencies

- `ejs`: Template engine for HTML page rendering.
- `express`: Web framework for NodeJS.
- `mongodb`: Official MongoDB driver for NodeJS.
- `mongoose`: ODM for MongoDB data modeling.
- `nodemon`: Tool that automatically restarts the application during development.
- `dotenv`: Loads environment variables from a `.env` file.

**Language:** EN-US

## Author

Yuri Lincoln

**Language:** EN-US

## License

ISC (Internet Systems Consortium) License

---