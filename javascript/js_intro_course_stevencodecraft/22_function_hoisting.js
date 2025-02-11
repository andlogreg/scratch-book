add(1, 2); // this will work because all function declarations are hoisted to the top of the file

function add(a, b) {
    console.log(a + b);
}

// but function expressions are not hoisted
// greet(); // this would throw an error because the function expression is not hoisted


let greet = function() {
    console.log('Hello, world!');
};

