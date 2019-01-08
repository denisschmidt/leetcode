/*

Find the length of the longest substring T of a given string (consists of lowercase letters only)
such that every character in T appears no less than k times.

Example 1:

  Input:
    s = "aaabb", k = 3

  Output:
    3
The longest substring is "aaa", as 'a' is repeated 3 times.

Example 2:

  Input:
    s = "ababbc", k = 2
  Output:
    5
The longest substring is "ababb", as 'a' is repeated 2 times and 'b' is repeated 3 times.


O(N) - solution

Why ?
  This is definitely an O(n) solution.
  In the while loop, either i or j will increase by 1 in each iteration, so it costs at most 2*n time.
  In total, it will cost 56 * n time, which is O(n).

 */

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const longestSubstring = function(s, k) {
  let map = {}, maxLen = 0;
  for (let i = 1; i <= 26; i++) {
    let begin = 0, end = 0, uniqueChar = 0;
    for (let h = 0; h < 26; h++) {
      map[String.fromCharCode(h + 97)] = 0;
    }

    while (end < s.length) {
      let valid = true;
      if (map[s[end++]]++ === 0) {
        uniqueChar++;
      }

      while (uniqueChar > i) {
        if (map[s[begin++]]-- === 1) {
          uniqueChar--;
        }
      }
      for (let j = 0; j < 26; j++) {
        let code = String.fromCharCode(j + 97);
        if (map[code] > 0 && map[code] < k) {
          valid = false;
        }
      }
      if (valid) {
        maxLen = Math.max(maxLen, end - begin);
      }
    }
  }
  return maxLen;
};

// "ababacb"
// 3

const res = longestSubstring('aaabb', 3);
console.log('---', res);
