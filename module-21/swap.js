let a = 10;
let b = 20;

console.log(a, b);

// System: 1
// let temp = a;
// a = b;
// b = temp;
// console.log(a, b);


// System: 2
// a = a + b; // a = 30
// b = a - b; // b = 10
// a = a - b; // a = 20
// console.log(a, b);


// System: 3
[a, b] = [b, a];
// console.log(a, b);