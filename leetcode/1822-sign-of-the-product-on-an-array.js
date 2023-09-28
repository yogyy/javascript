/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function (nums) {
  let neg = 0;
  for (const num of nums) {
    if (num === 0) {
      return 0;
    } else if (num < 0) {
      neg++;
    }
  }
  return neg % 2 === 0 ? 1 : -1;
};

// var arraySign = function (nums, sign = false) {
//   return nums.reduce((a, c) => (a == 0 || c == 0 ? 0 : c < 0 ? a * -1 : a), 1);
// };

// var arraySign = function (nums, sign = false) {
//   if (nums.length === 0) return sign ? -1 : 1;

//   const el = nums.pop();
//   if (el === 0) return 0;

//   return arraySign(nums, el < 0 ? !sign : sign);
// };
