const lyrics = "Amar sonar bangla. Ami tumay valobashi.";


// includes()
const searchString = "Bangla";
const lyricsLower = lyrics.toLowerCase();
const doesExists = lyricsLower.includes(searchString.toLowerCase());

console.log(doesExists);

// indexOf()
const indexOfString = lyricsLower.indexOf(searchString.toLowerCase());
console.log(indexOfString);

// endWith()
const endWithString = lyricsLower.endsWith('.');
console.log(endWithString);

const fileName = "myCV.pdf";
const checkFileType = fileName.endsWith(".pdf");
console.log("File type:",checkFileType);

// startWith()
const startWithString = lyricsLower.startsWith("Amar".toLowerCase());
console.log(startWithString);