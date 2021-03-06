/*
Given an array with n integers, your task is to check if it could become non-decreasing by modifying at most 1 element.

We define an array is non-decreasing if array[i] <= array[i + 1] holds for every i (1 <= i < n).

Example 1:
  Input: [4,2,3]
  Output: True
  Explanation: You could modify the first 4 to 1 to get a non-decreasing array.

Example 2:
  Input: [4,2,1]
  Output: False
  Explanation: You can't get a non-decreasing array by modify at most one element.

Note: The n belongs to [1, 10,000].

 */

// Time O(N)
// Space O(1)
const checkPossibility = nums => {
  if (nums.length === 0) return false;

  let index = -1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] > nums[i]) {
      if (index !== -1) return false;
      index = i;
    }
  }

  return index === -1 || index === 1 || index === nums.length - 1 || nums[index - 2] <= nums[index] || nums[index - 1] <= nums[index + 1];
};

// Time O(N)
// Space O(1)
const checkPossibility_II = nums => {
  let n = nums.length;
  let cnt = 0;

  for (let i = 1; i < n; i++) {
    if (nums[i - 1] > nums[i]) {
      if (i - 2 < 0 || nums[i] >= nums[i - 2]) {
        nums[i - 1] = nums[i];
      } else {
        nums[i] = nums[i - 1];
      }
      cnt++;
    }
  }

  return cnt <= 1;
};
