/*

Given an array of integers arr and an integer target.

You have to find two non-overlapping sub-arrays of arr each with sum equal target. 

There can be multiple answers so you have to find an answer where the sum of the lengths of the two sub-arrays is minimum.

Return the minimum sum of the lengths of the two required sub-arrays, or return -1 if you cannot find such two sub-arrays.


Example 1:
  Input: arr = [3,2,2,4,3], target = 3
  Output: 2
  Explanation: Only two sub-arrays have sum = 3 ([3] and [3]). The sum of their lengths is 2.

Example 2:
  Input: arr = [7,3,4,7], target = 7
  Output: 2
  Explanation: Although we have three non-overlapping sub-arrays of sum = 7 ([7], [3,4] and [7]), but we will choose the first and third sub-arrays as the sum of their lengths is 2.

Example 3:
  Input: arr = [4,3,2,6,2,3,4], target = 6
  Output: -1
  Explanation: We have only one sub-array of sum = 6.

Example 4:
  Input: arr = [5,5,4,4,5], target = 3
  Output: -1
  Explanation: We cannot find a sub-array of sum = 3.

Example 5:
  Input: arr = [3,1,1,1,5,1,2,1], target = 3
  Output: 3
  Explanation: Note that sub-arrays [1,2] and [2,1] cannot be an answer because they overlap.
  

Constraints:
  1 <= arr.length <= 10^5
  1 <= arr[i] <= 1000
  1 <= target <= 10^8

*/

// Time O(N)
// Space O(N)
const minSumOfLengths = (arr, target) => {
  let n = arr.length;

  let start = 0;
  let end = 0;
  let sum = 0;
  let prefix = Array(n).fill(Number.MAX_VALUE); // best from left
  let suffix = Array(n).fill(Number.MAX_VALUE); // best from right

  while (end < n) {
    sum += arr[end];
    while (sum > target) sum -= arr[start++];
    if (sum == target) {
      prefix[end] = Math.min(prefix[end], end - start + 1);
    }
    end++;
  }

  end = n - 1;
  start = n - 1;
  sum = 0;

  while (end >= 0) {
    sum += arr[end];
    while (sum > target) sum -= arr[start--];
    if (sum == target) {
      suffix[end] = Math.min(suffix[end], start - end + 1);
    }
    end--;
  }

  let minLeft = Number.MAX_VALUE;
  for (let i = 0; i < prefix.length; i++) {
    minLeft = Math.min(minLeft, prefix[i]);
    prefix[i] = minLeft;
  }

  let min = Number.MAX_VALUE;

  for (let i = suffix.length - 1; i > 0; i--) {
    if (suffix[i] + prefix[i - 1] < min) {
      // we need non-overlapping sub arrays
      min = suffix[i] + prefix[i - 1];
    }
  }

  return min == Number.MAX_VALUE ? -1 : min;
};
