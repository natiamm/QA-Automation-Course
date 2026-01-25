// 1. Operators

const number = 5 + 2;
console.log(number + 3);

console.log(4 + 3);

//2. Substraction

console.log(9 - 4);

//3. Multiplication

console.log(2 * 4);

// 4. Division

console.log(8 / 4);

// 5. Exponention

console.log(2 ** 3);

// 6. Moulus (Remainder) operator

console.log(8 % 2);
console.log(10 % 7);

// 7. Increment operator (increase) with increment we always use let. always increases by 1

let a = 5;
a++;

console.log(a);

// 8. Decrement operator (always decreases by 1)

let b = 11;

b--;
b--;
b--;
b--; //decreases 4 times. will print 7(11-4)

console.log(b);

// Comparison Operators - will give us a boolean data type //

// "!" sign (reverse the value) boolean data type
console.log(!(8 > 3));

//1. Strict equal

console.log(5 === 5);
console.log(5 === 8);

// 2. Not Strict equal

console.log(5 !== 5);
console.log(5 !== 5);

// 3. Greater than

console.log(20 > 12);

// 4. less than

console.log(30 < 20);

// 5. Greater than or equal

console.log(8 >= 4);
console.log(8 >= 8);

// 6. Less than or equal

console.log(10 <= 10);
console.log(12 <= 20);

console.log(5 === "5");

// Logical Operators //

// 1. && (and) sign - returns true only if both conditions are true

if (5 > 3 && 8 < 4) {
  // if any of this is false it won't be printed. both has to be true to run
  console.log("Hi.NYC!");
}

// Does not print anythig because one of the condition is false
if (5 > 3 && 8 < 4) {
  console.log("Hi.NYC!");
}

// 2. || (or) operator - Returns true if at least one of the condition is true.

if (5 > 3 || 2 < 4) {
  console.log("Hi, Brooklyn");
}

if (5 > 3 || 8 < 4) {
  console.log("Hi, Chicago");
}

if (80 > 100 || 70 < 90) {
  console.log("Hi, Texas!");
}
