const [node, script, string] = process.argv;

function pigLatin(string) {
    let resultsArray = [];
    let stringArray = string.split(' ');
    console.log(stringArray);
    
for (let i = 0; i < stringArray.length; i++) {
    let word = stringArray[i];
    console.log(stringArray);
    let newWord = word.slice(1)+word[0]+'ay';
    resultsArray.push(newWord);
    console.log(newWord);
}
console.assert(stringArray.length === resultsArray.length)
console.log(stringArray.length);
console.log(resultsArray.length);
return resultsArray.join(' ').toString();
}
console.log(pigLatin(string));