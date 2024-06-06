let app = require("../src/app");
let supertest = require("supertest");
let request = supertest(app);


test("A aplicação deve responder na porta 3131",() =>{
    // sempre que se trabalha com promisse, tem q colocar um return 
    return request.get("/").then(res => expect(res.statusCode).toEqual(200));      //se for 200, deu certo
 });  

 test("Deve retornar roxo como cor favorita do yves",() =>{
    return request.get("/cor/yves").then(res =>
        expect(res.body.cor).toEqual("roxo"));  // pode ter um ou mais expect
 })