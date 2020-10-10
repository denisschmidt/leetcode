/*
Given an array of integers nums, sort the array in ascending order.

Example 1:
  Input: [5,2,3,1]
  Output: [1,2,3,5]

Example 2:
  Input: [5,1,1,2,0,0]
  Output: [0,0,1,1,2,5]
 

Note:
  1 <= A.length <= 10000
  -50000 <= A[i] <= 50000

 */

// Time O(N * logN)
// Space O(N)
const sortArray = function (nums) {
  if (nums.length <= 1) return nums;

  const mid = Math.floor(nums.length / 2);
  const leftNums = sortArray(nums.slice(0, mid));
  const rightNums = sortArray(nums.slice(mid));

  return merge(leftNums, rightNums);

  function merge(leftNums, rightNums) {
    let l = 0;
    let r = 0;
    let index = 0;
    let result = [];

    while (l < leftNums.length && r < rightNums.length) {
      if (leftNums[l] < rightNums[r]) {
        result[index] = leftNums[l];
        index++;
        l++;
      } else {
        result[index] = rightNums[r];
        index++;
        r++;
      }
    }

    while (l < leftNums.length) {
      result[index] = leftNums[l];
      l++;
      index++;
    }

    while (r < rightNums.length) {
      result[index] = rightNums[r];
      r++;
      index++;
    }

    return result;
  }
};
