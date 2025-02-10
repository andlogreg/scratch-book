function showEvenNumbers(my_array) {
    for (const number of my_array) {
        if (number % 2 === 0) {
            console.log(number);
        }
    }
}

function showOddNumbers(my_array) {
    for (const number of my_array) {
        if (number % 2 === 1) {
            console.log(number);
        }
    }
}

showEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
showOddNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
