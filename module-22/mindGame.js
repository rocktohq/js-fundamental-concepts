/**
 * Problem 3:
 * 
 * 
 */

function mindGame(number) {
    // Validation
    if (typeof number !== "number") {
        return "Error: Please input a number!";
    } else if (number <= 0) {
        return "Error: Please input a positive number";
    } else {
        const result = (((number * 3) + 10) / 2) - 5;
        return result;
    }
}

const output = mindGame(22);
console.log(output);