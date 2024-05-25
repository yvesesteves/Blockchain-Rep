function sumEvenNumbers(numeros){
    let somaPares = 0;
    for(let i = 0; i < numeros.length; i++){
        if(numeros[i] % 2 === 0){
            somaPares += numeros[i];  // se for par adiciona ao total da soma
        }
    }
  
    return somaPares;
 }
 
 // Exemplos de uso
 console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6])); // 12 (2 + 4 + 6)
 console.log(sumEvenNumbers([-2, -4, -6, -8]));   // -20 (-2 + -4 + -6 + -8)
 console.log(sumEvenNumbers([3, 5, 7, 9]));      // 0 (não há números pares)