/*

Given an array of integers nums and an integer limit, 
return the size of the longest non-empty subarray such that the absolute difference between
any two elements of this subarray is less than or equal to limit.

Example 1:
  Input: nums = [8,2,4,7], limit = 4
  Output: 2 
  Explanation: All subarrays are: 
  [8] with maximum absolute diff |8-8| = 0 <= 4.
  [8,2] with maximum absolute diff |8-2| = 6 > 4. 
  [8,2,4] with maximum absolute diff |8-2| = 6 > 4.
  [8,2,4,7] with maximum absolute diff |8-2| = 6 > 4.
  [2] with maximum absolute diff |2-2| = 0 <= 4.
  [2,4] with maximum absolute diff |2-4| = 2 <= 4.
  [2,4,7] with maximum absolute diff |2-7| = 5 > 4.
  [4] with maximum absolute diff |4-4| = 0 <= 4.
  [4,7] with maximum absolute diff |4-7| = 3 <= 4.
  [7] with maximum absolute diff |7-7| = 0 <= 4. 
  Therefore, the size of the longest subarray is 2.

Example 2:
  Input: nums = [10,1,2,4,7,2], limit = 5
  Output: 4 
  Explanation: The subarray [2,4,7,2] is the longest since the maximum absolute diff is |2-7| = 5 <= 5.

Example 3:
  Input: nums = [4,2,2,2,4,4,2,2], limit = 0
  Output: 3
  

Constraints:
  1 <= nums.length <= 10^5
  1 <= nums[i] <= 10^9
  0 <= limit <= 10^9

*/

// Time O(N)
// Space O(N)
const longestSubarray = (nums, limit) => {
  let start = 0;
  let end = 0;
  let n = nums.length;
  let maxLen = 1;
  let maxDeque = []; // [8,5,3]
  let minDeque = []; // [3,5,8]

  while (end < n) {
    // update maxDeque with new right pointer
    while (maxDeque.length && last(maxDeque) < nums[end]) {
      maxDeque.pop();
    }

    // update minDeque with new right pointer
    while (minDeque.length && last(minDeque) > nums[end]) {
      minDeque.pop();
    }

    minDeque.push(nums[end]);
    maxDeque.push(nums[end]);

    // shrink left pointer if exceed limit
    while (maxDeque[0] - minDeque[0] > limit) {
      if (maxDeque[0] == nums[start]) maxDeque.shift();
      if (minDeque[0] == nums[start]) minDeque.shift();
      start++;
    }

    if (maxLen < end - start + 1) {
      maxLen = end - start + 1;
    }

    end++;
  }

  return maxLen;

  function last(x) {
    return x[x.length - 1];
  }
};

// Time O(N^2
// Space O(1)
const longestSubarray_II = (nums, limit) => {
  let start = 0;
  let end = 0;
  let n = nums.length;
  let maxLen = 0;
  let min = nums[0];
  let max = nums[0];

  while (end < n) {
    while (nums[end] - min > limit || max - nums[end] > limit) {
      if (nums[start] == min || nums[start] == max) {
        min = Number.MAX_VALUE;
        max = 0;

        for (let i = start + 1; i <= end; i++) {
          min = Math.min(min, nums[i]);
          max = Math.max(max, nums[i]);
        }
      }

      start++;
    }

    end++;

    min = Math.min(min, nums[end]);
    max = Math.max(max, nums[end]);

    if (maxLen < end - start) {
      maxLen = end - start;
    }
  }

  return maxLen;
};
