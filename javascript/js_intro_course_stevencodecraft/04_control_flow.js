let x = 1;

// if statement
// NOTE: when having a single statement, you can omit the curly braces
if (x > 0) {
    console.log('x is positive');
} else if (x < 0) {
    console.log('x is negative');
} else {
    console.log('x is zero');
}

// switch statement
let y = 2;

switch (y) {
    case 1:
        console.log('y is 1');
        break;
    case 2:
        console.log('y is 2');
        break;
    default:
        console.log('y is not 1 or 2');
}

// switch statement - fall through
// NOTE: the break statement is optional, but it's a good practice to use it
// Only use fall through if you want to execute the next case. However, you should
// always document that you are using fall through. Be careful with this, it can
// lead to bugs!
let dayOfWeek = 'Wednesday';

switch (dayOfWeek) {
    case 'Monday':
    case 'Tuesday':
    case 'Wednesday':
    case 'Thursday':
    case 'Friday':
        console.log('It\'s a workday');
        break;
    case 'Saturday':
    case 'Sunday':
        console.log('It\'s the weekend');
        break;
    default:
        console.log('Invalid day');
}

// for loop
for (let i = 0; i < 5; i++) {
    console.log(i);
}

let numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

// while loop
let idx = 0;

while (idx < 5) {
    console.log(idx);
    idx++;
}

// do-while loop
// NOTE: the do while loop will always execute the code block once, even if
// the condition is false
let idx2 = 0;

do {
    console.log(idx2);
    idx2++;
} while (idx2 < 5);

// for-in loop
let person = {
    name: 'John',
    age: 30,
    city: 'New York'
};

for (const key in person) {
    // NOTE: key can be `const` because each iteration of the loop creates a new
    // scope for the key variable
    console.log(key, person[key]);
}

// for-of loop
let numbers2 = [1, 2, 3, 4, 5];

for (const number of numbers2) {
    console.log(number);
}

// for-each loop
numbers2.forEach(number => {
    console.log(number);
});

// break and continue
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break; // stops the loop at 5
    }
    console.log(i);
}

for (let i = 0; i < 10; i++) {
    if (i === 5) {
        continue; // skips the iteration at 5
    }
    console.log(i);
}