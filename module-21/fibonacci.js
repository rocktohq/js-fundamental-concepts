function fibonacciSeries(number){
    const fiboInit = [0, 1];
    let fiboSeries = [];
    for (i = 2; i <= number; i++) {
        fiboInit[i] = fiboInit[i - 1] + fiboInit[i - 2];
        fiboSeries.push(fiboInit[i]);
    }

    return fiboSeries;
}

const number = 10;
const fibo = fibonacciSeries(number);
console.log("Fibonacci Series of", number, "is:", fibo);