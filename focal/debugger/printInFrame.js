// consistently missing 4 * on top and bottom rows.
// over counting the string adding extra space at the end.

const printInFrame = function(list) {
    list = list.split(' ');  //array of words
    const longest = longestStr(list).length;
    const border = repeat('*', longest+2); // cheeky fix by adding more asterix to top and bottom borders.
  
    // here is the creation of the top and bottom border.  Error here.
    console.log(border);
    for (const word of list) {
      console.log(`* ${word}${repeat(' ', longest - word.length - 1)}*`);  //testing
    }
    console.log(border);
  };
  
  // function that is looking at how many times to repeat the stars.
  const repeat = function(asterix, times) {
    let result = asterix; // placeholder for '*'
  
    for (let i = 0; i <= times; i++) {
      result += asterix; // strange.... way of labelling
    }
  
    return result;
  };
  // fixed here with if conditional to find the longest word.
  const longestStr = function(list) {
  
    let longest = list[0];  // assumes that the longest string (widest point of box) is [0] why?.
  
    for (const word of list) { //there is no conditional to determine what the longest string is.
      if (word.length >= longest.length) {
          longest = word;
      } ;   
    }
  
    return longest;
  };
  
  // Test driver code, do not modify
  printInFrame('May the force be with you');
  printInFrame('Here\'s Johnny!');
  printInFrame('Supercalifragalisticexpialadocious');
  printInFrame('Lost, like tears in the rain');