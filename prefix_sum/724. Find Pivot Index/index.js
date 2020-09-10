/*

Given an array of integers nums, write a method that returns the "pivot" index of this array.

We define the pivot index as the index where the sum of the numbers to the left of the index is equal to the sum of the numbers to the right of the index.

If no such index exists, we should return -1. If there are multiple pivot indexes, you should return the left-most pivot index.

Example 1:
  Input: nums = [1, 7, 3, 6, 5, 6]
  Output: 3
    Explanation:
    The sum of the numbers to the left of index 3 (nums[3] = 6) is equal to the sum of numbers to the right of index 3.
    Also, 3 is the first index where this occurs.
 

Example 2:
  Input: nums = [1, 2, 3]
  Output: -1
  Explanation: There is no index that satisfies the conditions in the problem statement.

Note:
  The length of nums will be in the range [0, 10000].
  Each element nums[i] will be an integer in the range [-1000, 1000].
 
 
*/

// Time O(N)
// Space O(1)
const pivotIndex = function (nums) {
  if (nums.length === 0) return -1;

  let rightSum = 0;
  let leftSum = 0;
  for (let num of nums) {
    rightSum += num;
  }

  for (let i = 0; i < nums.length; i++) {
    rightSum -= nums[i];
    if (leftSum === rightSum) return i;
    leftSum += nums[i];
  }
  return -1;
};

// Time O(N)
// Space O(N)
const pivotIndex_II = nums => {
  let prefix = [];
  let n = nums.length;

  prefix[0] = nums[0];

  for (let i = 1; i < n; i++) {
    prefix[i] = prefix[i - 1] + nums[i];
  }

  for (let i = 0; i < n; i++) {
    let left = i == 0 ? 0 : prefix[i - 1];
    let right = i == n - 1 ? 0 : prefix[n - 1] - prefix[i];

    if (left == right) return i;
  }
  return -1;
};
