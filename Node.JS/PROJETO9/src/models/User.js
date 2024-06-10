let mongoose = require("mongoose");

let User = new mongoose.Schema({        // cadastrando no banco de dados
    name: String,
    email: String,
    password: String
});

module.exports = User;