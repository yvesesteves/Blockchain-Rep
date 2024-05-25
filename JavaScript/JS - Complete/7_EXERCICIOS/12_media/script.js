function calculateAverage(numeros) {
    // Verifica se o array está vazio
    if (numeros.length === 0) {
        return 0; // Retorna 0 se o array estiver vazio
    }

    // Soma todos os números no array
    let soma = 0;
    for (let i = 0; i < numeros.length; i++) {
        soma += numeros[i];
    }

    // Calcula a média dividindo a soma pelo total de números
    const media = soma / numeros.length;

    // Retorna o valor da média calculada
    return media;
}

// Exemplos de uso
console.log(calculateAverage([1, 2, 3, 4, 5])); // 3
console.log(calculateAverage([10, 20, 30]));    // 20
console.log(calculateAverage([2, 4, 6, 8, 10])); // 6
console.log(calculateAverage([]));              // 0

