function sumUniqueNumbers(arr) {
  const countMap = new Map();

  // Preencher o countMap com a contagem de cada número
  for (const num of arr) {
    countMap.set(num, (countMap.get(num) || 0) + 1);
  }

  let sum = 0;

  // Somar os números que aparecem apenas uma vez
  for (const [num, count] of countMap) {
    if (count === 1) {
      sum += num;
    }
  }

  return sum;
}

// Exemplo de uso:
const numbers = [3, 3, 2, -1, 5, 2, 9, -1, 6];
const uniqueSum = sumUniqueNumbers(numbers);
console.log(uniqueSum); // Saída: 20 (5 + 9 + 6)
