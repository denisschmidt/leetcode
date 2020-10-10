/*

Given an integer array arr and an integer k, modify the array by repeating it k times.

For example, if arr = [1, 2] and k = 3 then the modified array will be [1, 2, 1, 2, 1, 2].

Return the maximum sub-array sum in the modified array. Note that the length of the sub-array can be 0 and its sum in that case is 0.

As the answer can be very large, return the answer modulo 10^9 + 7.

Example 1:
  Input: arr = [1,2], k = 3
  Output: 9

Example 2:
  Input: arr = [1,-2,1], k = 5
  Output: 2

Example 3:
  Input: arr = [-1,-2], k = 7
  Output: 0
  

Constraints:
  1 <= arr.length <= 10^5
  1 <= k <= 10^5
  -10^4 <= arr[i] <= 10^4

*/

// Time O(N)
// Space O(N)
const kConcatenationMaxSum = (nums, k) => {
  let mod = 1e9 + 7;
  let sumK1 = kadane(nums);

  if (k == 1) {
    return sumK1;
  }

  let total = nums.reduce((acc, x) => acc + x, 0);
  let prefix = prefixSum(nums);
  let suffix = suffixSum(nums);

  if (total > 0) {
    return Math.max((((total * (k - 2)) % mod) + (suffix % mod) + (prefix % mod)) % mod, sumK1 % mod);
  }

  return Math.max(((prefix % mod) + (suffix % mod)) % mod, sumK1 % mod);

  function prefixSum(nums) {
    let sum = 0;
    let max = -Number.MAX_VALUE;

    for (let i = 0; i < nums.length; i++) {
      sum = (sum + nums[i]) % mod;
      max = Math.max(max, sum);
    }
    return max;
  }

  function suffixSum(nums) {
    let sum = 0;
    let max = -Number.MAX_VALUE;
    for (let i = nums.length - 1; i >= 0; i--) {
      sum = (sum + nums[i]) % mod;
      max = Math.max(max, sum);
    }
    return max;
  }

  function kadane(nums) {
    let sum = nums[0];
    let max = nums[0];
    for (let i = 1; i < nums.length; i++) {
      sum = Math.max((sum + nums[i]) % mod, nums[i]);
      max = Math.max(max, sum);
    }
    return max < 0 ? 0 : max;
  }
};
