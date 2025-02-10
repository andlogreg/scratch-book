function sayHello(name) {
    console.log('Hello, ' + name);
}

console.log(sayHello('John'));
console.log(sayHello('Jane'));


function add(a, b) {
    return a + b;
}

console.log(add(1, 2));
console.log(add(1, 2, 3)); // 3 is ignored

// anonymous functions
let greet = function() {
    console.log('Hello, world!');
};

greet();

// arrow functions
let greet2 = () => {
    console.log('Hello, world!');
};

greet2();

// Anonymous functions and arrow functions are both ways to create function expressions
// Anonymous functions use the 'function' keyword without a name:
//   let fn = function() { ... }
// Arrow functions use => syntax and have some key differences:
// 1. More concise syntax, especially for single expressions
// 2. Don't bind their own 'this' value - inherit from parent scope
// 3. Can't be used as constructors (with 'new')
// 4. Don't have their own 'arguments' object
// 5. Can't be used for generator functions
//
// When to use each:
// Use anonymous functions when you:
// - Need to use 'this' bound to the function itself
// - Need the 'arguments' object
// - Want to use the function as a constructor
// - Need to create generator functions
//
// Use arrow functions when you:
// - Want more concise syntax, especially for simple functions
// - Need 'this' to refer to the parent scope (e.g., in callbacks)
// - Are working with array methods like map/filter/reduce
// - Don't need constructor functionality or arguments object
