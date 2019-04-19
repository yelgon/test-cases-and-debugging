function f(input) {
  if (input.length !== 2 || typeof input[0] !== 'number' || typeof input[1] !== 'number') return undefined;
  return input[0] + input[1];
}

// Generic solution (array of any length)

function g(input) {
  if (input.length < 2 || input.some((elm) => typeof elm !== 'number')) return undefined;
  return input.reduce((prev, next) => prev + next);
}
