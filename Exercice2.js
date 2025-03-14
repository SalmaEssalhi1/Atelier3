const factorial = n => (n <= 1 ? 1 : n * factorial(n - 1));

const numbers = [1, 3, 4];
console.log(numbers);
const factorialList = numbers.map(factorial);

console.log(factorialList); 
