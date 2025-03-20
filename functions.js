// FUNCTIONS PRACTICE

// Function Declaration
function greet(name) {
    return `Hey, ${name}!`;
}
console.log(greet("Dan")); // Output: "Hey, Dan!"

// Function Expression
const add = function (a, b) {
    return a + b;
};
console.log(add(10, 32)); // Output: 42

// Arrow Function
const multiply = (a, b) => a * b;
console.log(multiply(2, 8)); // Output: 16

// Default Parameters
function power(base, exponent = 2) {
    return base ** exponent;
}
console.log(power(5)); // Output: 32

// Rest Parameters (accepts multiple arguments)
function sumAll(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}
console.log(sumAll(1, 2, 3, 4)); // Output: 10

// Higher-Order Function (function takes another function)
function applyOperation(a, b, operation) {
    return operation(a, b);
}
console.log(applyOperation(4, 2, multiply)); // Output: 8
