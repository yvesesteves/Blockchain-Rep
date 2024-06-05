//API Rest com Axios, usando sistema de autentificação JWT

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const jwt = require("jsonwebtoken");


const JWTSecret = "djkshahjksdajksdhasjkdhasjkdhasjkdhasjkd";

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


function auth(req, res, next){
    const authToken = req.headers['authorization'];

    if(authToken != undefined){

        const bearer = authToken.split(' ');
        var token = bearer[1];

        jwt.verify(token,JWTSecret,(err, data) => {
            if(err){
                res.status(401);
                res.json({err:"Token inválido!"});
            }else{

                req.token = token;
                req.loggedUser = {id: data.id,email: data.email};
                req.empresa = "Guia do programador";                
                next();
            }
        });
    }else{
        res.status(401);
        res.json({err:"Token inválido!"});
    } 
}

var DB = {
    games: [
        {
            id: 23,
            title: "Call of duty MW",
            year: 2019,
            price: 60
        },
        {
            id: 65,
            title: "Sea of thieves",
            year: 2018,
            price: 40
        },
        {
            id: 2,
            title: "Minecraft",
            year: 2012,
            price: 20
        }
    ],
    users: [
        {
            id: 1,
            name: "Victor Lima",
            email: "victordevtb@guiadoprogramador.com",
            password: "nodejs<3"
        },
        {
            id: 20,
            name: "Guilherme",
            email: "guigg@gmail.com",
            password: "java123"
        }
    ]
}

app.get("/games",auth,(req, res) => {     // criando endpoint, rotas na API,listando todos os dados dos games
    
    var HATEOS = [      // utilizando HATEOS
        {
            href: "http://localhost:45679/game/0",
            method: "DELETE",
            rel: "delete_game"
        },
        {
            href: "http://localhost:45679/game/0",
            method: "GET",
            rel: "get_game"
        },
        {
            href: "http://localhost:45679/auth",
            method: "POST",
            rel: "login"
        }
    ]
    
    res.statusCode = 200;
    res.json({games: DB.games, _links: HATEOS});
});

app.get("/game/:id",auth,(req, res) => {
    if(isNaN(req.params.id)){   // verificando se o ID é um numero (isNaN)
        res.sendStatus(400);    // retornando o erro
    }else{
        
        var id = parseInt(req.params.id);

        var HATEOS = [      // utilizando HATEOS
        {
            href: "http://localhost:45679/game/"+id,
            method: "DELETE",
            rel: "delete_game"
        },
        {
            href: "http://localhost:45679/game/"+id,
            method: "PUT",
            rel: "edit_game"
        },
        {
            href: "http://localhost:45679/game/"+id,
            method: "GET",
            rel: "get_game"
        },
        {
            href: "http://localhost:45679/games",
            method: "GET",
            rel: "get_all_games"
        }
    ]
        var game = DB.games.find(g => g.id == id);

        if(game != undefined){
            res.statusCode = 200;
            res.json({game,_links: HATEOS});
        }else{
            res.sendStatus(404);
        }
    }
});

app.post("/game",auth,(req, res) => {   // end point para cadastrar dados, a rota pode ter nomes iguais desde que estejam usando metodos diferentes
    var {title, price, year} = req.body;
    DB.games.push({
        id: 2323,
        title,
        price,
        year
    });
    res.sendStatus(200);
})

app.delete("/game/:id",auth,(req, res) => {  // end point para deletar dados em uma API Rest
    if(isNaN(req.params.id)){
        res.sendStatus(400);
    }else{
        var id = parseInt(req.params.id);
        var index = DB.games.findIndex(g => g.id == id);    // achar o index pelo id

        if(index == -1){
            res.sendStatus(404);
        }else{
            DB.games.splice(index,1);
            res.sendStatus(200);
        }
    }
});

app.put("/game/:id",(req, res) => {     //edição de dados pelo id

    if(isNaN(req.params.id)){       // verifica se o jogo é valido
        res.sendStatus(400);
    }else{
        
        var id = parseInt(req.params.id);

        var game = DB.games.find(g => g.id == id);  // procura algum jogo com esse ID

        if(game != undefined){  // se o jogo existir

            var {title, price, year} = req.body;

            
            if(title != undefined){
                game.title = title;
            }

            if(price != undefined){
                game.price = price;
            }

            if(year != undefined){
                game.year = year;
            }
            
           res.sendStatus(200);    // edição feita com sucesso

        }else{
            res.sendStatus(404);        // se nao existe o jogo com esse id retorna error 404
        }
    }

});


app.post("/auth",(req, res) => {

    var {email, password} = req.body;

    if(email != undefined){

        var user = DB.users.find(u => u.email == email);
        if(user != undefined){
            if(user.password == password){
                jwt.sign({id: user.id, email: user.email},JWTSecret,{expiresIn:'48h'},(err, token) => {
                    if(err){
                        res.status(400);
                        res.json({err:"Falha interna"});
                    }else{
                        res.status(200);
                        res.json({token: token});
                    }
                })
            }else{
                res.status(401);
                res.json({err: "Credenciais inválidas!"});
            }
        }else{
            res.status(404);
            res.json({err: "O E-mail enviado não existe na base de dados!"});
        }

    }else{
        res.status(400);
        res.send({err: "O E-mail enviado é inválido"});
    }
});

app.listen(45679,() => {    // abrir servidor
    console.log("API RODANDO!");
});