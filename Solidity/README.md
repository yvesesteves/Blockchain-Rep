# Progress Report 5 - Solidity
## **1. O que é Solidity?**
- Solidity é a linguagem de programação predominante para o desenvolvimento de smart contracts na rede Ethereum. Ela é uma linguagem de alto nível e orientada a objetos, projetada especificamente para facilitar a criação de contratos inteligentes. Esses contratos são executados pela Ethereum Virtual Machine (EVM), que é o ambiente descentralizado onde o código é processado em todos os nós da rede Ethereum.

## **2. Smart Contracts e Blockchain**
 - Um smart contract é um tipo especial de contrato digital que existe na blockchain. Ele age de forma autônoma, executando automaticamente suas instruções assim que as condições definidas são atendidas. Como os contratos são armazenados na blockchain, eles são imutáveis, garantindo que as regras sejam seguidas exatamente como programadas e que as transações relacionadas a eles sejam irreversíveis.

## **3. Estrutura Básica de um Contrato em Solidity**
- Em Solidity, contratos são unidades fundamentais que contêm código (funções) e dados (variáveis de estado). Eles são comparáveis a classes em linguagens orientadas a objetos. Aqui está um exemplo básico de um contrato básico:
    ```
    // SPDX-License-Identifier: MIT
        pragma solidity 0.8.26;

        contract MyContract {
            string public myString = "Hello world";

        function updateOurString(string memory _myString) public {
            myString = _myString;
    }
}

##  **4. Tipos de dados em Solidity**
- Solidity é uma linguagem de tipagem estática, o que significa que você deve definir explicitamente o tipo dos dados que está usando. A linguagem suporta muitos dos tipos de dados encontrados em outras linguagens de programação, como string, bool, entre outros, mas também introduz tipos específicos como address e não oferece suporte nativo para números de ponto flutuante.

### **4.1 Inteiros**
- Podem ser uint (unsigned) ou int (signed) e variam em tamanho de 8 até 256 bits.
```
    uint256 public myUint;      // Unsigned integer de 256 bits
    uint8 public myUint8 = 250; // Unsigned integer de 8 bits
    int public myInt = -10;     // Signed integer

```

### **4.2 Endereços (Address)**
Armazena um valor de 20 bytes (tamanho de um endereço Ethereum). Há duas variações:
  - *address:* Tipo básico para armazenar endereços.
  - *address payable:* Pode receber e transferir Ether (transações financeiras), além de armazenar um endereço.
  
## **5. Funções em Solidity**
Solidity oferece modificadores especiais para funções que controlam como elas interagem com o estado do contrato.

### **5.1 Funções View**
Funções com o modificador view podem ler, mas não modificar, o estado do contrato. Isso significa que elas podem acessar variáveis de estado, mas não alterá-las. Segue o exemplo abaixo:
```
    function getMyStorageVariable() public view returns(uint) {
    return myStorageVariable;
}
```

### **5.2 Funções Pure**
Funções pure são ainda mais restritivas: elas não podem ler ou modificar o estado do contrato. Elas operam apenas com variáveis locais ou outras funções pure.
```
    function getAddition(uint a, uint b) public pure returns(uint) {
    return a + b;
}

```

## **6. Construtores**
O construtor em Solidity é uma função especial que é executada apenas uma vez, durante o deploy do contrato. Ele é usado para inicializar variáveis de estado com valores específicos. Exemplo:
```
    // SPDX-License-Identifier: MIT
pragma solidity 0.8.26;

contract ExampleConstructor {
    address public myAddress;

    constructor(address _someAddress) {
        myAddress = _someAddress;
    }
}
```

## **7. MetaMask e a Interação com a Blockchain**
MetaMask é uma carteira digital (crypto-wallet) que permite aos usuários interagirem diretamente com a blockchain Ethereum. É uma extensão de navegador que facilita a compra, venda e troca de ativos digitais. Ao criar uma conta no MetaMask, você recebe uma secret recovery phrase de 12 palavras, que deve ser mantida segura, pois é necessária para recuperar o acesso à sua conta e fundos.

## **8. Conceitos Intermediários**

### **8.1 Funções Payable**
Em Solidity, o modificador payable é usado para indicar que uma função pode receber Ether como parte de sua execução. Isso permite que o contrato armazene ou manipule fundos. Segue o exemplo abaixo:

```
// SPDX-License-Identifier: MIT
pragma solidity 0.8.26;

contract SampleContract {
    string public myString = "Hello World";

    function updateString(string memory _newString) public payable {
        if(msg.value == 1 ether) {
            myString = _newString;
        } else {
            payable(msg.sender).transfer(msg.value);
        }
    }
}

```
Neste exemplo, a função verifica o valor de Ether enviado com a transação (msg.value) e realiza uma ação específica ou reembolsa o valor ao remetente (msg.sender).

### **8.2 Mappings**
Mappings são estruturas de dados semelhantes a tabelas de hash, usadas para armazenar pares chave-valor. Em Solidity, a chave não é armazenada diretamente; em vez disso, o hash da chave é utilizado.
- Sintaxe:
  ```
mapping(KeyType => ValueType) VariableName;

 ```

### **8.3 Structs**
Structs em Solidity são usadas para agrupar variáveis relacionadas. Elas são semelhantes a registros em outras linguagens de programação e são úteis para organizar dados sem incorrer em custos adicionais de gas, como ocorre com contratos. Exemplo:
```
    // SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ExampleStruct {
    
    // Definindo a struct "Person"
    struct Person {
        string name;
        uint8 age;
        address walletAddress;
    }

    // Declarando uma variável do tipo "Person"
    Person public person;

    // Função para definir os valores da struct
    function setPerson(string memory _name, uint8 _age, address _walletAddress) public {
        person.name = _name;
        person.age = _age;
        person.walletAddress = _walletAddress;
    }

    // Função para retornar as informações da struct
    function getPerson() public view returns (string memory, uint8, address) {
        return (person.name, person.age, person.walletAddress);
    }
}

```


## **9. ABI (Application Binary Interface)**
- O ABI (Application Binary Interface) é uma especificação crucial para a interação com um smart contract na rede Ethereum. Ele define as funções, entradas, saídas e variáveis do contrato, além de seus respectivos tipos de dados. O ABI permite que aplicações externas (como interfaces web ou outras DApps) interajam com o contrato sem a necessidade de conhecer os detalhes internos de sua implementação.
- O ABI é geralmente armazenado em um arquivo JSON no projeto do smart contract, o que facilita a integração com ferramentas e bibliotecas que utilizam essa especificação para chamar funções no contrato.

Exemplo de um ABI Array (representado em um arquivo JSON):
```
[
    {
        "constant": false,
        "inputs": [
            {
                "name": "_myString",
                "type": "string"
            }
        ],
        "name": "updateOurString",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "myString",
        "outputs": [
            {
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }
]
    
```

No exemplo a cima:
- A função `updateOurString` recebe um parâmetro do tipo string e não retorna valores. 
- A função `myString` é uma função view que retorna um valor do tipo string.

O ABI Array é fundamental para a interação com contratos implantados na blockchain, pois ele descreve como as funções do contrato devem ser chamadas e que tipo de dados devem ser enviados e recebidos.