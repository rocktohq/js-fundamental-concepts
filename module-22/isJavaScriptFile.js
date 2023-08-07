/*
# Problem 2:
*/



function isJavaScriptFile(fileName) {
    if (typeof fileName !== "string") {
        return "Error: Please input a valid filename";
    }

    if (fileName.toLowerCase().endsWith(".js") === true) {
        return true;
    } else {
        return false;
    }
}

const result = isJavaScriptFile("jsFile.JS");
console.log(result);