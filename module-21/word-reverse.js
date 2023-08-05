function wordReverse(str){
    const strSplit = str.split(" ");
    let rvWords = [];
    for (let i = strSplit.length - 1; i >= 0; i--) {
        const element = strSplit[i];
        rvWords.push(element);
    }
    const rvWordsStr = rvWords.join(" ");
    return rvWordsStr;
}


const str = "I will a full stack web developer";
const rvWords = wordReverse(str);
console.log(rvWords);