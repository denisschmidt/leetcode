/*
Given an unsorted array of integers, find the number of longest increasing subsequence.

Example 1:
  Input: [1,3,5,4,7]
  Output: 2
  Explanation: The two longest increasing subsequence are [1, 3, 4, 7] and [1, 3, 5, 7].

Example 2:
  Input: [2,2,2,2,2]
  Output: 5
  Explanation: The length of longest continuous increasing subsequence is 1, and there are 5 subsequences' length is 1, so output 5.

Note: Length of the given array will be not exceed 2000 and the answer is guaranteed to be fit in 32-bit signed int.

 */

// Complexity Analysis
//
// Time Complexity: O(N^2)
// where N is the length of nums. There are two for-loops and the work inside is O(1).
//
// Space Complexity: O(N), the space used by lengths and counts.

/**
 * @param {number[]} nums
 * @return {number}
 */
const findNumberOfLIS = function(nums) {
  let len = [],
    cnt = [],
    maxLen = 0,
    res = 0;
  for (let i = 0; i < nums.length; i++) {
    len[i] = 1;
    cnt[i] = 1;
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        if (len[i] === len[j] + 1) {
          cnt[i] += cnt[j];
        }
        if (len[j] + 1 > len[i]) {
          len[i] = len[j] + 1;
          cnt[i] = cnt[j];
        }
      }
    }
    if (maxLen === len[i]) {
      res += cnt[i];
    }
    if (maxLen < len[i]) {
      maxLen = len[i];
      res = cnt[i];
    }
  }
  return res;
};

const res = findNumberOfLIS([1, 2, 4, 3, 5, 4, 7, 2]); // 3
console.log('---', res);