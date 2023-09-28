var findDifference = function (nums1, nums2) {
  nums1 = new Set();
  nums2 = new Set();

  for (const item of nums1) {
    if (nums2.has(item)) {
      nums1.delete(item);
      nums2.delete(item);
    }
  }
  return [Array.from(nums1), Array.from(nums2)];
};
