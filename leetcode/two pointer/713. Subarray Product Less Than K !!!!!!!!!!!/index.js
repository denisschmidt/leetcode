/*

Your are given an array of positive integers nums.

Count and print the number of (contiguous) subarrays where the product of all the elements in the subarray is less than k.

Example 1:
  Input: nums = [10, 5, 2, 6], k = 100
  Output: 8

Explanation: The 8 subarrays that have product less than 100 are: [10], [5], [2], [6], [10, 5], [5, 2], [2, 6], [5, 2, 6].
Note that [10, 5, 2] is not included as the product of 100 is not strictly less than k.

Note:
  0 < nums.length <= 50000.
  0 < nums[i] < 1000.
  0 <= k < 10^6.

 */
// Complexity Analysis
//
// Time Complexity: O(N), where N is the length of nums. left can only be incremented at most N times.
//
// Space Complexity: O(1), the space used by prod, left, and ans.

// Two pointers
// Prefix sum

const numSubarrayProductLessThanK = function (nums, k) {
  let product = nums[0];
  let end = 1;
  let start = 0;
  let count = nums[0] < k ? 1 : 0;

  while (end < nums.length) {
    product *= nums[end];

    while (product >= k && start <= end) {
      product = product / nums[start];
      start++;
    }

    count += end - start + 1;
    end++;
  }

  return count;
};

let nums = [1, 1, 1];
let k = 1;
const res = numSubarrayProductLessThanK(nums, k);
console.log('---', res);
