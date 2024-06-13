const app = require("../src/app");
const supertest = require("supertest");
const request = supertest(app);
const City = require('../src/models/City'); // Verifique se o caminho está correto
const Customer = require('../src/models/Customer'); // Verifique se o caminho está correto

describe("Testes de cadastro de Cidades e Clientes na API's", () => {
    test("Cadastrar cidade", async() => {
        let newCity = {
            name: "São Paulo",
            state: "SP"
        }
        const response = await request.post("/api/cities").send(newCity);
        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty("_id");
        expect(response.body.name).toBe(newCity.name);
        expect(response.body.state).toBe(newCity.state);

    });


    test("Cadastrar cliente", async() => {
        let newCustomer = {
            fullName: "Yves Esteves",
            gender: "male",
            brithDate: "17/04/2001",
            age: 23,
            city: "666a082f402377be78e1996f"
        }

        const response = await request.post("/api/customers").send(newCustomer);
        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty("_id");
        expect(response.body.fullName).toBe(newCustomer.fullName);
        expect(response.body.gender).toBe(newCustomer.gender);
        expect(response.body.brithDate).toBe(newCustomer.brithDate);
        expect(response.body.age).toBe(newCustomer.age);
        expect(response.body.city).toBe(newCustomer.city);

    });


    test("Deve consultar uma cidade pelo seu nome", async () => {
        const nameCity = "São Paulo"; // Nome da cidade existente no banco de dados

        // Enviando uma requisição GET para /api/cities/name/:name com o nome da cidade
        const response = await request.get(`/api/cities/${nameCity}`);

        // Verificando se a resposta foi bem-sucedida (status 200 - OK)
        expect(response.status).toBe(200);

        // Verificando se a resposta contém o corpo da cidade consultada
        expect(response.body).toHaveProperty("_id");
        expect(response.body.name).toBe(nameCity);
        expect(response.body).toHaveProperty("state");
    });


    test("Deve consultar uma cidade pelo seu estado", async () => {
        const nameState = 'SP';  // Estado que existe no banco de dados

        // Enviando uma requisição GET para /api/cities/name/:name com o nome da cidade
        try {
            const response = await request.get(`/api/cities/state/${nameState}`);

            // Verificando se a resposta foi bem-sucedida (status 200 - OK)
            expect(response.status).toBe(200);

            // Verificando se a resposta contém o corpo da cidade consultada
            expect(response.body.length).toBeGreaterThan(0); // Verifica se retornou alguma cidade
            response.body.forEach(city => {
                expect(city.state).toBe(nameState);  // Verifica se todas as cidades retornadas são do estado informado
            });
        } catch (error) {
            console.error('Erro no teste:', error);
            throw error;
        }
    });


    test('Deve consultar um cliente pelo nome', async () => {
        const nameCustomer = 'Yves Esteves';  // Nome do cliente que acabamos de salvar

        try {
            const response = await request.get(`/api/customers/name/${nameCustomer}`);

            // Verificando se a resposta foi bem-sucedida (status 200 - OK)
            expect(response.status).toBe(200);

            // Verificando se a resposta contém o corpo do cliente consultado
            expect(response.body.fullName).toBe(nameCustomer);
        } catch (error) {
            console.error('Erro no teste:', error);
            throw error;
        }
    });


    test('Deve consultar um cliente pelo ID', async () => {
            const customerId = "666a12058724dda6f0517d4a"

            try {
                const response = await request.get(`/api/customers/${customerId}`);

                // Verificando se a resposta foi bem-sucedida (status 200 - OK)
                expect(response.status).toBe(200);

                // Verificando se a resposta contém o corpo do cliente consultado
                expect(response.body._id).toBe(customerId);
                expect(response.body.fullName).toBe('Yves Esteves');

            } catch (error) {
                console.error('Erro no teste:', error);
                throw error;
            }
    });


    test('Deve remover um cliente existente', async () => {
        let customerId2 = "666a11dc0d5fd4fc839beaad";
        try {
            const response = await request.delete(`/api/customers/${customerId2}`);

            // Verificando se a resposta foi bem-sucedida (status 204 - No Content)
            expect(response.status).toBe(204);

            // Verificando se o cliente foi removido do banco de dados
            const customerInDb = await Customer.findById(customerId2);
            expect(customerInDb).toBeNull();  // Verifica se o cliente não está mais no banco de dados
        } catch (error) {
            console.error('Erro no teste:', error);
            throw error;
        }
    });

});



