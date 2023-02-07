var input = process.argv.slice(2);

function reverse(input) {

if (input !== null || input.length > 0) {
  return input.toString().split('').reverse().join('');
}
return 'Invalid input';

};

console.log(reverse(input))