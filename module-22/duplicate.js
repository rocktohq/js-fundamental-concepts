const names = ["Monir", "Ponir", "Sonir", "Monir", "Konir", "Ponir", "Bonir", "Monir", "Bonir", "Konir"];

// Function to filter out duplicate elements
function removeDuplicate(names) {
    const unique = [];
    for (let i = 0; i < names.length; i++) {
        const name = names[i];
        if(unique.includes(name) === false){
            unique.push(name);
        }
    }
    return unique;
}

const uniqueNames = removeDuplicate(names);
console.log(uniqueNames);