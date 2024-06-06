const mongoose = require("mongoose");
const articleModel = require("./article");  // pega o esquema

mongoose.connect("mongodb://localhost:27017/aprendendoMongo")
  .then(() => {
    console.log("Conectado ao MongoDB com sucesso!");
  })
  .catch((err) => {
    console.error("Erro ao conectar ao MongoDB:", err);
  });

const Arcticle = mongoose.model("Article", articleModel);   // carrega o esquema no model


// Update do titulo, autor e corpo pelo ID
Arcticle.findByIdAndUpdate("6661c050e6a1562a5894ed11",{title: "Vue do zero",
    author: "Lucas",
    body: "Vue.js do zero ao avançado"
}).then(() =>{
    console.log("Update!");
}).catch(err =>{
    console.log(err);
});



   /* Deletando um artigo por ID
Arcticle.findByIdAndDelete("6661c032bc2926ba85ee7720").then(() =>{
    console.log("Dado removido");
}).catch(err =>{
    console.log(err)
});
*/

// Listagem de todos os artigos
// Arcticle.find({}).then(articles =>{         
//     console.log(articles)
// }).catch(err => {
//     console.log(err)
// });         



/* Procurando artigo por ID
articleModel.find({'_id':'6661c032bc2926ba85ee7720'}).then(article =>{      
    console.log(article)
}).catch(erro => {
    console.log(err);
})
*/



/* Cadastro
const artigo = new Arcticle({title: "Aprendendo js",
    author: "Pedro",
    body: "corpo do artigo aqui",
    special: true,
    resume:{
        content: "Olá mundo!",
        author: "Yves2"
    }
}); // atraves do model, cria um novo artigo, suas instancias sao passadas p/ variavel "artigo"


artigo.save().then(() => {              // salva o artigo
    console.log("Artigo salvo!")
}).catch(err =>{
    console.log(err);
});      

*/