let verifyEquals = require('./verify-equals.js');

// we need 5 test cases.
let inputs = [];

let outputs = [];

/*
  Make this function return the sum of all the numbers in the input array.
  If any element in the array is not a number, skip it. If the array is empty, return zero.
*/
function f(input) {
  if (input.length === 0) return 0;
  return input.reduce((acc, curr) => (typeof curr === 'number' ? acc + curr : acc), 0);
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
