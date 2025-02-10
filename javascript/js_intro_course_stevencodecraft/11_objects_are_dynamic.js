const person = {
    name: 'John',
    age: 30,
    city: 'New York'
};

console.log(person);

person.favoriteColor = 'blue';

console.log(person);

person['favoriteNumber'] = 10;

console.log(person);

delete person.favoriteColor;

console.log(person);

person.greet = function() {
    console.log('Hello!');
}

person.greet();

