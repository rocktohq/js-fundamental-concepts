/*
#   Negative number counter
*/

// Function to find bad data
function findingBadData(dataArr) {
    // Validation
    if (!Array.isArray(dataArr)) {
        return "Error: Please provide an array of number!";
    }

    let badDataCounter = 0;
    for (element of dataArr) {
        if (typeof element !== "number") {
            return "Error: Please provide an array of number!";
        }
        else {
            if (element < 0) {
                badDataCounter++;
            }
        }
    }
    return badDataCounter;
}

// Input data array
const inputOne = [1, 2, 5];
const inputTwo = [2, -5, -7, -13];
const inputThree = [-4, -9, -5, -33, -55];

// Calling the function
const badDataOne = findingBadData(inputOne);
const badDataTwo = findingBadData(inputTwo);
const badDataThree = findingBadData(inputThree);

// Printing the result
console.log("Output of the input 1:", badDataOne);
console.log("Output of the input 2:", badDataTwo);
console.log("Output of the input 3:", badDataThree);