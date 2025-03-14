const numbers = [1, 7, 10, 9, 8];
console.log(numbers);

    //méthode 1
//const maxNumber = Math.max(...numbers);
//console.log("Le nombre maximum est :", maxNumber);

    //méthode 2
const maximum = (max) => max.reduce((prev,cur)=>(cur > prev ? cur : prev), -Infinity);
console.log("Le nombre maximum est :", maximum(numbers));