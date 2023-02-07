const [node, script, string] = process.argv;

function reverse(string) {
  let finalArray = [];
  let strArray = string.split('');

  for (let i = strArray.length - 1; i >= 0; i-- ) {
    finalArray.push(strArray[i]);
  }

  console.assert(finalArray.length === strArray.length, 'The length of the input string and the reversed string should be equal');
  console.log(finalArray.join(''));
};

reverse(string);