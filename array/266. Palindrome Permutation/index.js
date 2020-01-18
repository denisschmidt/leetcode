/*
Given a string, determine if a permutation of the string could form a palindrome.

Example 1:
  Input: "code"
  Output: false

Example 2:
  Input: "aab"
  Output: true

Example 3:
  Input: "carerac"
  Output: true

*/

// Time O(N)
// Space O(N)
const canPermutePalindrome = str => {
  let map = {};

  for (let s of str) {
    map[s] = ~~map[s] + 1;
  }

  let cnt = 0;

  for (let key of Object.keys(map)) {
    if (cnt > 1) {
      return false;
    }

    if (map[key] % 2 !== 0) {
      cnt++;
    }
  }

  return cnt <= 1;
};
