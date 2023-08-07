/*
 * Problem 5: Print personal details
 * 
 */

function printDetails(personObj) {
    if (typeof personObj !== "object") {
        return "Error: Please provide an object!";
    } else {
        const name = personObj.name || "nai";
        const age = personObj.age || "nai";
        const email = personObj.email || "nai";
        const bou = personObj.bou || "nai";

        const details = "Amar nam " + name + ". Amar boyos " + age + ". Amar email " + email + ". Amar bou " + bou + ".";
        return details;
    }
}

const person = {
    name: "Saidul Mursalin",
    age: 101,
    email: "itzmonir@gmail.com",
};

const personDetails = printDetails(person);
console.log(personDetails);