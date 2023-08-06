const fullName = "Saidul Mursalin";
const age = 27;
const isEmployeed = false;
const cgpa = 3.33;
const information = {
    name: "Saidul Mursalin",
    age: 27,
    isEmployeed: false,
    phone: "01716685459",
    cgpa: 3.33,
    address: "Jamalpur"
}
const friends = ["Rashed", "Imran", "Roman", "Babu"];


// Printing the TYPE of these variables
console.log(typeof fullName);
console.log(typeof age);
console.log(typeof isEmployeed);
console.log(typeof cgpa);
console.log(typeof information);
console.log(typeof friends);    // Array can't be checked in this way
console.log(Array.isArray(friends));    // ArrayChecker: true = isArray || false = notArray
console.log(Array.isArray(fullName));


// Checking: if an element is present in an array or not
console.log(friends.includes("Rashed"));
console.log(friends.includes("Monir"));

// Old way to check: won't be using this method || [!== -1 OR >= 0 will return same value]
if (friends.indexOf("Rashed") >= 0) {
    console.log("True: element exists!")
}


// Concat: add two or more arrays into one array
const oldFriendsAge = [27, 26, 28, 30, 31, 25];
const newFriendsAge = [16, 18, 17, 15, 20, 19];
const allFriendsAge = oldFriendsAge.concat(newFriendsAge);  // Concat/Combine these two arrays into one array
console.log(allFriendsAge);