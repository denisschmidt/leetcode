// Time O(N)
// Space O(1)
const rotate = (nums = [], k) => {
  k = k % nums.length;

  reverse(nums, 0, nums.length - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, nums.length - 1);

  function reverse(nums, start, end) {
    while (start < end) {
      [nums[start], nums[end]] = [nums[end], nums[start]];
      start++;
      end--;
    }
  }
};

// Time O(N)
// Space O(N)
const rotate_II = (nums = [], k) => {
  let d = nums.length - (k % nums.length);
  let removed = nums.splice(d);
  nums.unshift(...removed);
};
