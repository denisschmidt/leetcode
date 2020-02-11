/*
Given an unsorted integer array, find the smallest missing positive integer.

Example 1:
  Input: [1, 2, 0]
  Output: 3

Example 2:
  Input: [3, 4, -1, 1]
  Output: 2

Example 3:
  Input: [7,8,9,11,12]
  Output: 1

 */

// Time O(N)
// Space O(N)
const firstMissingPositive = nums => {
  const set = new Set(nums);
  let i = 1;
  while (set.has(i)) {
    i++;
  }
  return i;
};

// Time O(N)
// Space O(1)
const firstMissingPositive_II = nums => {
  const size = nums.length;

  for (let i = 0; i < size; i++) {
    while (nums[i] > 0 && nums[i] <= size && nums[nums[i] - 1] !== nums[i]) {
      // swap
      let temp = nums[nums[i] - 1];
      nums[nums[i] - 1] = nums[i];
      nums[i] = temp;
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (i + 1 !== nums[i]) {
      return i + 1;
    }
  }

  return size + 1;
};
