//Strict Equality (type + value)
console.log(1 === 1); // true
console.log('1' === 1); // false

//Lose Equality (value)
console.log(1 == 1); // true
console.log('1' == 1); // true

// -------

/* 
    If a customer has more than 100 points, they are a 'gold customer,
    otherwise, they are 'silver' customer
*/

let points = 110;
let type = points > 100 ? 'gold' : 'silver' // se for maior que 100 é gold se não é silver
console.log(type);