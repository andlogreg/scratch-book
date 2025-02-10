let a = { value: 10 };
let b = a;

a.value = 20;

console.log(a);
console.log(b);

let c = { value: 10 };
let d = {};
Object.assign(d, c);
// let d = { ...c }; // this is the spread operator. It does the same thing as Object.assign

c.value = 20;

console.log(c);
console.log(d);