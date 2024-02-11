const twoSum = function (nums, target) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
};

/**
 *
 * @param {Array<number>} arr
 * @param {number} target
 */
var twoSum = function (arr, target) {
  const map = {};
  for (let i = 0; i < arr.length; i++) {
    map[arr[i]] = i;
  }
  for (let i = 0; i < arr.length; i++) {
    let c = target - arr[i];
    if (map[c] && map[c] !== i) return [i, map[c]];
  }
};

/**
 * brute force
 * @param {Array<number>} arr
 * @param {number} target
 */
var twoSum = function (arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [i, j];
      }
    }
  }
};
