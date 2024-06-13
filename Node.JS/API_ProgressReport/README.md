# Progress Report 3.1 - Tarefa 3: Atividade Projeto de APIs

##  ** API de Cadastro de Cidades e Clientes **

>_Este projeto é uma API RESTful para cadastro de cidades e clientes, desenvolvida utilizando Node.js, Express e MongoDB. A API permite cadastrar, consultar, atualizar e remover cidades e clientes._


---
## * Visão Geral do Projeto * 

A API oferece endpoints para:
- Cadastrar cidades
- Consultar cidades pelo nome ou estado
- Cadastrar clientes
- Consultar clientes pelo nome ou ID
- Atualizar informações de clientes
- Remover clientes

---
## * Estrutura do projeto *
  *_/src/_* 

  Contém todo o código fonte do projeto
  - _app.js_: Configuração principal do aplicativo Express, incluindo middleware, conexões de rotas e configuração do MongoDB.

  - _server.js_: Inicializa o servidor na porta especificada.
  
- _/controllers/_ : contém a lógica de negócios e manipulação de dados para cada recurso
  - cityController.js: Controlador responsável por operações relacionadas a cidades.
  - customerController.js: Controlador responsável por operações relacionadas a clientes.

- _/models/_: Contém os modelos de dados do MongoDB usando Mongoose.
  - City.js: Modelo de cidade com os campos name e state.
  - Customer.js: Modelo de cliente com os campos fullName, gender, birthDate, age, e city.
- _/routes/_: Define as rotas da API.
  - cityRoutes.js: Rotas para operações de cidade.
  - customerRoutes.js: Rotas para operações de cliente.


*_/test/_*

Contém os testes automatizados do projeto.
 - cityCust.test.js: Contém testes para as funcionalidades de cidades e clientes usando Jest e Supertest.
 - server.test.js: Testa se o servidor está respondendo na porta especificada.
