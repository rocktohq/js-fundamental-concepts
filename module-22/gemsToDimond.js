/**
 * Problem 4 : Gems to Dimond Converter
 * 
 * Input : gemsToDimond(100, 5, 1)
 * @param 1 : gems1 : First friend's gems
 * @param 2 : gems2 : Second friend's gems
 * @param 3 : gems3 : Third friend's gems
 */

// Main function to calculate
function gemsToDimond(gems1, gems2, gems3) {
    if (typeof gems1 !== "number" || typeof gems2 !== "number" || typeof gems3 !== "number") {
        return "Error: Please provide valid number";
    } else if (gems1 < 0 || gems2 < 0 || gems3 < 0) {
        return "Error: Please provide positive number";
    } else {
        const totalDimonds = (gems1 * 21) + (gems2 * 32) + (gems3 * 43);
        if (totalDimonds > 2000) {
            return totalDimonds - 2000;
        } else return totalDimonds;
    }
}

// Printing the result
const result = gemsToDimond(1, 1, 1);
console.log(result);