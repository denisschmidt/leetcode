/*
Given an unsorted array nums, reorder it such that nums[0] < nums[1] > nums[2] < nums[3]....

Example 1:

Input: nums = [1, 5, 1, 1, 6, 4]
Output: One possible answer is [1, 4, 1, 5, 1, 6].
Example 2:

Input: nums = [1, 3, 2, 2, 3, 1]
Output: One possible answer is [2, 3, 1, 3, 1, 2].
Note:
You may assume all input has valid answer.

Follow Up:
Can you do it in O(n) time and/or in-place with O(1) extra space?


 */

// Sort and then write the smaller half of the numbers on the even indexes
// and the larger half of the numbers on the odd indexes, both from the back.

// Big nums go to 1, 3, 5, 7 but small to to 0, 2, 4, 6

// Time O(NlogN)
// Space O(N)

var wiggleSort = function(nums) {
  const size = nums.length;
  const sorted = nums.slice().sort((a, b) => a - b);
  let mid = Math.floor((size - 1) / 2);

  for (let i = 0, j = size - 1; i < size; i++) {
    if (i % 2 === 0) {
      nums[i] = sorted[mid];
      mid--;
    } else {
      nums[i] = sorted[j];
      j--;
    }
  }
};

wiggleSort([1, 3, 2, 2, 3, 1]);
