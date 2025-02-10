let numbers = [1, 2, 3, 4, 5];

for (const number of numbers) {
    console.log(number);
}

let dog = {
    name: 'Rex',
    breed: 'Labrador',
    age: 5,
    weightInKg: 34
};

for (const key in dog) {
    console.log(key, dog[key]);
}

// NOTE: the for-in loop is used to iterate over the properties of an object
// The for-of loop is used to iterate over the elements of an array

const keys = Object.keys(dog);
console.log(keys);

const values = Object.values(dog);
console.log(values);

const entries = Object.entries(dog);
console.log(entries);


for (const key of Object.keys(dog)) {
    console.log(key);
}

for (const value of Object.values(dog)) {
    console.log(value);
}

for (const [key, value] of Object.entries(dog)) {
    console.log(key, value);
}



