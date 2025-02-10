function add(a, b) {
    return a + b;
}

console.log(add);

const n = add;

console.log(n(1, 2));

console.log(typeof add);

console.log(add.name);

console.log(add.length);

// Now with a constructor function
function Dog(name, breed, age, weightInKg) {
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
}

console.log(Dog.length);

console.log(Dog.constructor);

// there are also prototypes. To understand later...

console.log(Dog.prototype);

console.log(Dog.prototype.constructor);

console.log(Dog.prototype.constructor === Dog);

// Using constructor function
// TODO understand this better
const Dog2 = new Function('name', 'breed', 'age', 'weightInKg', `
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
`);
const newDog = new Dog2('Rex', 'Labrador', 5, 34);

console.log(newDog);

newDog.eat();