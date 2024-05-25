function isPalindrome(palavra) {
    // Converter a palavra para minúsculas para garantir que a comparação seja case-insensitive
    const palavraLower = palavra.toLowerCase();

    // Inverter a palavra
    const palavraInvertida = palavraLower.split('').reverse().join('');

    // Comparar a palavra original com a palavra invertida
    return palavraLower === palavraInvertida;
}

// Exemplos de uso
console.log(isPalindrome('radar')); // true
console.log(isPalindrome('hello')); // false
console.log(isPalindrome('Racecar')); // true (considerando case-insensitivity)
console.log(isPalindrome('')); // true (uma string vazia é tecnicamente um palíndromo)
console.log(isPalindrome('A man a plan a canal Panama')); // false (com espaços e case differences)
