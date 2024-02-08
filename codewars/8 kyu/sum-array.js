/**
 * @param { Array<number> } numbers
 * @link https://www.codewars.com/kata/53dc54212259ed3d4f00071c/train/javascript
 */
function sum(numbers) {
  if (numbers.length === 0) return 0;
  return numbers.reduce((total, curr) => total + curr);
}
