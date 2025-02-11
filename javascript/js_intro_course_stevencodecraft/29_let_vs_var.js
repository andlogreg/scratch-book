// let and var are both used to declare variables in JavaScript
// let is block scoped and var is function scoped
// let is recommended to use because it reduces global scope pollution

function display() {
    for (var i = 0; i < 3; i++) {
        console.log(i);
    }
    console.log(i); // accessible outside the loop because var is function scoped
}

display();

// let is block scoped
for (let i = 0; i < 3; i++) {
    console.log(i);
}
console.log(i); // not accessible outside the loop because let is block scoped