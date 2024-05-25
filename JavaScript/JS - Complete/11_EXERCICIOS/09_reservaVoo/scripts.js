class Voo {
    constructor(codigoVoo, origem, destino, assentosDisponiveis) {
        this.codigoVoo = codigoVoo;
        this.origem = origem;
        this.destino = destino;
        this.assentosDisponiveis = assentosDisponiveis;
    }

    reservarAssento() {
        if (this.assentosDisponiveis > 0) {
            this.assentosDisponiveis -= 1;
            return true; // Reserva realizada com sucesso
        } else {
            console.log("Não há assentos disponíveis para reserva.");
            return false; // Falha na reserva
        }
    }

    consultarAssentosDisponiveis() {
        return this.assentosDisponiveis;
    }
}

// Exemplo de uso:
const voo1 = new Voo('AB123', 'São Paulo', 'Rio de Janeiro', 5);

console.log(`Assentos disponíveis: ${voo1.consultarAssentosDisponiveis()}`); // Saída: Assentos disponíveis: 5

const reserva1 = voo1.reservarAssento();
console.log(`Reserva 1: ${reserva1 ? "sucesso" : "falha"}`); // Saída: Reserva 1: sucesso
console.log(`Assentos disponíveis: ${voo1.consultarAssentosDisponiveis()}`); // Saída: Assentos disponíveis: 4

const reserva2 = voo1.reservarAssento();
console.log(`Reserva 2: ${reserva2 ? "sucesso" : "falha"}`); // Saída: Reserva 2: sucesso
console.log(`Assentos disponíveis: ${voo1.consultarAssentosDisponiveis()}`); // Saída: Assentos disponíveis: 3

// Tentativa de reservar mais assentos do que disponíveis
for (let i = 0; i < 4; i++) {
    const reserva = voo1.reservarAssento();
    console.log(`Reserva ${i + 3}: ${reserva ? "sucesso" : "falha"}`);
}
console.log(`Assentos disponíveis: ${voo1.consultarAssentosDisponiveis()}`); // Saída: Assentos disponíveis: 0
