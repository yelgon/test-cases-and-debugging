let verifyEquals = require('./verify-equals.js');

// we need 5 test cases.
let inputs = [];

let outputs = [];

/*
Make this function return the longest word in the input string. If the input string is empty then return an empty string.
If multiple words have the same length, return the last one that matches.

Example
  f("hey hello morning") returns "morning"

HINTS: 
   - You'll need to use the split string method
   - A for loop might be helpful
*/
function f(str) {
  const words = str.split(' ');
  let longest = '';
  for (let i = 0; i < words.length; i++) {
    if (longest.length <= words[i].length) longest = words[i];
  }
  return longest;
}


//This function runs a test. You do not need to change any code under here
function runTest(i) {
  if (i >= inputs.length) throw new Error('You do not have enough test cases');
  let expected = outputs[i];
  let actual = f(inputs[i]);
  verifyEquals(expected, actual);
}

runTest(0);
runTest(1);
runTest(2);
runTest(3);
runTest(4);

console.log('All tests passed for ' + __filename);
