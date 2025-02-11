let course = {
    title: 'JavaScript For Beginners',
    rating: 5,
    students: 30,
    isPaid: true
}

// spread operator
let newCourse = {...course}; // easy way to clone an object and modify it
console.log(newCourse);
let newCourse2 = {...course, title: 'JavaScript For Experts'};
console.log(newCourse2);


// rest operator
function multiply(...args) {
    return args.reduce((a, b) => a * b, 1);
}

console.log(multiply(1, 2, 3, 4, 5));


function multiply2(multiplier, ...args) { // similar to python's *args
    return args.map(arg => arg * multiplier);
}

console.log(multiply2(2, 1, 2, 3, 4, 5));



