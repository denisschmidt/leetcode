/*
Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.

Example 1:
  Input: [3,0,1]
  Output: 2

Example 2:
  Input: [9,6,4,2,3,5,7,0,1]
  Output: 8

Note:
  Your algorithm should run in linear runtime complexity.
  Could you implement it using only constant extra space complexity?


ВАЖНО !!!!!
Формула Гаусса: Cумма чисел от 1 до n (n * (n + 1)) / 2

 */

// Time O(N)
// Space O(1)
const missingNumber = function (nums) {
  const size = nums.length;
  const total = (size * (size + 1)) / 2;
  const sum = nums.reduce((acc, v) => acc + v, 0);
  return total - sum;
};
