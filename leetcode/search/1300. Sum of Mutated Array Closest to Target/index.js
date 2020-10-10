/*

Given an integer array arr and a target value target, return the integer value such that when we change all the integers larger than value in the given array to be equal to value, the sum of the array gets as close as possible (in absolute difference) to target.

In case of a tie, return the minimum such integer.

Notice that the answer is not neccesarilly a number from arr.

Example 1:
  Input: arr = [4,9,3], target = 10
  Output: 3
  Explanation: When using 3 arr converts to [3, 3, 3] which sums 9 and that's the optimal answer.

Example 2:
  Input: arr = [2,3,5], target = 10
  Output: 5

Example 3:
  Input: arr = [60864,25176,27249,21296,20204], target = 56803
  Output: 11361
  

Constraints:
  1 <= arr.length <= 10^4
  1 <= arr[i], target <= 10^5

*/

// Time O(NLogK) K - maxValue
// Space O(1)
const findBestValue = (arr, target) => {
  let left = 0;
  let right = getMax(arr);

  let res = right;
  let minDiff = target;

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    let sum = calc(mid, arr);

    let diff = Math.abs(target - sum);

    if (minDiff > diff) {
      minDiff = diff;
      res = mid;
    } else if (minDiff == diff) {
      res = Math.min(res, mid);
    }

    if (sum <= target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return res;

  function calc(value, arr) {
    let sum = 0;
    for (let x of arr) {
      sum += x > value ? value : x;
    }
    return sum;
  }

  function getMax(arr) {
    let max = 0;
    for (let x of arr) {
      max = Math.max(max, x);
    }
    return max;
  }
};
