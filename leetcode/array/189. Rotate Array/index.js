/*
Given an array, rotate the array to the right by k steps, where k is non-negative.

Example 1:
  Input: [1,2,3,4,5,6,7] and k = 3
  Output: [5,6,7,1,2,3,4]
  Explanation:
  rotate 1 steps to the right: [7,1,2,3,4,5,6]
  rotate 2 steps to the right: [6,7,1,2,3,4,5]
  rotate 3 steps to the right: [5,6,7,1,2,3,4]

Example 2:
  Input: [-1,-100,3,99] and k = 2
  Output: [3,99,-1,-100]
  Explanation:
  rotate 1 steps to the right: [99,-1,-100,3]
  rotate 2 steps to the right: [3,99,-1,-100]

Note:
  Try to come up as many solutions as you can, there are at least 3 different ways to solve this problem.
  Could you do it in-place with O(1) extra space?

 */

// Time O(N ^ 2)
// Space O(1)
const rotate = (nums, k) => {
  if (k === 0) return nums;
  while (k > 0) {
    let num = nums.pop();
    nums.unshift(num);
    k--;
  }
  return nums;
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const rotate2 = (nums, k) => {
  if (k === 0) {
    return nums;
  }

  if (k > nums.length) {
    k %= nums.length;
  }

  let rotatedSlice = nums.slice(0, nums.length - k);
  nums.splice(0, nums.length - k);
  nums.splice(nums.length, 0, ...rotatedSlice);
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const rotete3 = (nums, k) => {
  if (k === 0) {
    return nums;
  }

  let a = nums.slice(0, nums.length - k);
  let b = nums.slice(nums.length - k);
  let c = [...b, ...a];

  for (let i = 0; i < c.length; i++) {
    nums[i] = c[i];
  }
};
