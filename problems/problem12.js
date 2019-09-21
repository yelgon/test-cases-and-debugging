let verifyEquals = require('./verify-equals.js');

// we need 5 test cases.
let inputs = [[[0, 1, 2, 3], [1, 3, 4, 5]], [[1, 2, 3], [1, 2, 3]], [2, 3]];

let outputs = [[0, 2, 4, 5], [], undefined];

/*
Make this function return the elements that are unique to array1 and array2.
An element is unique if it only appears once.
If there are no unique elements return an empty array.
If the inputs are anything other than arrays, return undefined. 
For example:

uniqueElements([[0,1,2,3], [1,3,4,5]]); // [0,2,4,5]
uniqueElements([[1,2,3], [3,2,1]]); // []
uniqueElements(2); // undefined, not an array

HINTS: 
   - Use a for loop inside another for loop
   - You will need to run your logic 2 times
    - Once to get the unique elements in the first array
    - A second time to get the unique elements in the second array
*/
function getUniqueElements(arr1, arr2) {
  const uniqueElements = [];
  for (let i = 0; i < arr1.length; i++) {
    const curr = arr1[i];
    let isUnique = true;
    for (let j = 0; j < arr2.length; j++) {
      const other = arr2[j];
      if (curr === other) {
        isUnique = false;
        break;
      }
    }
    if (isUnique) uniqueElements.push(curr);
  }
  return uniqueElements;
}

function f(input) {
  const arr1 = input[0];
  const arr2 = input[1];
  return getUniqueElements(arr1, arr2).concat(getUniqueElements(arr2, arr1));
}

//This function runs a test. You do not need to change any code under here
function runTest(i) {
  if (i >= inputs.length) throw new Error('You do not have enough test cases');
  console.log('inputs', inputs[i]);
  let expected = outputs[i];
  console.log(expected);
  let actual = f(inputs[i]);
  console.log(actual);
  verifyEquals(expected, actual);
}

runTest(0);
runTest(1);
runTest(2);
runTest(3);
runTest(4);

console.log('All tests passed for ' + __filename);
