/*
Given an array of integers A, find the sum of min(B), where B ranges over every (contiguous) subarray of A.

Since the answer may be large, return the answer modulo 10^9 + 7.

Example 1:
  Input: [3,1,2,4]
  Output: 17
  Explanation: Subarrays are [3], [1], [2], [4], [3,1], [1,2], [2,4], [3,1,2], [1,2,4], [3,1,2,4].
  Minimums are 3, 1, 2, 4, 1, 1, 2, 1, 1, 1.  Sum is 17.


Note:
  1 <= A.length <= 30000
  1 <= A[i] <= 30000

 */

// Time O(N^3)
const sumSubarrayMins = nums => {
  let size = nums.length;
  let ans = 0;
  let min;
  let mod = Math.pow(10, 9) + 7;

  for (let len = 0; len < size; len++) {
    for (let i = 0; i < size - len; i++) {
      min = Number.MAX_VALUE;

      for (let j = i; j <= i + len; j++) {
        min = Math.min(min, nums[j]);
      }

      ans += min;
      ans = ans % mod;
    }
  }

  return ans;
};

const res = sumSubarrayMins([3, 1, 2, 4]);
console.log(res);
