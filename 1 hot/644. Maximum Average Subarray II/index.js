/*

Given an array consisting of n integers, find the contiguous subarray whose length is greater than 
or equal to k that has the maximum average value. And you need to output the maximum average value.

Example 1:
Input: [1,12,-5,-6,50,3], k = 4
Output: 12.75

Explanation:
  when length is 5, maximum average value is 10.8,
  when length is 6, maximum average value is 9.16667.
  Thus return 12.75.

Note:
  1 <= k <= n <= 10,000.
  Elements of the given array will be in range [-10,000, 10,000].
  The answer with the calculation error less than 10-5 will be accepted.

*/
// Time O(N^2)
// Space O(1)
const findMaxAverage = function (nums, k) {
  let result = -Number.MAX_VALUE;
  let n = nums.length;

  for (let step = 0; step < n - k + 1; step++) {
    let sum = 0;

    for (let index = step; index < n; index++) {
      sum += nums[index];

      let intervalDistance = index - step + 1;

      if (intervalDistance >= k) {
        result = Math.max(result, (sum * 1.0) / intervalDistance);
      }
    }
  }

  return result;
};

let r = findMaxAverage([1, 12, -5, -6, 50, 3], 4);
console.log(r);
