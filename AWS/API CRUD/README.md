# Resumo da API CRUD - (Progress Report 3.2, Módulo 4, Atividade 1
## Componentes e suas funções da API) 

### ** DynamoDB (http-crud-tutorial-items): **

 - Função: Serviço de banco de dados NoSQL gerenciado que armazena e recupera qualquer quantidade de dados, servindo qualquer nível de requisições de tráfego.
 - Chave Primária: id (identificador único de cada item na tabela).
  
### **Lambda (http-crud-tutorial-function): **

 - Função: Serviço de computação que permite executar código sem a necessidade de gerenciar servidores. Você escreve seu código e o Lambda lida com a execução, escalabilidade e administração do backend.

### **Role (http-crud-tutorial-role) **
 - Função: Define permissões específicas para a função Lambda interagir com o DynamoDB e outros serviços necessários.

### **API Gateway (http-crud-tutorial-api): **

 - Função: Serviço para criar, publicar, manter, monitorar e proteger APIs RESTful e WebSocket em qualquer escala.


### **Rotas: Define os endpoints para a API: **
 - GET /items/{id}: Recupera um item específico pelo id.
 - GET /items: Lista todos os itens.
 - PUT /items: Adiciona um novo item.
 - DELETE /items/{id}: Deleta um item específico pelo id.

### **Integração: **
  - Função: Conecta as rotas do API Gateway aos recursos backend, neste caso, a função Lambda. Essa integração permite que a API chame a função Lambda para processar as requisições.

--- 
## Depois de tudo, testei a API no Postman realizando as seguintes operações:
 - Adicionar Item (PUT /items): Adiciona um novo item à tabela.
 - Remover Item (DELETE /items/{id}): Remove um item específico da tabela.
 - Listar Itens (GET /items): Lista todos os itens na tabela.
 - Obter Item por ID (GET /items/{id}): Recupera um item específico pelo id.
  
  
Essa configuração demonstra uma arquitetura serverless usando AWS para gerenciar uma API CRUD com banco de dados, lógica de negócio e endpoints públicos, tudo sem a necessidade de gerenciar servidores diretamente.