// DESTRUCTURING PRACTICE

// Array destructuring
const arr = [1, 2, 3];
const [a, b, c] = arr;
console.log(a, b, c); // 1, 2, 3

// Object destructuring
const obj = { name: 'John', age: 30 };
const { name, age } = obj;
console.log(name, age); // John, 30

// LOOPS PRACTICE

// For Loop: Count from 1 to 5
for (let i = 1; i <= 5; i++) {
    console.log("For Loop:", i);
}

// While Loop: Count down from 5
let count = 5;
while (count > 0) {
    console.log("While Loop:", count);
    count--;
}

// Do... While Loop: always run once, then checks condition
let num = 0;
do {
    console.log("Do... While Loop:", num);
    num++;
} while (num < 3);

