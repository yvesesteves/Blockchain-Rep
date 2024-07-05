**Resumo do Projeto Serverlesspresso**
---

**Descrição Geral:**
O Serverlesspresso é uma cafeteria pop-up que oferece bebidas espresso premium em conferências e eventos. Nosso objetivo é criar uma aplicação serverless para aceitar pedidos e notificar os clientes quando suas bebidas estiverem prontas. A aplicação deve ser escalável, gerenciar o fluxo de trabalho de cada bebida e autenticar os clientes.

**Processo de Pedido:**
1. Monitores exibem um QR code que muda a cada 5 minutos. Clientes escaneiam o QR code para fazer um pedido.
2. O pedido é validado, um número de pedido é criado e disponibilizado para os baristas.
3. Baristas veem o pedido em seu aplicativo e podem alterar o status para em preparo, pronto ou cancelar.
4. Clientes recebem atualizações em seus dispositivos móveis e os monitores exibem o status dos pedidos.

**Estrutura da Aplicação:**
- **Frontends:**
  - **Display app:** Exibe o QR code e a fila de pedidos.
  - **Barista app:** Permite que os baristas atualizem o status dos pedidos.
  - **Ordering app:** Usado pelos clientes para fazer pedidos.

- **Backend:**
  - **Tecnologias:** AWS Step Functions, Amazon EventBridge, AWS Lambda, Amazon API Gateway, Amazon S3, Amazon DynamoDB, Amazon Cognito.
  - **Microservices:**
    - **Counting:** Incrementa números de pedidos sequencialmente usando DynamoDB.
    - **OrderManager:** API para enviar/atualizar/cancelar pedidos de café.
    - **Config:** Gerencia informações de menu e status da loja.
    - **Publisher:** Roteia eventos para tópicos no IoT Core.
    - **QR Validator:** Valida códigos QR.
    - **OrderProcessor:** Orquestra o pedido de cada cliente usando AWS Step Functions.

**Workflow e Eventos:**
- Cada pedido segue uma série de etapas desde o escaneamento do QR code até a conclusão do pedido.
- **AWS Step Functions:** Constrói uma máquina de estados para gerenciar os diferentes passos de um pedido.
- **Amazon EventBridge:** Roteia eventos para serviços downstream.
- **AWS IoT Core:** Publica mensagens de eventos para aplicações frontend.

**Testes e Configurações:**
1. **Novo Pedido:** Simulação de um pedido escaneando um QR code.
2. **Detalhes do Pedido:** Adição de detalhes como tipo de bebida e modificadores.
3. **Reclamação do Pedido:** Barista assume a preparação do pedido.
4. **Conclusão do Pedido:** Barista marca o pedido como concluído.

**Extensibilidade:**
- Adição de novas funcionalidades sem impacto na stack existente, por exemplo, coletar métricas de pedidos usando EventBridge e SQS.

**Frontends Configuração:**
- Aplicações frontend são hospedadas via AWS Amplify e configuradas para se comunicar com o backend através de API Gateway e WebSockets via AWS IoT Core.

**Objetivo Final:**
- Construir uma solução robusta que aceite pedidos de café, gerencie o fluxo de trabalho de cada pedido e notifique os clientes em tempo real sobre o status de seus pedidos, tudo em um ambiente serverless escalável e eficiente.