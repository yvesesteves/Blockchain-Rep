function countVowels(string){
    const vogais = 'aeiouAEIOU';
    
    let contador = 0;
    
    for(let i = 0; i < string.length; i++){
        if(vogais.includes(string[i])){
            contador++;
        }
    }
    return contador;
}


console.log(countVowels('Hello'));
console.log(countVowels('TDSF'));
console.log(countVowels('JavaScript'));
