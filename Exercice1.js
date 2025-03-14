const numbers = [1, 7, 10, 9, 8 , 2];
console.log (numbers);
const pairenmbre = numbers.filter(num => num % 2 === 0).sort((a,b) => a-b);
console.log (pairenmbre);