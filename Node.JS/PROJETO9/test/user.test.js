let app = require("../src/app");        
let supertest = require("supertest");
let request = supertest(app);

let mainUser = {name: "Yves Esteves", email: "yves@guia.com", password: "123456"};

beforeAll(()=> {    // funçao que vai ser executada antes de qualquer teste 
    // Inserir usuario  no banco
    return request.post("/user")
    .send(mainUser)
    .then(res => {})
    .catch(err => {console.log(err)})
});

afterAll(() => {    // funçao que vai ser executada no final da switch de testes
    // Remover usuario do banco
    return request.delete(`/user/${mainUser.email}`)
    .then(res => {})
    .catch(err => {console.log(err)})
});



describe("Cadastro de usuário",() =>{       // teste que vai garantir que o usuario seja cadastrado
    test("Deve cadastrar um usuário com sucesso", ()=>{
        
        let time = Date.now();      // retorna um numero que representa o tempo atual em milissegundos 
        let email = `${time}@gmail.com`     // gerador de email
        let user = {name: "Yves", email, password: "123456"};

        return request.post("/user")   // rota /user (request sempre tem que ter return)
        .send(user)
        .then(res => {          
            expect(res.statusCode).toEqual(200);
            expect(res.body.email).toEqual(email);    // se email que recebeu no retorno é igual o email cadastrado, o teste passsa (usuario cadastrado com sucesso)
        }).catch(err =>{
            console.log(err)    //fail(err);
        });
    })

    test("Deve impedir que um usuário se cadastre com os dados vazios", () =>{
        let user = {name: "", email: "", password: ""};
        return request.post("/user")  
        .send(user)
        .then(res => {          
            expect(res.statusCode).toEqual(400);        // 400 = Bad Request (dados invalidos)
        }).catch(err =>{
            fail(err);
        });

    })

    test("Deve impedir que um usuário se cadastre com um email repetido", () =>{
        let time = Date.now();      
        let email = `${time}@gmail.com`   
        let user = {name: "Yves", email, password: "123456"};

        return request.post("/user")  
        .send(user)
        .then(res => {          
            expect(res.statusCode).toEqual(200);
            expect(res.body.email).toEqual(email);      // tentando cadastrar o mesmo usuario duas vezes, a primeira aqui é pra dar certo

            return request.post("/user")
            .send(user)
            .then(res =>{
                    expect(res.statusCode).toEqual(400);     // aqui é pra dar errado.
                    expect(res.body.error).toEqual("E-mail já cadastrado!");
            }).catch(err =>{
                fail(err);
            });

        }).catch(err =>{
            console.log(err)    //fail(err);
        });
    });



});

describe("Autenticação", () =>{
    test("Deve me retornar um token quando logar", () =>{
        return request.post("/auth")
        .send({email: mainUser.email, password: mainUser.password})
        .then(res => {
            expect(res.statusCode).toEqual(200)
            expect(res.body.token).toBeDefined();
        })
        .catch(err =>{
            fail(err);
        })
    })

    test("Deve impedir que um usuário não cadastrado se logue", () =>{
        return request.post("/auth")
        .send({email: "umemailqualquer@suajshuia.com", password: "432423423423"})
        .then(res => {
            expect(res.statusCode).toEqual(403);     // 403: forBiden - proibido de logar, acessar conteudo
            expect(res.body.errors.email).toEqual("E-mail não cadastrado");
        })
        .catch(err =>{
            fail(err);
        })
    })

    test("Deve impedir que um usuário se logue com a senha errada", () =>{
        return request.post("/auth")
        .send({email: mainUser.email, password: "testando"})
        .then(res => {
            expect(res.statusCode).toEqual(403);     // 403: forBiden - proibido de logar, acessar conteudo
            expect(res.body.errors.password).toEqual("Senha incorreta");
        })
        .catch(err =>{
            fail(err);
        })
    })

});