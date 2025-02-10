// primitive types are copied by value
let a = 10;
let b = a;

a = 20;

console.log(a);
console.log(b);

// reference types are copied by reference
let c = {
    value: 10
};

let d = c;

c.value = 20;

console.log(c);
console.log(d);


