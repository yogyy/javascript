/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = function(nums) {
  const res = [], n = nums.length
  nums.sort((a, b) => a - b)
  for(let i = 0; i < n - 2; i++) {
    let l = i + 1, r = n - 1, target = -nums[i]
    if(i === 0 || (i > 0 && nums[i] !== nums[i - 1])) {
      while(l < r) {
        if(nums[l] + nums[r] === target) {
          res.push([nums[i], nums[l], nums[r]])
          while(l < n - 1 && nums[l] === nums[l + 1]) l++
          while(r > 0 && nums[r] === nums[r - 1]) r--
          r--
          l++
        } else if(nums[l] + nums[r] > target) {
          r--
        } else l++
      }
    }
  }  

  return res
};
