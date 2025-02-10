let now = new Date();
console.log(now);
console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());

let anotherDate = new Date('2024-01-01');
console.log(anotherDate);

let anotherDate2 = new Date(0);
console.log(anotherDate2);

let anotherDate3 = new Date(2024, 0, 1);
console.log(anotherDate3);

let anotherDate4 = new Date(2024, 0, 1, 10, 10, 10);
console.log(anotherDate4);
