//dividindo os arquivos para ir no arquivo server, sem necessidade de abrir outro terminal
let app = require("./app");

app.listen(3131,() =>{
    console.log("rodando!");
})