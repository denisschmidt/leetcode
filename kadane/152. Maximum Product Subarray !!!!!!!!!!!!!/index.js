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
const input = [2, 3, -2, 4];

// Time O(N)
// Space O(1)
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

maxProduct(input);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Easy to understand O(n) solution :
// Its all about having odd or even numbers of negative integers.
// if the negative numbers are even, then the first pass will give the solution.
// If the negative numbers are odd, the second pass will give the solution.

const maxProduct2 = nums => {
  let sum = 1;
  let ans = nums[0];

  for (let i = 0; i < nums.length; i++) {
    sum *= nums[i];
    ans = Math.max(sum, ans);

    if (sum === 0) {
      sum = 1;
    }
  }

  sum = 1;

  for (let i = nums.length - 1; i >= 0; i--) {
    sum *= nums[i];
    ans = Math.max(sum, ans);
    if (sum === 0) {
      sum = 1;
    }
  }

  return ans;
};

maxProduct2(input);
