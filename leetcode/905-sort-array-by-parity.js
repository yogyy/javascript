/**
 * @param {number[]} nums
 * @return {number[]}
 */


var sortArrayByParity = function (nums) {
  let i = 0,
    j = nums.length - 1;

  while (i < j) {
    while (i < j && nums[i] % 2 === 0) i++;
    while (i < j && nums[j] % 2 === 1) j--;
    [nums[i], nums[j]] = [nums[j], nums[i]];
  }
  return nums;
};


// var sortArrayByParity = function (nums) {
//   let arr = [];
//   for (const num of nums) {
//     if (num % 2 === 0) {
//       arr.unshift(num);
//     } else {
//       arr.push(num);
//     }
//   }
//   return arr;
// };
