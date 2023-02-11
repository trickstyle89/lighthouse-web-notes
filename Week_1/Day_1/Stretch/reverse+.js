const [node, script, ...args] = process.argv;

function reverse(string) {
  let finalArray = [];
  let strArray = string.split('');

  for (let i = strArray.length - 1; i >= 0; i--) {
    finalArray.push(strArray[i]);
  }
  return finalArray.join('');
}

const reversedWords = args.map(arg => reverse(arg));
console.log(reversedWords.join('\n'));