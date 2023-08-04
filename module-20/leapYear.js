function isLeapYear(years) {
    let leapYears = [];
    for (let i = 0; i < years.length; i++) {
        if(years[i] % 4 === 0) {
            leapYears.push(years[i]);
        }
    }

    return leapYears;
}

let years = [2023, 2024, 2025, 2028, 2030];

let leapYears = isLeapYear(years);
console.log(leapYears);