const [node, script, string] = process.argv;

function reverse(string) {
  let finalArray = [];
  let strArray = string.split('');

  for (let i = strArray.length - 1; i >= 0; i-- ) {
    finalArray.push(strArray[i]);
  }
  console.log(finalArray.join(''));
};

reverse(string);