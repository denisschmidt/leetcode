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

/**
 * @param {number[]} nums
 * @return {number}
 */
const firstMissingPositive = function(arr) {
  let ans = Number.MAX_VALUE;
  const nums = arr.sort((a, b) => a - b).filter(val => val > 0);
  if (!nums.includes(0)) nums.unshift(0);
  for (let i = 0; i < nums.length - 1; i++) {
    let diff = nums[i + 1] - nums[i];
    if (diff > 1) {
      ans = Math.min(ans, nums[i] + 1);
    }
  }
  return ans !== Number.MAX_VALUE ? ans : nums[nums.length - 1] + 1;
};

const res = firstMissingPositive([1, 2, 0]);
console.log('===', res);

// =====================================================================================================================

// use swap to put nums[i] to position i - 1, for example put 1 to position 0.
// using a while in case the new nums[i] is not i - 1, continue put it to right location.
// check nums[nums[i] - 1] != nums[i] in case they are same number falling to forever loop.
const firstMissingPositive2 = function(A) {
  // A[A[i] - 1] !== A[i] checks if index and value of element are in right position.
  // It's basically to deal with duplicates.
  for (let i = 0; i < A.length; i++) {
    while (A[i] > 0 && A[i] - 1 < A.length && A[i] - 1 !== i && A[A[i] - 1] !== A[i]) {
      // swap
      let j = A[i] - 1;
      let tmp = A[i];
      A[i] = A[j];
      A[j] = tmp;
    }
  }

  let i = 0;
  for (; i < A.length; i++) {
    if (i + 1 !== A[i]) break;
  }
  return i + 1;
};

const res2 = firstMissingPositive2([7, 8, 9, 11, 12]);
console.log('===', res2);
