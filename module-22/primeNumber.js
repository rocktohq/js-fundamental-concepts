/*
 * Problem 6: Finding prime numbers from an array
 * 
 */

function findingPrimeNumbers(numbers) {
    if (!Array.isArray(numbers)) {
        return "Error: Please provide an array of numbers!";
    }

    let primes = [];
    for (number of numbers) {
        if (typeof number !== "number") {
            return "Error: Please provide numbers only!";
        } else if (number < 0) {
            return "Error: Please provide positive numbers!";
        } else {
            if (number > 1) {
                let isPrime = true;
                for (i = 2; i < number; i++) {
                    if (number % i === 0) {
                        isPrime = false;
                        break;
                    }
                }
                if (isPrime === true) {
                    primes.push(number);
                }
            }
        }
    }
    return primes;
}

const numbers = [3, 4, 8, 10, 24, 23, 19];
const primeNumbers = findingPrimeNumbers(numbers);
console.log(primeNumbers);