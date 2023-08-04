/*
# Task: 1
# Taka to Dollar Converter
*/

// Function to convert taka to dollar
function takaToDollar(taka) {
    let dollar = taka * 0.0092;
    return dollar;
}

// Call the function
let taka = 100;
let dollar = takaToDollar(120);

// Print the result
console.log(dollar.toFixed(2));



/*
# Task: 2
# Print message based on string's length
*/

// Function to compare
function barbieKen(str) {
    let length = str.length;

    if(length % 2 === 0) {
        console.log("Hi Ken");
    } else {
        console.log("Hi Barbie");
    }
}

// Call the fuction
barbieKen("Phero");
barbieKen("Batch8");
barbieKen("chatgpt");
