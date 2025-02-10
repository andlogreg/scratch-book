// from previous exercise
// const dog = {
//     name: 'Rex',
//     breed: 'Labrador',
//     age: 5,
//     weightInKg: 34,
//     color: 'brown',
//     eat: function() { // option 1
//         console.log('Eating...');
//         this.weightInKg += 0.2;
//     },
//     bark() { // option 2
//         console.log('Woof!');
//     }
// };


function getDog(name, breed, age, weightInKg, color) {
    return {
        name, // note: you can omit the key if the key and the value are the same
        breed,
        age,
        weightInKg,
        color,
        eat() {
            console.log('Eating...');
            this.weightInKg += 0.2;
        },
        bark() {
            console.log('Woof!');
        }
    };
}

const dog1 = getDog('Rex', 'Labrador', 5, 34, 'brown');
console.log(dog1);

const dog2 = getDog('Bella', 'Poodle', 3, 12, 'white');
console.log(dog2);
