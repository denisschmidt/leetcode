/*

Starting with a positive integer N, we reorder the digits in any order (including the original order) such that the leading digit is not zero.

Return true if and only if we can do this in a way such that the resulting number is a power of 2.

Example 1:
  Input: 1
  Output: true

Example 2:
  Input: 10
  Output: false

Example 3:
  Input: 16
  Output: true

Example 4:
  Input: 24
  Output: false

Example 5:
  Input: 46
  Output: true
  

Note:
  1 <= N <= 10^9

*/

// Time O(N!);
// Space O(N!);
const reorderedPowerOf2 = N => {
  let nums = N.toString().split('');
  let n = nums.length;
  let visited = Array(n).fill(false);

  return helper('');

  function helper(current) {
    if (current[0] != 0 && current.length >= n) {
      if (IsPowerOfTwo(current)) {
        return true;
      }
      return false;
    }
    for (let i = 0; i < n; i++) {
      if (visited[i]) continue;

      visited[i] = true;

      if (helper(current + nums[i])) return true;

      visited[i] = false;
    }

    return false;
  }

  function IsPowerOfTwo(x) {
    return (x & (x - 1)) == 0;
  }
};
