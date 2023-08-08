/*
 * Problem 6: Recursion 
 */

function sumOfN(n) {
    if (n === 1) {
        return 1;
    } else {
        return n + sumOfN(n - 1);
    }
}

const n = 10;
const result = sumOfN(n);
console.log(result);