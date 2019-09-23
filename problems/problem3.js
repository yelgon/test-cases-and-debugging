let verifyEquals = require('./verify-equals.js');

// we need 7 test cases. I've provided 2.
let inputs = [[2, 4], [-3, 3]];

let outputs = [6, 0];

/*
  This function expects an array of 2 numbers as input (e.g. [1,2])
  Make this function return the sum of the two numbers that are passed to it.
  If anything other than an array with 2 numbers is passed, return undefined.
  You can use the typeof function to check the type of each element (e.g. typeof 3 returns 'number')
*/
function f(input) {
  if (input.length !== 2 || typeof input[0] !== 'number' || typeof input[1] !== 'number') return undefined;
  return input[0] + input[1];
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
runTest(5);
runTest(6);
console.log('All tests passed for ' + __filename);
