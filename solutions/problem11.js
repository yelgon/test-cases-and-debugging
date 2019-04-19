function f(input) {
  if (input.length === 0) return 0;
  return input.reduce((acc, curr) => (typeof curr === 'number' ? acc + curr : acc), 0);
}
