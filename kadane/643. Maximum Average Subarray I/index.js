/*
Given an array consisting of n integers, find the contiguous subarray of given length k that has the maximum average value.
And you need to output the maximum average value.

Example 1:

Input: [1,12,-5,-6,50,3], k = 4
Output: 12.75
Explanation: Maximum average is (12-5-6+50)/4 = 51/4 = 12.75


Note:

1 <= k <= n <= 30,000.
Elements of the given array will be in the range [-10,000, 10,000].

 */
//Complexity Analysis
//
// Time complexity : O(n^2).

const findMaxAverage = function(nums, k) {
  const size = nums.length - 1;
  let start = 0;
  let maxSum;
  if (size - 1 === 0) return nums[0];

  while (size - start + 1 >= k) {
    let end = start + 1;
    let sum = nums[start];

    while (end < k + start) {
      sum += nums[end];
      end++;
    }
    if (!maxSum || sum > maxSum) {
      maxSum = sum;
    }
    start++;
  }
  return maxSum / k;
};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Complexity Analysis
//
// Time complexity : O(n). We iterate over the given nums array of length n once only.
//
// Space complexity : O(1). Constant extra space is used.
const findMaxAverage2 = function(nums, k) {
  let sum = 0;
  for (let i = 0; i < k; i++) {
    sum += nums[i];
  }

  let maxSum = sum;
  for (let i = k; i < nums.length; i++) {
    sum = sum + nums[i] - nums[i - k];
    maxSum = Math.max(maxSum, sum);
  }

  return maxSum / k;
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Cumulative Sum

//Complexity Analysis
//
// Time complexity : O(n). We iterate over the nums array of length n once to fill the sum array.
// Then, we iterate over n-k elements of sum to determine the required result.
//
// Space complexity : O(n). We make use of a sum array of length n to store the cumulative sum.

const findMaxAverage2 = function(nums, k) {
  let sum = [];
  sum.push(nums[0]);
  for (let i = 1; i < nums.length; i++) {
    sum[i] = sum[i - 1] + nums[i];
  }
  let ans = (sum[k - 1] * 1.0) / k;

  for (let i = k; i < nums.length; i++) {
    ans = Math.max(ans, (sum[i] - sum[i - k]) / k);
  }
  return ans;
};
