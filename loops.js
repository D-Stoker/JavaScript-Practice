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

// Loop continue statement: printing even numbers from 0 to 20
for (let i = 2; i <= 20; i++) {
    if (i % 2 !== 0) {
        continue;
    }
    console.log(i);
}

// Loop break statement: Count 10 to 1, stopping at 3
for (let i = 10; i >= 1; i--) {
    if (i === 3) {
        break;
    }
    console.log(i);
}