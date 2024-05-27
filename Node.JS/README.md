# Progress Report 3.1 (Udemy) - Anotações gerais sobre Node.JS

---

O JavaScript é uma linguagem feita para rodar apenas nos navegadores, dentro das páginas web, pois todo navegador tem um interpretador.
O Node.js é um interpretador JavaScript que roda fora dos navegadores, e ele permite rodar o JavaScript fora do navegador, e com ele voce consegue criar qualquer aplicação JavaScript, independente de navegador.
Porque usar Node.JS : muito leve, muito rapido, usa JS, tem um dos maiores ecossistemas do mundo, está sendo utilizado fortemente no mercado.

Usando módulos:

```
module.exports = {  // exportando as funções para qualquer parte do programa
    função1,
    função2,
};

var variavel = require("./nomeDoFile");  // importando as funçoes
```

---

HTTP: Dividido em 2 ações: requisição e resposta, o retorno de dados só é possivel graças ao HTTP, o protocolo e a base que move a WEB.

```
var http = require(“http”);
http.createServer().listen(3000);`
```

http://localhost:3000 (no navegador)
Express.js: framework que ajuda a construir operações back-end com o Node.js
npm init
npm install express --save
const express = require("express"); // Importando o express
const app = express(); // Iniciando o express
