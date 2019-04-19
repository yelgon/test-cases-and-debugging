function f(arr) {
  const str = arr[0];
  const count = arr[1];
  if (typeof str !== 'string' || typeof count !== 'number') return undefined;
  if (count <= 0) return '';
  let res = '';
  for (let i = 0; i < count; i++) {
    res = res + str;
  }
  return res;
}
