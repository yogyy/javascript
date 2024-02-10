/**
 * @param {string} n
 */
var countBits = function (n) {
  if (!n) return 0;
  return n.toString(2).match(/1/g).length;
};

var countBits = function (n) {
  if (!n) return 0;
  return n
    .toString(2)
    .split("")
    .reduce((sum, num) => sum + Number(num), 0);
};

// typescript
// export function countBits(n: number): number {
//   if (!n) return 0;
//   return n.toString(2).match(/1/g)?.length!;
// }
