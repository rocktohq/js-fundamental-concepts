function hourToMin(hour) {
    let min = hour * 60;

    return min;
}

// 
let hour = 8;
let min = hourToMin(hour);
console.log(hour, "Hour =", min, "Minutes");