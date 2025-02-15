// Assignment Operators
let x = 10;  // basic assignment
x += 5;      // x = x + 5
x -= 3;      // x = x - 3
x *= 2;      // x = x * 2
x /= 4;      // x = x / 4

// Comparison Operators
console.log(5 == "5");   // true (loose equality, type conversion)
console.log(5 === "5");  // false (strict equality, number vs. string)
console.log(10 > 5);     // true (greater than)
console.log(5 <= 5);     // true (less than or equal to)

// Logical Operators
let a = true, b = false;
console.log(a && b);  // false (AND: both must be true)
console.log(a || b);  // true (OR: at least one must be true)
console.log(!a);      // false (NOT: reverses its truth value)

// Arithmetic Operators
let num = 10;
console.log(num + 5);   // 15 (addition)
console.log(num - 2);   // 8 (subtraction)
console.log(num * 3);   // 30 (multiplication)
console.log(num / 2);   // 5 (division)
console.log(num % 3);   // 1 (modulus, remainder of division)
console.log(num ** 2);  // 100 (exponentiation, 10 squared)
