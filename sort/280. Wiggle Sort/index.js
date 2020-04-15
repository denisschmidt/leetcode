/*

Given an unsorted array nums, reorder it in-place such that nums[0] <= nums[1] >= nums[2] <= nums[3]....

Example:
  Input: nums = [3,5,2,1,6,4]
  Output: One possible answer is [3,5,1,6,2,4]

*/

// Time O(N)
// Space O(1)
const wiggleSort = nums => {
  let n = nums.length;

  for (let i = 0; i < n; i++) {
    if (i % 2 != 0) {
      if (nums[i] < nums[i + 1]) {
        swap(nums, i, i + 1);
      }
    } else {
      if (nums[i] > nums[i + 1]) {
        swap(nums, i, i + 1);
      }
    }
  }
};

function swap(nums, i, j) {
  return ([nums[i], nums[j]] = [nums[j], nums[i]]);
}
