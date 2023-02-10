const findWaldo = function(names, actionWhenFound) {
  names.forEach(name => {
    if (name === 'Waldo') {
      //pass the argument here as it is the only way for second function to get parameters.
      actionWhenFound(names); 
    }
  });
  return false;
};

const actionWhenFound = function(names) {
  let results = names.findIndex(element => element === 'Waldo')
  console.log(results);
};

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);


