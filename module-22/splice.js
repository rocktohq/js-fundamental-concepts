const numbers = [44, 55, 22, 11, 33, 77];

// Splice: remove the elements of an array and returns the removed elements as a new array
// New elements can be added
// Param: (fromIndex, numberOfElements, ifWantToaddNewElements: 78, 67, 56)

// const partial = numbers.splice(1, 4);
// console.log(partial);
// console.log(numbers);
const partial2 = numbers.splice(1, 4, 12, 24, 36);   // Add new elements

console.log(partial2);
console.log(numbers);