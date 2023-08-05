// #VARIABLE DECLARATION
let firstName = "Saidul";
const idNumber = 101;
const isAdult = true;
// console.log(firstName, idNumber, isAdult);

// RESET THE VALUE
firstName = "Monir";
// console.log(firstName);


// #ARITMATIC OPERATION
let num1 = 10;
let num2 = 20;
const sum = num1 + num2;
const sub = Math.abs(num1 - num2);
const div = num1 / num2;
const adi = num1 * num2;
const modu = num1 % 3;
// console.log("Sum:", sum, "Sub:", sub, "Div:", div, "adi:", adi, "modu:", modu);


// #SIMPLE CONDITION
if (num1 > num2) {
    // console.log("Num1", num1, "is bigger");
}
else {
    // console.log("Num2", num2, "is bigger");
}


// #ODD or EVEN
if (num1 % 2 === 0) {
    // console.log("Num1 is Even");
}
else {
    // console.log("Num1 is Odd");
}


// #AND - OR OPERATOR
let sallary = 15000;
let hasCar = false;
let isSingle = true;
if ((sallary > 10000 || hasCar === true) && isSingle === true) {
    // console.log("They can be friends");
}
else {
    // console.log("Try again later");
}


// #PRINTING ODD NUMBERS
let num = 7;
while (num <= 19) {
    if (num % 2 === 1) {
        // console.log(num);
    }
    num++;
}


// #ARRAY
let numbers = [12, 34, 32, 33, 55, 76];
// console.log("Total elements:", numbers.length);
// CHANGE VALUE
numbers[3] = 99;
// console.log(numbers);
// ADD VALUE
numbers.push(19);
numbers.unshift(88);
// console.log(numbers);

// DELETE A VALUE
numbers.pop();
// console.log(numbers);
numbers.shift();
// console.log(numbers);


// #LOOP THROUGH AN ARRAY
for (let i = 0; i < numbers.length; i++) {
    // console.log(numbers[i]);
}


// #CONDITION ELEMENTS > 80
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 80) {
        // console.log(numbers[i]);
    }
}


// RETURN MULTIPLICATION RESULT
function mulResult(n1, n2, n3) {
    const result = n1 * n2 * n3;
    return result;
}

const result = mulResult(2, 3, 4);
// console.log(result);


// #OBJECT
let person = {
    firstName: "Saidul",
    secondName: "Mursalin",
    age: 28,
    marks: [10, 20, 30]
}

// console.log(person.marks)
// CHANGE VALUE OF AN OBJECT
const keyToUpdate = "age";
person[keyToUpdate] = 32;
// console.log(person);


// #FEET TO INCH CONVERTER
function feetToInch(feet) {
    const inch = feet * 12;
    return inch;
}

const feet = 5;
const toInch = feetToInch(feet);
// console.log(toInch);


// #CENTIMETER TO METER CONVERTER
function centimeterToMeter(centimeter) {
    meter = centimeter * 0.001;
    return meter;
}

const centimeter = 100;
const toMeter = centimeterToMeter(centimeter);
// console.log(toMeter);


// #BOOK PRINTING
function paperRequirements(book1, book2, book3) {
    const firstBookPages = book1 * 100;
    const secondBookPages = book2 * 200;
    const thirdBookPages = book3 * 300;

    const totalRequredPages = firstBookPages + secondBookPages + thirdBookPages;

    return totalRequredPages;
}

const firstBookCopies = 12;
const secondBookCopies = 9;
const thirdBookCopies = 5;

const requiredPages = paperRequirements(firstBookCopies, secondBookCopies, thirdBookCopies);
// console.log(requiredPages);


// #BEST FRIEND
function bestFriend(arr) {
    let largest = arr[0];
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (element.length > largest.length) {
            largest = element;
        }
    }
    return largest;
}

const friends = ["Rashadul Islam Rabby", "Al Mahmud Roman", "Imran Hossain", "Mahmud Tushar"];
const bFriend = bestFriend(friends);
// console.log(bFriend);


// #POSITIVE NUMBERS
function positiveNumbers(numbers) {
    const pNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (element >= 0) {
            pNumbers.push(element);
        }
        else {
            break;
        }
    }
    return pNumbers;
}

const numberList = [23, 0, 45, 67, -1, 0, 99, -64];
const pNumberList = positiveNumbers(numberList);
// console.log(pNumberList);