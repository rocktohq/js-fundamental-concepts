function reverseString(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        const element = str[i];
        reversed = reversed + element;
    }

    return reversed;
}

const str = "I am okay";
const rvStr = reverseString(str);
console.log(rvStr);