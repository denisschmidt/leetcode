/*

Given a binary array, find the maximum length of a contiguous subarray with equal number of 0 and 1.

Example 1:
  Input: [0,1]
  Output: 2
  Explanation: [0, 1] is the longest contiguous subarray with equal number of 0 and 1.

Example 2:
  Input: [0,1,0]
  Output: 2
  Explanation: [0, 1] (or [1, 0]) is a longest contiguous subarray with equal number of 0 and 1.

Note: The length of the given binary array will not exceed 50,000.

*/

// Time O(N)
// Space O(N)
const findMaxLength = nums => {
  let map = new Map();
  let ans = 0;
  let sum = 0;

  map.set(0, -1);

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 0) {
      sum--;
    } else if (nums[i] == 1) {
      sum++;
    }

    if (map.has(sum)) {
      ans = Math.max(ans, i - map.get(sum));
    } else {
      map.set(sum, i);
    }
  }

  return ans;
};
