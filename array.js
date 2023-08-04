var names = ["Monir", "Rashed", "Imran", "Roman"];
var ages = [30, 29, 31, 28];

// Print Array
// console.log(names);
// console.log(names[0]);

// Print Element by Index
var name = names[2];
// console.log(name);

// Set a New Value by Index
names[3] = "Ruman";
// console.log(names);

// Index of a Value
// console.log(ages.indexOf(31));


// Loop
for (let i = 0; i < names.length; i++) {
    console.log(i + 1, names[i]);
}


// Break
const fruits = ["Apple", "Banana", "Mango", "Nut", "Orange"];

for (let i = 0; i < fruits.length; i++) {
    if (fruits[i] === "Mango") {
        break;
    }

    // console.log(fruits[i]);
}

// Continue

for (let i = 0; i < fruits.length; i++) {
    if (fruits[i] === "Nut") {
        continue;
    }

    // console.log(i + 1, fruits[i]);
}