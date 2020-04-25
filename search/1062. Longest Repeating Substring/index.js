/*

Given a string S, find out the length of the longest repeating substring(s). 
Return 0 if no repeating substring exists.

Example 1:
  Input: "abcd"
  Output: 0
  Explanation: There is no repeating substring.

Example 2:
  Input: "abbaba"
  Output: 2
  Explanation: The longest repeating substrings are "ab" and "ba", each of which occurs twice.

Example 3:
  Input: "aabcaabdaab"
  Output: 3
  Explanation: The longest repeating substring is "aab", which occurs 3 times.

Example 4:
  Input: "aaaaa"
  Output: 4
  Explanation: The longest repeating substring is "aaaa", which occurs twice.
  

Note:
  The string S consists of only lowercase English letters from 'a' - 'z'.
  1 <= S.length <= 1500

*/

// Binary Search
// Time O(NLogN)
// Space O(N^2)
const longestRepeatingSubstring = function(S) {
  let n = S.length;
  let lo = 1;
  let hi = n;

  while (lo <= hi) {
    let subLen = lo + Math.floor((hi - lo) / 2);

    if (search(subLen) != -1) {
      // если существует repeating substring длины subLen увеличиваем длину подстроки
      lo = subLen + 1;
    } else {
      // если не нашли, то уменьшаем длину подстроки
      hi = subLen - 1;
    }
  }

  return lo - 1;

  function search(len) {
    let set = new Set();

    for (let i = 0; i < n - len + 1; i++) {
      let cur = S.substring(i, i + len);

      if (set.has(cur)) {
        return i;
      }

      set.add(cur);
    }

    return -1;
  }
};

// Time O(N^2)
// Space O(N^2)
const longestRepeatingSubstring_II = S => {
  let n = S.length;
  let dp = Array(n + 1)
    .fill(0)
    .map(() => Array(n + 1).fill(0));
  let max = 0;

  for (let i = 1; i <= n; i++) {
    for (let j = i + 1; j <= n; j++) {
      if (S[i - 1] == S[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;

        if (max < dp[i][j]) {
          max = dp[i][j];
        }
      }
    }
  }

  return max;
};

// Time O(N^3)
// Space O(N^2)
const longestRepeatingSubstring_III = S => {
  let size = S.length;
  let map = new Map();
  let maxLen = 0;

  for (let i = size; i >= 0; i--) {
    for (let j = i; j < size; j++) {
      let current = S.substring(i, j + 1);

      if (!map.has(current)) {
        map.set(current, 1);
      } else {
        map.set(current, map.get(current) + 1);
      }

      let cnt = map.get(current);

      if (cnt > 1 && current.length > maxLen) {
        maxLen = current.length;
      }
    }
  }

  return maxLen;
};
