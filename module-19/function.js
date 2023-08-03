// Problem - 1
function bar () {
    console.log("bar");
}
function foo() {
    console.log("foo");
    bar();
}

// foo();

// Problem - 2
function makeAvg(num1, num2, num3) {
    let total = num1 + num2 + num3;
    let avg = total / 3;

    return avg;
    // return parseInt(avg);
}

let avg = makeAvg(2, 5, 7);
// console.log(parseFloat(avg.toFixed(2)));

// Problem - 3
let numbers = [10, 20, 30, 40, 5];
let length = numbers.length;

// Function Declaration
function makeAverage(numbers, length) {

    var sum = 0;
    for (let i = 0; i < length; i++) {
        sum += numbers[i];
    }

    let avg = sum / length;
    return avg;
}

// Call the Function
let avgNumber = makeAverage(numbers, length);
// console.log("Average number: ", avgNumber);

// Problem - 4
// Has Parameter and Return
function oddEven(number) {
    var result = "";
    if (number % 2 === 0) {
        result = "This is an Even number"
    }
    else if (number % 2 === 1) {
        result = "This is an Odd number";
    }
    else {
        result = "Error: Something went wrong!";
    }
    
    return result;
}

let resultMessage = oddEven(166.2);
// console.log(resultMessage);

// Has Parameter and NoReturn
function oddEven2(number) {
    var result = "";
    if (number % 2 === 0) {
        result = "This is an Even number"
    }
    else if (number % 2 === 1) {
        result = "This is an Odd number";
    }
    else {
        result = "Error: Something went wrong!";
    }
    
    console.log(result);
}

// oddEven2(15);

// Problem - 5
let signalColor = "blue";

switch(signalColor) {
    case "red":
        console.log("Don't cross the road, it's dangerous!");
        break;
    
    case "yellow":
        console.log("You should stop!");
        break;
    
    case "green":
        console.log("It's safe, you can cross the road.");
        break;

    default:
        console.log("Ask a policeman or any person near at you");

}
