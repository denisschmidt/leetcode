/*

Given an array which consists of non-negative integers and an integer m, you can split the array into m non-empty continuous subarrays. 

Write an algorithm to minimize the largest sum among these m subarrays.

Note: If n is the length of array, assume the following constraints are satisfied:

1 ≤ n ≤ 1000
1 ≤ m ≤ min(50, n)

Examples:
  Input: nums = [7,2,5,10,8] m = 2
  Output: 18

Explanation:
  There are four ways to split nums into two subarrays.
  The best way is to split it into [7,2,5] and [10,8],
  where the largest sum among the two subarrays is only 18.

*/

// Time O(N * Log(K)) K - сумма элементов в nums
// Space O(1)
const splitArray = (nums, m) => {
  let left = 0;
  let right = 0;

  for (let x of nums) {
    right += x;
    left = Math.max(left, x);
  }

  let ans = right;

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);

    if (calc(mid) > m) {
      left = mid + 1;
    } else {
      right = mid - 1;
      ans = Math.min(ans, mid);
    }
  }

  return ans;

  function calc(mid) {
    let sum = 0;
    let cnt = 1;

    for (let i = 0; i < nums.length; i++) {
      if (sum + nums[i] <= mid) {
        sum += nums[i];
      } else {
        sum = nums[i];
        cnt++;
      }
    }

    return cnt;
  }
};
