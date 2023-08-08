/*
# Problem 6: Check if the image extension is valid or not
*/



function isJavaScriptFile(imageName, extensionList) {
    if (typeof imageName !== "string") {
        return "Error: Please input a valid image name!";
    } else if (!Array.isArray(extensionList)) {
        return "Error: Please provide an array of extensions!";
    } else {
        // Block for checking the extension
        for (let extension of extensionList) {
            if (imageName.toLowerCase().endsWith(extension.toLowerCase())) {
                return true;
            }
        }
        return false;
    }
}


const imageName = "favicon.webp";
const extensionList = [".jpg", ".jpeg", ".png", ".GIF", ".ico", "svg",".Webp", ".heic"];
const result = isJavaScriptFile(imageName, extensionList);
console.log(result);