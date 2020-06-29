/*

Given a string s, return the maximum number of ocurrences of any substring under the following rules:

The number of unique characters in the substring must be less than or equal to maxLetters.
The substring size must be between minSize and maxSize inclusive.
 
Example 1:
  Input: s = "aababcaab", maxLetters = 2, minSize = 3, maxSize = 4
  Output: 2
  Explanation: Substring "aab" has 2 ocurrences in the original string.
  It satisfies the conditions, 2 unique letters and size 3 (between minSize and maxSize).

Example 2:
  Input: s = "aaaa", maxLetters = 1, minSize = 3, maxSize = 3
  Output: 2
  Explanation: Substring "aaa" occur 2 times in the string. It can overlap.

Example 3:
  Input: s = "aabcabcab", maxLetters = 2, minSize = 2, maxSize = 3
  Output: 3

Example 4:
  Input: s = "abcde", maxLetters = 2, minSize = 3, maxSize = 3
  Output: 0
 

Constraints:
  1 <= s.length <= 10^5
  1 <= maxLetters <= 26
  1 <= minSize <= maxSize <= min(26, s.length)
  s only contains lowercase English letters.

*/

// Time O(N)
// Space O(N)
const maxFreq = (s, maxLetters, minSize, maxSize) => {
  let start = 0;
  let end = 0;
  let n = s.length;
  let map = {};
  let cnt = 0;
  let res = {};

  for (let w of s) {
    map[w] = 0;
  }

  while (end < n) {
    if (map[s[end]] == 0) cnt++;

    map[s[end]]++;
    end++;

    while (cnt > maxLetters || end - start > minSize) {
      if (map[s[start]] == 1) {
        cnt--;
      }
      map[s[start]]--;
      start++;
    }

    if (end - start >= minSize) {
      let x = s.substring(start, end);

      res[x] = ~~res[x] + 1;
    }
  }

  let max = 0;
  for (let k of Object.keys(res)) {
    max = Math.max(max, res[k]);
  }

  return max;
};
