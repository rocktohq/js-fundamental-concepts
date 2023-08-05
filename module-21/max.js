// Manual: Using Conditions
let num1 = 65;
let num2 = 98;
let num3 = 56;

function maxNumber(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        return num1;
    }
    else if (num2 > num1 && num2 > num3) {
        return num2;
    }
    else {
        return num3;
    }
}

const maxNum = maxNumber(num1, num2, num3);
// console.log("Max number is:", maxNum);



// Math: Using Math.max
function mathMaxNumber(num1, num2, num3) {
    let maxNum = Math.max(num1, num2, num3);
    return maxNum;
}

const mathMax = mathMaxNumber(num1, num2, num3);
console.log("Max number is:", mathMax);