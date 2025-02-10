const myName = 'John';
console.log(typeof myName);

const anotherName = new String('John');
console.log(typeof anotherName); // object

const aSentence = 'I love JavaScript ';
const doesIncludeLove = aSentence.includes('love');
console.log(doesIncludeLove);


console.log(aSentence[3]);

console.log(aSentence.split(' '));

console.log(aSentence.slice(0, 4)); // preferred for extracting a part of a string
console.log(aSentence.substring(0, 4));

console.log(aSentence.replace('JavaScript', 'TypeScript'));

console.log(aSentence.replaceAll('a', 'A'));

console.log(aSentence.startsWith('I'));

console.log(aSentence.endsWith('Script'));

console.log(aSentence.toUpperCase());

// ... and more