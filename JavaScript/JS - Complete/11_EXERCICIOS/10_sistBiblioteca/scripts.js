class Livro {
    constructor(titulo, autor) {
        this.titulo = titulo;
        this.autor = autor;
        this.disponivel = true; // Inicializa a disponibilidade como true
    }

    emprestar() {
    if (this.disponivel) {
        this.disponivel = false;
        console.log(`O livro "${this.titulo}" foi emprestado com sucesso.`);
    } else {
          console.log(`O livro não está disponível para empréstimo.`);
        }
    }
    
    devolver() {
        if (!this.disponivel) {
            this.disponivel = true;
            console.log(`O livro foi devolvido com sucesso.`);
        } else {
            console.log(`O livro já está disponível.`);
        }
    }



    consultarDisponibilidade() {
    return this.disponivel ? "Disponível" : "Indisponível";
}

}

// Exemplo de uso:
const livro1 = new Livro('1984', 'George Orwell');

console.log(`Disponibilidade de "${livro1.titulo}": ${livro1.consultarDisponibilidade() ? "Disponível" : "Indisponível"}`); // Saída: Disponível

livro1.emprestar();
console.log(`Disponibilidade de "${livro1.titulo}": ${livro1.consultarDisponibilidade() ? "Disponível" : "Indisponível"}`); // Saída: Indisponível

livro1.emprestar(); // Saída: O livro "1984" não está disponível para empréstimo.

livro1.devolver();
console.log(`Disponibilidade de "${livro1.titulo}": ${livro1.consultarDisponibilidade() ? "Disponível" : "Indisponível"}`); // Saída: Disponível

livro1.devolver(); // Saída: O livro "1984" já está disponível na biblioteca.
