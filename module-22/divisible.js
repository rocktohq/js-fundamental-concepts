function divisible(from, to) {
    for (i = from; i <= to; i++) {
        if (i % 5 === 0 && i % 3 === 0) {
            console.log("foobar");
        }
        else if (i % 5 === 0) {
            console.log("bar");
        }
        else if (i % 3 === 0) {
            console.log("foo");
        }
        else console.log(i);
    }
}

const from = 1;
const to = 50;
const result = divisible(from, to);