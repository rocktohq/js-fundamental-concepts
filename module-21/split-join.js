// Split(indentifier/spliter)
const lyrics = "Tobu ei deyaler shorir e Joto chera rong, dhuye jawya manush, Peshadar protihingsha tomar chetonar Joto udvhashito alor rong, Akash er moto okosshat neel neele dube thaka tomar prio kono mukh, Tar chokher kachakachi eshe keno poth bhenge";

const lyricsSplit = lyrics.split(",");
// console.log(charSplit);
const charSplit = lyrics.split("");
// console.log(lyricsSplit);


// Slice(fromIndex, toIndex)
const partialSlice = lyrics.slice(5, 12);
// console.log(partialSlice);


// Substring(fromIndex, toIndex) [Same as Slice()]
const partialString = lyrics.substring(5, 12);
// console.log(partialString);


// at(index) [Positive = Start || Negative = End]
const indexAt = lyrics.at(-6);
// console.log(indexAt);


// Join(Separator)
let lines = ["Amar", "Sonar", "Bangla", "Ami", "Tomay", "Valobashi"];
const newLyrics = lines.join(" ");
console.log(newLyrics);