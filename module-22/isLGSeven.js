/**
 * Problem 4: 
 */

// Function
function isLGSeven(number) {
    // Validation
    if (typeof number !== "number") {
        return "Error: Please enter a number";
    } else {        // We will code our actual logic(s) in this block
        const sub = number - 7;
        if(sub < 7) {
            return sub;
        } else {
            return number * 2;
        }
    }
}

// CallAndPrint
const result = isLGSeven(-15);
console.log(result);