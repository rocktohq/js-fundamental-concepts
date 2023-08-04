function minToSec(min) {
    let sec = min * 60;

    return sec;
}

// 
let min = 59;
let sec = minToSec(min);
console.log(min, "Minutes =", sec, "Seconds");