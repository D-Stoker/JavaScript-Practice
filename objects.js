// OBJECTS PRACTICE

// Basic object creation
const person = {
    name: "David James",
    age: 42,
    greet() {
        console.log(`Hello, my name is ${this.name}`);
    },
};

// Destructuring an object
const { name, age } = person;
console.log(name, age); // Output: John Doe, 30

// Computed property names
const key = "age";
const personWithDynamicKey = {
    name: "Jamie Davis",
    [key]: 25,
};
console.log(personWithDynamicKey.age); // Output: 25
