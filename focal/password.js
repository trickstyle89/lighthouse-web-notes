const [node, script, string] = process.argv;

function password(string) {
  let letterArray = string.split('');
  
  for (let i = 0; i < letterArray.length; i++) {
    switch (letterArray[i]) {
    case 'a':
      letterArray[i] = '4';
      break;
  
    case 'e':
      letterArray[i] = '3';
      break;
  
    case 'o':
      letterArray[i] = '0';
      break;
  
    case 'l':
      letterArray[i] = '1';
      break;
    }
  }
  
  return letterArray.join('');
}
  
console.log(password('abbracadabra'));

/* refactored and better to read.

function password(string) {
    return string
    .replace(/a/g, '4')
    .replace(/a/g, '3')
    .replace(/a/g, '0')
    .replace(/a/g, '1')
   }
   
   console.log(password(string));

*/