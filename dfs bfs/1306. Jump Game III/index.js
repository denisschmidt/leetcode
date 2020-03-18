/*

Given an array of non-negative integers arr, you are initially positioned at start index of the array. 
When you are at index i, you can jump to i + arr[i] or i - arr[i], check if you can reach to any index with value 0.

Notice that you can not jump outside of the array at any time.
 
Example 1:
  Input: arr = [4,2,3,0,3,1,2], start = 5
  Output: true
  Explanation: 
    All possible ways to reach at index 3 with value 0 are: 
    index 5 -> index 4 -> index 1 -> index 3 
    index 5 -> index 6 -> index 4 -> index 1 -> index 3 

Example 2:
  Input: arr = [4,2,3,0,3,1,2], start = 0
  Output: true 
  Explanation: One possible way to reach at index 3 with value 0 is:  index 0 -> index 4 -> index 1 -> index 3

Example 3:
  Input: arr = [3,0,2,1,2], start = 2
  Output: false
  Explanation: There is no way to reach at index 1 with value 0.
 

Constraints:
  1 <= arr.length <= 5 * 10^4
  0 <= arr[i] < arr.length
  0 <= start < arr.length

*/

// Time O(N)
// Space O(N)
const canReach = (nums, start) => {
  let stack = [start];
  let n = nums.length;
  let visited = Array(n).fill(false);

  while (stack.length) {
    let i = stack.pop();

    if (visited[i]) continue;

    visited[i] = true;

    if (nums[i] == 0) return true;

    let right = i + nums[i];
    let left = i - nums[i];

    if (right >= 0 && right < n) {
      stack.push(right);
    }

    if (left >= 0 && left < n) {
      stack.push(left);
    }
  }

  return false;
};
