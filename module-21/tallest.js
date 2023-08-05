function tallestHeight(heights) {
    let largest = heights[0];
    for (let i = 0; i < heights.length; i++) {
        const index = i;
        element = heights[index];

        if (element > largest) {
            largest = element;
        }
    }

    return largest;
}

const heights = [167, 190, 120, 165, 137, 222];
const tallest = tallestHeight(heights);
console.log("Tallest height is:", tallest);