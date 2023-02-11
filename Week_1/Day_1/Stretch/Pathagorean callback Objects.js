const input = [{ x: 3, y: 4 }, { x: 12, y: 5 }, { x: 8, y: 15 }];

const easyPath = (input) => {
  // need to draw out the values of the object
  // but only draws out the first set.
  let [x, y] = Object.values(input);
  //pathagorean equation.
  let z = Math.pow(x, 2) + Math.pow(y, 2);
  return Math.sqrt(z);
};

//callback and using .map() to run fuction.
const results = input.map(easyPath);

// square brackets to access different values of the object.
console.log(results[0]);
console.log(results[1]);
console.log(results[2]);