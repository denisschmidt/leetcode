/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  if (nums[0] < nums[nums.length - 1]) {
    return nums[0];
  }

  let INF = Number.MAX_VALUE;
  let ans = INF;
  let index = find(0, nums.length - 1);

  return index;

  function find(lo, hi) {
    if (lo <= hi) {
      let mid = lo + Math.floor((hi - lo) / 2);

      if (nums[mid] <= nums[nums.length - 1]) {
        ans = Math.min(ans, nums[mid]);
        return find(lo, mid - 1);
      } else {
        return find(mid + 1, hi);
      }
    }
    return -1;
  }
};

findMin([3, 3, 3, 3, 3, 1, 3, 3]);
