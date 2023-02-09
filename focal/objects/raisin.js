// const raisinAlarm = function(cookie) {

const raisinAlarm = cookie => cookie.find(element => element ===  "🍇") ? 'Raisin alert!' : "all good";

console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));

/*
console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
console.log(raisinAlarm(["🍫", "🍫", "🍫"]));

Raisin alert!
Raisin alert!
All good!

const chocolateBar = '\u{1F36B}';
const grapes = '\u{1F347}';
*/