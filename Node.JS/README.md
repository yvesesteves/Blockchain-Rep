# Progress Report 3.1 - Anotações gerais sobre Node.JS

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

** HTTP:**  Dividido em 2 ações: requisição e resposta, o retorno de dados só é possivel graças ao HTTP, o protocolo e a base que move a WEB.



```
var http = require(“http”);
http.createServer().listen(3000);
```

http://localhost:3000 (no navegador)
Express.js: framework que ajuda a construir operações back-end com o Node.js
npm init
npm install express --save
const express = require("express"); // Importando o express
const app = express(); // Iniciando o express

** Rota:**  diversos caminhos que sua aplicação possui

```
// rota inicial para pagina principal
app.get("/",function(req,res){
    res.send("Bem vindo a pagina principal");
});

// req -> dados enviados pelo usuário
// res -> resposta que vai ser enviada para o usuario

app.get("/blog",function(req,res){
    res.send("<h1>Bem vindo ao blog!</h1>");
});
```


** Parametros:**  caminho alem da rota
````
//Exemplo de parametro (fixos em rotas) obrigatorio:
app.get("/ola/:nome", function(req,res){
    var nome = req.params.nome;
    res.send("Oi " + nome);
});


//Exemplo parametro NÃO obrigatório:
app.get("/blod/:artigo?", function(req,res){
    var artigo = req.params.artigo;
    if(artigo){
        res.send("<h2> Artigo: " + artigo + "</h2>")
    }else{
        res.send("Bem vindo!");
    }
});
````

** Verbos HTTP:**  Formas de dizer de como se quer fazer uma requisição, são eles:
 - *GET:* mais utilizado do mundo, utilizado com o endereço do navegador, retorna dados de um servidor
 - *POST:* Criar novas coisas, muito utilizado em cadastro e formularios, e não pode ser utilizado via link
 - *PUT*: Atualiza os dados completamente ou quase totalmente, semelhante ao post, mas o post cria e o put edita
 - *PATCH:*: Atualiza coisas parcialmente
 - *DELETE:* Deleta os dados

** Status Code: ** Serve pra informar oque ocorreu na requisição. https://pt.wikipedia.org/wiki/Lista_de_códigos_de_estado_HTTP

** API: ** Interface de comunicação entre uma ou mais coisas

** Web Services: ** API que funciona atraves de um protocolo HTTP

** REST: ** Padrão de desenvolvimento de web services, eles retornam JSON, XML, arquivos em geral. Para um REST precisa-se:
- Cliente servidor
- Stateless
- Cacheável
- Saber trabalhar com camadas
- Interface uniforme e direta

** Restful: ** quando se implementa uma API Rest seguindo todas as especificações, como retornar tudo, dividir a API em recursos, implementa os verbos HTTP, retornar uma tabela de links.  


_________________
** Programação Síncrona:**  É bloqueante (fluxo do codigo), as operações são executadas em sequencia (aguarda a execução da operação antes de prosseguir para a próxima).


** Programação Assíncrona:**  Não é bloqueante(não bloqueia o fluxo do programa), que permite que outras operações continuem enquanto aguardam a conclusão de outras tarefas.


** Callback:**  Uma função que se liga a ela à um metodo assincrono, e quando esse método é concluído, a função é chamada.


** Promisses:**  Promessa, espécie de "contrato" ligado a algo assíncrono, representa a eventual conclusão (ou falha) de uma operação assíncrona e seu valor resultante. SEMPRE que se for usar promises, tem que tratar sua rejeição (catch).


** Async e Await: ** Uma maneira mais moderna, limpa e simples de trabalhar com Promises, eles podem tornar o código assíncrono mais parecido com o código síncrono, facilitando a leitura e a manutenção.

________________________________________
**Programação Orientada à Objetos com JavaScript**

*Vantagens*: código mais limpo, mais facil de manuntenção, mais livre de bugs, reutilização de código.

---
** HATEOAS: **ultimo nivel para o RESTful, traz o recurso de hipermedia (interconexão de diferentes tipos de mídia, links dentro de links)

**Vantagens do HATEOS **: Facilitar o cliente da API, desacopla o back-end do front-end

---

** MongoDB: ** 
- MongoDB é um banco de dados  NoSQL orientado a documentos que armazena dados em formato BSON (uma forma binária de JSON).
- Diferente dos bancos de dados relacionais tradicionais, que utilizam tabelas e linhas, o MongoDB organiza os dados em coleções de documentos.
-  Não precisa seguir uma estrutura pré definida de tabela. 
-  O relacionamento no mongo funciona por herança.
-  Adequado para aplicações com dados mais flexíveis.
-  O mais recomendado é utilizar MySQL como banco de dados primário e o MongoDB como banco de dados secundário nas aplicações WEB, pois o Mongo não tem disponibilidade, num select por exemplo, ele nao retorna erro, retorna um JSON vazio, além disso, o custo dele é mais caro e um pouco menos instável.
-  Porém, ele é mais produtivo que o MySQL.

---

** TDD: ** Desenvolvimento orientado a testes, metodologia de desenvolvimento, forma de como vai criar-se um projeto.

** Quando usar: **
- quando se for iniciar um novo projeto
- quando tiver um bom tempo e orçamento
- projetos de medio porte em geral

** Quando não usar: ** 
   - quando não tiver tempo
   - tiver pouco orçamento
   - quando pegar um projeto ja feito
   - em projetos de pequeno porte




