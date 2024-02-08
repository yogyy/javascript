/**
 * @param { number } x
 * @param { number } n
 * @returns Array<number>
 */
function countBy(x, n) {
  let z = [];
  for (let i = 1; i <= n; i++) {
    z.push(i * x);
  }
  return z;
}
