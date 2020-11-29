// Time O(N)
// Space O(1)
const maxSubArray = nums => {
  let n = nums.length;
  let sum = nums[0];
  let max = sum;

  for (let i = 1; i < n; i++) {
    sum = Math.max(sum + nums[i], nums[i]);
    max = Math.max(max, sum);
  }

  return max;
};
