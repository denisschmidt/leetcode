/*

Given a string and an integer k, you need to reverse the first k characters for every 2k characters counting from the start of the string. 

If there are less than k characters left, reverse all of them. 

If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and left the other as original.

Example:
  Input: s = "abcdefg", k = 2
  Output: "bacdfeg"

Restrictions:
  The string consists of lower English letters only.
  Length of the given string and k will in the range [1, 10000]

*/

// Time O(N)
// Space O(N)
const reverseStr = (s, k) => {
  let chars = s.split('');
  let n = chars.length;

  for (let start = 0; start < n; start += 2 * k) {
    let i = start;
    let j = Math.min(start + k - 1, n - 1);

    while (i < j) {
      swap(chars, i, j);
      j--;
      i++;
    }
  }

  return chars.join('');

  function swap(nums, i, j) {
    return ([nums[i], nums[j]] = [nums[j], nums[i]]);
  }
};
