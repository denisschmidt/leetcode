/*
Given an array nums of integers, we need to find the maximum possible sum of elements of the array such that it is divisible by three.

Example 1:
  Input: nums = [3,6,5,1,8]
  Output: 18
  Explanation: Pick numbers 3, 6, 1 and 8 their sum is 18 (maximum sum divisible by 3).

Example 2:
  Input: nums = [4]
  Output: 0
  Explanation: Since 4 is not divisible by 3, do not pick any number.

Example 3:
  Input: nums = [1,2,3,4,4]
  Output: 12
  Explanation: Pick numbers 1, 3, 4 and 4 their sum is 12 (maximum sum divisible by 3).

Constraints:
  1 <= nums.length <= 4 * 10^4
  1 <= nums[i] <= 10^4

 */

// Time O(N)
// Space O(1)
const maxSumDivThree = nums => {
  let sum = 0;
  let leftTwo = Math.pow(10, 4);
  let leftOne = Math.pow(10, 4);
  for (let num of nums) {
    sum += num;

    if (num % 3 === 1) {
      leftTwo = Math.min(leftTwo, leftOne + num);
      leftOne = Math.min(leftOne, num);
    }

    if (num % 3 === 2) {
      leftOne = Math.min(leftOne, leftTwo + num);
      leftTwo = Math.min(leftTwo, num);
    }
  }

  if (sum % 3 === 0) return sum;
  if (sum % 3 === 1) return sum - leftOne;
  return sum - leftTwo;
};

// Time O(N)
// Space O(1)
const maxSumDivThree2 = nums => {
  return maxSumDivK(nums, 3);

  function maxSumDivK(nums, k) {
    let dp = Array(k).fill(-Number.MAX_VALUE);
    dp[0] = 0;

    for (let num of nums) {
      let tmp = [];

      // От nums[0] до nums[i] мы можем посчитать максимальную сумму, у которой остаток деления на 3 равен 0, 1 или 2
      for (let remainder = 0; remainder < k; remainder++) {
        tmp[(num + remainder) % k] = Math.max(dp[(num + remainder) % k], num + dp[remainder]);
      }
      dp = tmp;
    }

    return dp[0];
  }
};
