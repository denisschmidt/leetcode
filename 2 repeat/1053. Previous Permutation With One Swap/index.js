/*
Given an array A of positive integers (not necessarily distinct), 
return the lexicographically largest permutation that is smaller than A, that can be made with one swap 
(A swap exchanges the positions of two numbers A[i] and A[j]).  

If it cannot be done, then return the same array.

Example 1:
  Input: [3,2,1]
  Output: [3,1,2]
  Explanation: Swapping 2 and 1.

Example 2:
  Input: [1,1,5]
  Output: [1,1,5]
  Explanation: This is already the smallest permutation.

Example 3:
  Input: [1,9,4,6,7]
  Output: [1,7,4,6,9]
  Explanation: Swapping 9 and 7.

Example 4:
  Input: [3,1,1,3]
  Output: [1,3,1,3]
  Explanation: Swapping 1 and 3.
 

Note:

1 <= A.length <= 10000
1 <= A[i] <= 10000

 */

// Time O(N)
// Space O(1)
const prevPermOpt1 = function (nums) {
  const n = nums.length;
  let i = n - 2;

  // получаем первую цифру которую мы можем поменять местами
  while (i >= 0 && nums[i] <= nums[i + 1]) i--;

  if (i < 0) return nums;

  let j = n - 1;

  while (nums[i] <= nums[j]) j--;

  while (nums[j - 1] === nums[j]) j--;

  swap(nums, i, j);

  return nums;
};

function swap(nums, i, j) {
  return ([nums[i], nums[j]] = [nums[j], nums[i]]);
}
