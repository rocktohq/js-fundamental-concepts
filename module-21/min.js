// Manual: Using Conditions
let num1 = 99;
let num2 = 78;
let num3 = 89;

function minNumber(num1, num2, num3) {
    if (num1 < num2 && num1 < num3) {
        return num1;
    }
    else if (num2 < num1 && num2 < num3) {
        return num2;
    }
    else {
        return num3;
    }
}

const minNum = minNumber(num1, num2, num3);
// console.log("Max number is:", minNum);



// Math: Using Math.min
function mathMinNumber(num1, num2, num3) {
    let minNum = Math.min(num1, num2, num3);
    return minNum;
}

const mathMin = mathMinNumber(num1, num2, num3);
// console.log("Max number is:", mathMin);