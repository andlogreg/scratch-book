function fizzBuzz(number) {
    if (number % 3 === 0 && number % 5 === 0) {
        return 'FizzBuzz';
    } else if (number % 3 === 0) {
        return 'Fizz';
    } else if (number % 5 === 0) {
        return 'Buzz';
    } else {
        return number;
    }
}

console.log(fizzBuzz(1));
console.log(fizzBuzz(3));
console.log(fizzBuzz(5));
console.log(fizzBuzz(15));
console.log(fizzBuzz(2));
console.log(fizzBuzz(4));
console.log(fizzBuzz(6));
console.log(fizzBuzz(10));
console.log(fizzBuzz(12));


// Alternative, more efficient solution
function fizzBuzz(number) {
    let result = '';
    if (number % 3 === 0) result += 'Fizz';
    if (number % 5 === 0) result += 'Buzz';
    return result || number;
}

console.log(fizzBuzz(1));
console.log(fizzBuzz(3));
console.log(fizzBuzz(5));
console.log(fizzBuzz(15));
console.log(fizzBuzz(2));
console.log(fizzBuzz(4));
console.log(fizzBuzz(6));
console.log(fizzBuzz(10));
console.log(fizzBuzz(12));