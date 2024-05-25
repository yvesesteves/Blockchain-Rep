class ContaBancaria {
    constructor(numeroConta, saldo = 0) {
        this.numeroConta = numeroConta;
        this.saldo = saldo;
    }

    depositar(valor) {
        if (valor > 0) {
            this.saldo += valor;
        } else {
            console.log("O valor do depósito deve ser positivo.");
        }
    }

    sacar(valor) {
        if (valor > 0) {
            if (this.saldo >= valor) {
                this.saldo -= valor;
            } else {
                console.log("Saldo insuficiente para realizar o saque.");
            }
        } else {
            console.log("O valor do saque deve ser positivo.");
        }
    }

    consultarSaldo() {
        return this.saldo;
    }
}

// Exemplo de uso:
const conta = new ContaBancaria('12345-6', 1000);

conta.depositar(500);
console.log(`Saldo após depósito: R$${conta.consultarSaldo()}`); // Saída: Saldo após depósito: R$1500

conta.sacar(200);
console.log(`Saldo após saque: R$${conta.consultarSaldo()}`); // Saída: Saldo após saque: R$1300

conta.sacar(1500); // Saída: Saldo insuficiente para realizar o saque.
console.log(`Saldo final: R$${conta.consultarSaldo()}`); // Saída: Saldo final: R$1300
