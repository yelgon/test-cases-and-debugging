function f(str) {
  const words = str.split(' ');
  let longest = '';
  for (let i = 0; i < words.length; i++) {
    if (longest.length <= words[i].length) longest = words[i];
  }
  return longest;
}

// Shorter

function g(str) {
  return str.split(' ').reduce((acc, curr) => (acc.length < curr.length ? curr : acc), '');
}
