// Time O(LogN)
// Space O(1)
const findMin = function (nums) {
  if (nums.length == 2) {
    return Math.min(nums[0], nums[1]);
  }

  let n = nums.length;
  let lo = 0;
  let hi = n - 1;

  // already sorted
  if (nums[lo] < nums[hi]) {
    return nums[lo];
  }

  while (lo < hi) {
    let mid = lo + Math.floor((hi - lo) / 2);
    if (nums[mid] >= nums[hi]) {
      lo = mid + 1;
    } else {
      hi = mid;
    }
  }

  return nums[lo];
};
