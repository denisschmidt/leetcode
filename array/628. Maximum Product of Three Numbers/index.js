/*
Given an integer array, find three numbers whose product is maximum and output the maximum product.

Example 1:

Input: [1,2,3]
Output: 6


Example 2:

Input: [1,2,3,4]
Output: 24


Note:

The length of the given array will be in range [3,104] and all elements are in the range [-1000, 1000].
Multiplication of any three numbers in the input won't exceed the range of 32-bit signed integer.

 */

// Time O(nLogN)
// Space O(logN)

// O(logN) - это высота дерева рекурсии. когда вы используете рекурсию для сортировки, она использует logN, когда вы помещаете контекст в стек
const maximumProduct = function(nums) {
  nums.sort((a, b) => a - b);
  let n = nums.length;
  let sum1 = nums[n - 1] * nums[n - 2] * nums[n - 3];
  let sum2 = nums[0] * nums[1] * nums[n - 1];

  return Math.max(sum1, sum2);
};

// Time O(N)
// Space O(1)

const maximumProduct2 = function(nums) {
  let min1 = Number.MAX_VALUE;
  let min2 = Number.MAX_VALUE;

  let max1 = Number.MIN_VALUE;
  let max2 = Number.MIN_VALUE;
  let max3 = Number.MIN_VALUE;

  for (let n of nums) {
    if (n <= min1) {
      min2 = min1;
      min1 = n;
    } else if (n <= min2) {
      // n lies between min1 and min2
      min2 = n;
    }

    if (n >= max1) {
      // n is greater than max1, max2 and max3
      max3 = max2;
      max2 = max1;
      max1 = n;
    } else if (n >= max2) {
      // n lies betweeen max1 and max2
      max3 = max2;
      max2 = n;
    } else if (n >= max3) {
      // n lies betwen max2 and max3
      max3 = n;
    }
  }

  return Math.max(min1 * min2 * max1, max1 * max2 * max3);
};
