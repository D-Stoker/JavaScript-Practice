// ARRAYS PRACTICE

// Creating an array
const numbers = [1, 2, 3, 4, 5];

// Using map to square each number
const squared = numbers.map(num => num * num);
console.log(squared); // Output: [1, 4, 9, 16, 25]

// Using filter to get even numbers
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]

// Using reduce to sum numbers
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // Output: 15

// Using the spread operator to clone an array
const newNumbers = [...numbers];
console.log(newNumbers); // Output: [1, 2, 3, 4, 5]
