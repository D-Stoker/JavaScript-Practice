// ARRAYS OF OBJECTS PRACTICE

const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 22 },
];

// Using map to create an array of names
const names = users.map(user => user.name);
console.log(names); // Output: ['Alice', 'Bob', 'Charlie']

// Using filter to find users older than 25
const olderThan25 = users.filter(user => user.age > 25);
console.log(olderThan25); // Output: [{ name: "Bob", age: 30 }]

// Using reduce to sum all ages
const totalAge = users.reduce((acc, user) => acc + user.age, 0);
console.log(totalAge); // Output: 77