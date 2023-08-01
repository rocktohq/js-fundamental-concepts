// ScoreList
var myScore     = 85;
var tomScore    = 66;
var janeScore   = 95;
var peterScore  = 125;
var johnScore   = -1;

// Conditions
var totalScore = myScore;   // Set the Score

if(totalScore >= 80 && totalScore <= 100) {
    resultMessage = "A Grade";
}
else if(totalScore >= 60) {
    resultMessage = "B Grade";
}
else if(totalScore >= 50) {
    resultMessage = "C Grade";
}
else if(totalScore >= 40) {
    resultMessage = "C Grade";
}
else if (totalScore <= 39 && totalScore >=0) {
    resultMessage = "F Grade";
}
else {
    resultMessage = "Error: Something went wrong!";
}

// Print the Message
console.log(resultMessage);