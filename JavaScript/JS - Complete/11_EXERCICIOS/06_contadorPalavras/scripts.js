class WordCounter {
  constructor() {
      this.contadorDePalavras = 0; // Inicializando um contador de palavras
  }

  countWords(texto) {
      texto = texto.trim(); // Remover espaços em branco do início e do fim
      if (texto === '') {
          this.contadorDePalavras = 0;
      } else {
          const palavras = texto.split(/\s+/); // Divide o texto em um array de palavras usando regex para lidar com múltiplos espaços
          this.contadorDePalavras = palavras.length;
      }
      return this.contadorDePalavras;
  }
}

const contador = new WordCounter();
const texto = "Testando o contador de palavras no programa";
const numeroPalavras = contador.countWords(texto);

console.log(`O texto contém ${numeroPalavras} palavras`);
