function reverseString(str) {
    // Converte a string em um array de caracteres
    const arrayDeCaracteres = str.split('');
    
    // Inverte a ordem dos caracteres no array
    const arrayInvertido = arrayDeCaracteres.reverse();
    
    // Junta os caracteres de volta em uma string
    const stringInvertida = arrayInvertido.join('');
    
    // Retorna a string invertida
    return stringInvertida;
}

// Exemplos de uso
console.log(reverseString('hello')); // "olleh"
console.log(reverseString('world')); // "dlrow"
console.log(reverseString('JavaScript')); // "tpircSavaJ"
console.log(reverseString('12345')); // "54321"
