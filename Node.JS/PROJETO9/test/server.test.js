let app = require("../src/app");    // importar a instancia do app
let supertest = require("supertest");   // chamar o superteste
let request = supertest(app);           // criar objeto de requisição

test("A aplicação deve responder na porta 3131",() =>{

    return request.get("/").then(res =>{
        let status = res.statusCode
        expect(status).toEqual(200);
    }).catch(err => {
        fail(err)
    });


})