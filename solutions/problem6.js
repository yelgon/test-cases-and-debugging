function f(arr) {
  const operation = arr[0];
  switch (operation) {
    case 'add':
      return arr.slice(1).reduce((prev, next) => prev + next);
    case 'sub':
      return arr.slice(1).reduce((prev, next) => prev - next);
    case 'mult':
      return arr.slice(1).reduce((prev, next) => prev * next);
    default:
      return undefined;
  }
}
