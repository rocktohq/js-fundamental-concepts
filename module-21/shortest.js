function shortestHeight(heights) {
    let shortest = heights[0];
    for (let i = 0; i < heights.length; i++) {
        const index = i;
        const element = heights[index];

        if(element < shortest) {
            shortest = element;
        }
    }
    return shortest;
}

const heights = [167, 190, 120, 165, 137, 222];
const shortest = shortestHeight(heights);
console.log("Shortest height is:", shortest);