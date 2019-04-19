function f(str) {
  const words = str.split(' ');
  let capitalizedWords = [];
  for (let i = 0; i < words.length; i++) {
    const capitalizedWord = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
    capitalizedWords.push(capitalizedWord);
  }
  return capitalizedWords.join(' ');
}

// Shorter

function g(str) {
  const capitalize = (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  return str
    .split(' ')
    .map(capitalize)
    .join(' ');
}
