/*
Given an array of n positive integers and a positive integer s, find the minimal length of a contiguous subarray of which the sum ≥ s.
If there isn't one, return 0 instead.

Example:

Input: s = 7, nums = [2,3,1,2,4,3]
Output: 2
Explanation: the subarray [4,3] has the minimal length under the problem constraint.

Follow up:
If you have figured out the O(n) solution, try coding another solution of which the time complexity is O(n log n).

 */

//Complexity analysis
//
// Time complexity: O(n). Single iteration of O(n).
// Each element can be visited atmost twice, once by the right pointer(i) and (atmost)once by the left pointer.
// Space complexity: O(1) extra space. Only constant space required for left, sum, ans and i.

// Two pointers
const minSubArrayLen = function(target, nums) {
  const size = nums.length;
  let sum = 0;
  let ans = Number.MAX_VALUE;
  let left = 0;
  for (let right = 0; right < size; right++) {
    sum += nums[right];

    while (sum >= target) {
      ans = Math.min(ans, right + 1 - left);
      sum = sum - nums[left++];
    }
  }

  return ans === Number.MAX_VALUE ? 0 : ans;
};

const res = minSubArrayLen(1, [1, 4, 4]);
console.log('---', res);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//  Brute force

// Complexity Analysis
// Time complexity: O(n^3)

// For each element of array, we find all the subarrays starting from that index which is O(n^2)
// Time complexity to find the sum of each subarray is O(n).
// Thus, the total time complexity : O(n^2 * n) = O(n^3)
// Space complexity: O(1) extra space.

const minSubArrayLen2 = function(target, nums) {
  let ans = Number.MAX_VALUE;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      let sum = 0;
      for (let k = i; k <= j; k++) {
        sum += nums[k];
      }
      if (sum >= target) {
        ans = Math.min(ans, j - i + 1);
        break;
      }
    }
  }
  return ans === Number.MAX_VALUE ? 0 : ans;
};

const res2 = minSubArrayLen2(1, [1, 4, 4]);
console.log('---', res2);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Complexity analysis
//
// Time complexity: O(n^2)
// Time complexity to find all the subarrays is O(n^2)

// Sum of the subarrays is calculated in O(1) time.
// Thus, the total time complexity: O(n^2 * 1)
// Space complexity: O(n) extra space.
const minSubArrayLen3 = function(target, nums) {
  let sums = [];
  sums.push(nums[0]);
  let ans = Number.MAX_VALUE;

  for (let i = 1; i < nums.length; i++) {
    sums[i] += sums[i - 1] + nums[i];
  }

  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      let sum = sums[j] - sums[i] + nums[i]; // sums[j] - sums[i] as => sum i + 1 to j
      if (sum >= target) {
        ans = Math.min(ans, j - i + 1);
        break;
      }
    }
  }
  return ans === Number.MAX_VALUE ? 0 : ans;
};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
