/*
 Given an array nums of n integers where n > 1
 Return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

Example:

Input:  [1,2,3,4]
Output: [24,12,8,6]

Input: [3, 2, 1]
Output: [2, 3, 6]

Note: Please solve it without division and in O(n).

Follow up:
Could you solve it with constant space complexity? (The output array does not count as extra space for the purpose of space complexity analysis.)

/////////////////////////
Solution

Given numbers [2, 3, 4, 5], regarding the third number 4,
the product of array except 4 is ==> 2 * 3 * 5 which consists of two parts: left 2*3 and right 5.

The product is left*right. We can get lefts and rights:

Numbers:     2    3    4     5
  Lefts:          2   2*3  2*3*4
  Rights:  3*4*5  4*5    5

Let’s fill the empty with 1:

Numbers:     2    3    4     5
  Lefts:     1    2   2*3  2*3*4
  Rights:  3*4*5  4*5  5    1

We can calculate lefts and rights in 2 loops. The time complexity is O(n).

We store lefts in result array. If we allocate a new array for rights.

The space complexity is O(n).

To make it O(1), we just need to store it in a variable which is right in code.

 */

const productExceptSelf = function(nums) {
  const size = nums.length;
  let dp = [];

  // calculate left store
  let left = 1;
  for (let i = 0; i < size; i++) {
    if (i > 0) {
      left = nums[i - 1] * left;
    }
    dp[i] = left;
  }

  // calculate rights
  let right = 1;
  for (let i = size - 1; i >= 0; i--) {
    if (i < size - 1) {
      right = nums[i + 1] * right;
    }
    dp[i] = dp[i] * right;
  }

  return dp;
};

const res = productExceptSelf([2, 3, 4, 5]);
console.log('---', res);
