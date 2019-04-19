function f(str) {
  const charArr = str.split('');
  let res = '';
  for (let i = 0; i < charArr.length; i++) {
    if (i % 40 === 0) {
      res += '\n';
      if (charArr[i] !== ' ') {
        res += charArr[i];
      }
    } else {
      res += charArr[i];
    }
  }
}
