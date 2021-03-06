/*
Given an array A of integers, return the number of (contiguous, non-empty) subarrays that have a sum divisible by K.

Example 1:
  Input: A = [4,5,0,-2,-3,1], K = 5
  Output: 7

Explanation: There are 7 subarrays with a sum divisible by K = 5:
[4, 5, 0, -2, -3, 1], [5], [5, 0], [5, 0, -2, -3], [0], [0, -2, -3], [-2, -3]

 */

// The best prove of concept
// https://leetcode.com/problems/subarray-sums-divisible-by-k/discuss/310767/(Python)-Concise-Explanation-and-Proof

// About the problems - sum of contiguous subarray , prefix sum is a common technique.

// Another thing is very important =>

// if sum[0, i] % K == sum[0, j] % K, => sum[i + 1, j] is divisible by by K. !!!!!!!!!!!!

// So for current index j, we need to find out how many index i (i < j) exit that has the same mod of K.

// Time Complexity: O(N)
// Space Complexity: O(K)
const subarraysDivByK = function (nums, target) {
  const map = new Map();
  let sum = 0;
  let ans = 0;
  map.set(0, 1);

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    let diff = sum % target;

    if (!map.has(diff)) {
      // don't increment counter
      map.set(diff, 1);
    } else {
      ans += map.get(diff);
      map.set(diff, map.get(diff) + 1);
    }
  }

  return ans;
};
