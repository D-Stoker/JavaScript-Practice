// VARIABLES PRACTICE

// Variable Declarations
let x = 5; // mutable
const y = 10; // immutable
var z = 15; // older syntax

// Variable Scope
let globalVar = "I'm global"; // Accessible everywhere in file

if (true) {
    let blockVar = "I'm block-scoped"; // only inside this block
    console.log(blockVar); // works fine here
}

console.log(globalVar); // accessible here
// console.log(blockVar); // would give error: blockVar is not defined

// Data Types
let stringExample = "Hey, guys!";
let numberExample = 42;
let booleanExample = false;
let nullExample = null;
let undefinedExample; // undefined default for uninitialized variables

console.log(typeof stringExample); // "string"
console.log(typeof numberExample); // "number"
console.log(typeof booleanExample); // "boolean"
console.log(typeof nullExample); // "object"
console.log(typeof undefinedExample); // "undefined"