function findOddSum(numbers) {
    let sum = 0;
    for(let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];

        // Condition to find only Odd numbers
        if(element % 2 === 1) {
            sum += element;
        }
    }

    return sum;
}

let numbers = [12, 34, 56, 55, 89, 43];

let oddSum = findOddSum(numbers);
console.log("Sum of the Odd numbers:", oddSum);