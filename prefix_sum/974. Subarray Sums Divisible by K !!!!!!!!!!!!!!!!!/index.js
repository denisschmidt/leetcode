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

// if sum[0, i] % K == sum[0, j] % K, sum[i + 1, j] is divisible by by K. !!!!!!!!!!!!

// Time Complexity: O(N)
// Space Complexity: O(K)
const subarraysDivByK = function(nums, target) {
  const map = new Map();
  let sum = 0;
  let ans = 0;
  map.set(0, 1);

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    let key = sum % target;

    if (!map.has(key)) {
      map.set(key, 1);
    } else {
      ans += map.get(key);
      map.set(key, map.get(key) + 1);
    }
  }

  return ans;
};

let nums = [4, 5, 0, -2, -3, 1];
let target = 5;

const res = subarraysDivByK(nums, target);
console.log('===', res);
