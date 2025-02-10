// constructor functions are a way to create objects
// they are a special type of function that is used to create and initialize objects
// they are typically named with a noun and a capital letter (PascalCase)
// they are more commonly used than factory functions for this purpose
//
// NOTE: the `this` keyword is used to refer to the object that is being created

function Dog(name, breed, age, weightInKg) {
    // this = {} // implicit
    this.name = name;
    this.breed = breed;
    this.age = age;
    this.weightInKg = weightInKg;

    this.eat = function() {
        console.log('Eating...');
        this.weightInKg += 0.2;
    }

    this.bark = function() {
        console.log('Woof!');
    }
    // return this // implicit
}

// NOTE: the `new` keyword is used to create a new object. It's syntactical sugar
// for the constructor function. Under the hood, the `new` keyword does the
// following:
// 1. Creates a new empty object
// 2. Sets the `this` keyword to point to the new empty object
// 3. Calls the constructor function with the new object as the argument
// 4. Returns the new object
const dog1 = new Dog('Rex', 'Labrador', 5, 34);
console.log(dog1);

const dog2 = new Dog('Bella', 'Poodle', 3, 12);
console.log(dog2);
