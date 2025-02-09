// arithmetic operators
console.log(1 + 2); // 3
console.log(1 - 2); // -1
console.log(1 * 2); // 2
console.log(1 / 2); // 0.5
console.log(1 % 2); // 1
console.log(2 ** 3); // 8

// assignment operators
let x = 1;
x += 2; // same as x = x + 2
console.log(x); // 3
x -= 1; // same as x = x - 1
console.log(x); // 2
x *= 3; // same as x = x * 3
console.log(x); // 6
x /= 2; // same as x = x / 2
console.log(x); // 3
x %= 2; // same as x = x % 2
console.log(x); // 1
x **= 3; // same as x = x ** 3
console.log(x); // 1

// equality operators
console.log(1 == '1'); // true -> loose equality
console.log(1 === '1'); // false -> strict equality

console.log(1 != '1'); // false -> loose inequality
console.log(1 !== '1'); // true -> strict inequality

// comparison operators
console.log(1 < 2); // true
console.log(1 > 2); // false
console.log(1 <= 2); // true
console.log(1 >= 2); // false

// ternary operator
let age = 18;
let canDrive = age >= 18 ? 'Yes' : 'No';
console.log(canDrive);

// logical operators
console.log(true && false); // false
console.log(true || false); // true
console.log(!true); // false
let a = null;
const result = a ?? 'default'; // same as (a !== null && a !== undefined) ? a : 'default'
console.log(result); // default

// non-boolean values
console.log(false || 'hello' || 'goodbye'); // hello -> Returns the first truthy value
console.log(false && 'hello' && 'goodbye'); // false -> Returns the first falsy value
