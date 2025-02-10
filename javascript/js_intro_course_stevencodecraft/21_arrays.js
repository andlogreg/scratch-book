// adding elements to an array
let numbers = [1, 2, 3, 4, 5];
numbers.push(6, 7, 8); // adds to the end
numbers.unshift(-1, 0); // adds to the beginning
numbers.splice(2, 0, 'a', 'b'); // adds to the middle

console.log(numbers);

// removing elements from an array
numbers.pop(); // removes the last element
numbers.shift(); // removes the first element
numbers.splice(2, 1); // removes the element at index 2

console.log(numbers);

// finding elements in an array (primitive)
console.log(numbers.indexOf(3)); // returns the index of the element (first occurrence)
console.log(numbers.indexOf(90)); // returns -1 if the element is not found
console.log(numbers[numbers.indexOf(90)]); // returns undefined if the element is not found

console.log(numbers.lastIndexOf(3)); // returns the index of the last occurrence of the element
console.log(numbers.includes(3)); // returns true if the element is in the array


// finding elements in an array (reference)
let courses = [
    { id: 1, name: 'Node.js' },
    { id: 2, name: 'JavaScript' },
    { id: 3, name: 'Python' },
];

console.log(courses.find(function(course) { // course is the current element in the array
    return course.name === 'JavaScript'; //must return a boolean
}));
console.log(courses.findIndex(function(course) { // returns the index of the element
    return course.name === 'JavaScript';
}));
//same but using arrow function
console.log(courses.find(course => course.name === 'JavaScript'));
console.log(courses.findIndex(course => course.name === 'JavaScript'));


// sorting an array
numbers.sort(); // sorts the array in ascending order
numbers.reverse(); // reverses the array

let employees = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Jim' },
];
employees.sort(function(a, b) {
    const nameA = a.name.toUpperCase(); 
    const nameB = b.name.toUpperCase();
    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
});



// empty an array
numbers.length = 0;
console.log(numbers);

// another way to empty an array
numbers = [];
console.log(numbers);

// combining arrays
let first = [1, 2, 3];
let second = [4, 5, 6];
let combined = first.concat(second);
console.log(combined);

// another way to combine arrays
combined = [...first, 32, ...second, 76]; //spread operator. Allows to add elements to the array
console.log(combined);

// slicing an array
let sliced = combined.slice(2, 4);
console.log(sliced);


//iterating an array
for (let course of courses)
    console.log(course);

//iterating an array with forEach
courses.forEach(course => console.log(course));
courses.forEach((course, index) => console.log(index, course));


// joining arrays
let joined = numbers2.join(','); // converts the array to a string
console.log(joined);

// testing elements of an array
let numbers3 = [1, -1, 2, 3];

let allPositive = numbers3.every(value => value >= 0);
console.log(allPositive);

let atLeastOnePositive = numbers3.some(value => value >= 0);
console.log(atLeastOnePositive);

// filtering an array
let filtered = numbers3.filter(value => value >= 0);
console.log(filtered);

// mapping an array
let items = numbers3.map(value => value * value);
console.log(items);

// mapping an array with an object
employees.map(employee => ({
    ...employee, // makes a shallow copy. Ensures that the original employee object is not modified
    name: employee.name.toUpperCase()
}));


// reducing an array
let sum = numbers3.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum);
