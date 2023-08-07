/*
# Problem 1: A function will take a number as input
# and will check: if that is an integer or not
# then: if integer, it will return true
# otherwise, it'll return false
#
# Logic: if typeof the input is number
# and is positive (not negative: less then 0)
# then: the input is an integer
*/

// Function
function isInteger(number) {
    if (typeof number !== "number") {
        return "Error: Please input a number!";
    }

    if (number % 1 === 0) {
        return true;
    } else {
        return false;
    }
}

const result = isInteger(5.39);
console.log(result);