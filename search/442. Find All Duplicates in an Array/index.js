/*

Given an array of integers, 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

Find all the elements that appear twice in this array.

Could you do it without extra space and in O(n) runtime?

Example:
  Input: [4,3,2,7,8,2,3,1]
  Output: [2,3]

*/

// Time O(N)
// Space O(1)
const findDuplicates = nums => {
  let res = [];

  for (let i = 0; i < nums.length; i++) {
    let index = Math.abs(nums[i]) - 1;

    if (nums[index] < 0) {
      res.push(Math.abs(nums[i]));
    } else {
      nums[index] = nums[index] * -1;
    }
  }
  return res;
};
