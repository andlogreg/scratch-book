const dog = {
    name: 'Rex',
    breed: 'Labrador',
    age: 5,
    weightInKg: 34,
    color: 'brown',
    eat: function() { // option 1
        console.log('Eating...');
        this.weightInKg += 0.2;
    },
    bark() { // option 2
        console.log('Woof!');
    }
};

console.log(dog.name);
console.log(dog.weightInKg);
dog.eat();
console.log(dog.weightInKg);
dog.bark();
