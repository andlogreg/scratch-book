function multiply(a, b) {
    console.log(arguments);
    return a * b;
}

console.log(multiply(2, 3));
console.log(multiply(2)); // b is undefined and NaN so the result is NaN
console.log(multiply(2, 3, 4)); // 4 is ignored but is present in the `arguments` (iterable object)

