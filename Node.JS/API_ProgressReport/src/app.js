// Tarefa 3 (Atividade Projeto de APIs - Progress Report 3.1 -- API de Cadastro 

let express = require("express");
let mongoose = require("mongoose");
let bodyParser = require("body-parser");
let cityRoutes = require("../src/routes/cityRoutes");
let customerRoutes = require("../src/routes/customerRoutes");

let app = express();
app.use(express.json());
app.use(bodyParser.json());

app.get("/",(req, res) =>{
    res.json({});
})

mongoose.connect("mongodb://localhost:27017/cityCustomer")
.then(() =>{
    //console.log("Conectado com o banco.");
}).catch((err) =>{
    console.log(err);
})

app.use("/api", cityRoutes);
app.use("/api", customerRoutes);

module.exports = app;