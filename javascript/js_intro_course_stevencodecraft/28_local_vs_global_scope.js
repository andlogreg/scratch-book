// a variable declared outside a function is a global variable
let age = 25;

function greet() {
    console.log(`Hello, my age is ${age}`);
}

greet(); // Hello, my age is 25

// a variable declared inside a function (or any block in curly braces) is a local variable
function greet2() {
    let age = 30; // overrides the global age variable
    console.log(`Hello, my age is ${age}`);
}

greet2(); // Hello, my age is 30

console.log(age); // 25 (global age variable)
