const person = {
    name: 'John',
    age: 30,
    city: 'New York'
};

console.log(person);

console.log(person.constructor);

console.log(person.constructor === Object);

////////////////////////////////////////////////////////////

// let newObj = {}; // the same as new Object(), but more readable
let newObj = new Object(); // the same as {}

// NOTE: these are all the same as their primitive counterparts
new String();
new Number();
new Boolean();
