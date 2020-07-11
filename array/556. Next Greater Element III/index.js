/*

Given a positive 32-bit integer n, you need to find the smallest 32-bit integer which has exactly the same digits existing in the integer n and is greater in value than n. 

If no such positive 32-bit integer exists, you need to return -1.

Example 1:
  Input: 12
  Output: 21
  

Example 2:
  Input: 21
  Output: -1

*/

// Find next permutation
// Time O(N)
// Space O(N)
const nextGreaterElement = num => {
  let max32BitInt = 2147483647;
  let nums = num.toString().split('');
  let n = nums.length;
  let i = n - 2;

  while (i >= 0 && nums[i] >= nums[i + 1]) i--;

  if (i < 0) {
    return -1;
  }

  let j = n - 1;

  while (j >= 0 && nums[i] >= nums[j]) j--;

  swap(nums, i, j);

  j = n - 1;
  i++;

  while (i <= j) {
    swap(nums, i, j);
    i++;
    j--;
  }

  let res = parseInt(nums.join(''));

  return res > max32BitInt ? -1 : res;

  function swap(nums, i, j) {
    return ([nums[i], nums[j]] = [nums[j], nums[i]]);
  }
};
