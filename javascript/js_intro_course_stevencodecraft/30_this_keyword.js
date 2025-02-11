// this keyword is used to refer to the object that is calling the function
// this keyword is not available in arrow functions, static methods, class fields
// in a regular function (not a function of an object), this refers to the global object (window in the browser, global in Node.js)


const course = {
    title: 'JavaScript For Beginners',
    rating: 5,
    students: 30,
    isPaid: true,
    start() {
        console.log(this.title);
    }
}


const course2 = {
    title: 'JavaScript For Beginners',
    rating: 5,
    students: 30,
    isPaid: true,
    start: () => {
        // undefined because arrow functions do not have their own this keyword,
        // they inherit the this keyword from the parent scope. And since the
        // parent scope is the global object, this.title is undefined
        console.log(this.title); 
    }
}

course2.start(); // undefined
course.start(); // JavaScript For Beginners

// bind method
function introduce() {
    console.log(`Hello, my name is ${this.name}`);
}

const user = {
    name: 'John'
}
const introduction = introduce.bind(user);
introduction(); // Hello, my name is John
