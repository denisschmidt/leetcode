/*
Given an integer array nums, find the contiguous subarray within an array (containing at least one number) which has the largest product.

Example 1:

Input: [2,3,-2,4]
Output: 6
Explanation: [2,3] has the largest product 6.
Example 2:

Input: [-2,0,-1]
Output: 0
Explanation: The result cannot be 2, because [-2,-1] is not a subarray.

 */

// The main idea is "imax/imin stores the max/min product of subarray that ends with the current number A[I]"
const maxProduct = function(nums) {
  let max = nums[0];
  let iMin = max;
  let iMax = max;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < 0) {
      let tmp = iMax;
      iMax = iMin;
      iMin = tmp;
    }

    iMax = Math.max(nums[i], iMax * nums[i]);
    iMin = Math.min(nums[i], iMin * nums[i]);

    max = Math.max(iMax, max);
  }

  return max;
};

const res = maxProduct([2, 3, -2, 4]);
console.log('----', res);
