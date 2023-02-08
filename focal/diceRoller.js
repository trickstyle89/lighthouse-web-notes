const [node, script, number] = process.argv;

function getRandomDice() {
  return Math.floor(Math.random() * 6) + 1;
}

function diceRoller(number) {
  let resultArray = [];
  let x = 1;
    
  while (x <= number) {
    resultArray.push(getRandomDice());
    x++;
  }
  return resultArray.join(' ');
}

console.log(diceRoller(number));