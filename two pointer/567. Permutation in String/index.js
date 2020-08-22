/*
Given two strings s1 and s2, write a function to return true if s2 contains the permutation of s1.
In other words, one of the first string's permutations is the substring of the second string.

Example 1:
  Input: s1 = "ab" s2 = "eadbaooo"
  Output: True
  Explanation: s2 contains one permutation of s1 ("ba").

Example 2:
  Input:s1= "ab" s2 = "eidboaoo"
  Output: False

Note:
  The input strings only contain lower case letters.
  The length of both given strings is in range [1, 10,000].

 */

// Time O(N)
// Space O(N)
const checkInclusion = (s1, s2) => {
  let map = {};

  for (let x of s1) map[x] = ~~map[x] + 1;

  let start = 0;
  let end = 0;
  let cnt = Object.keys(map).length;

  while (end < s2.length) {
    if (--map[s2[end++]] == 0) {
      cnt--;
    }

    while (cnt == 0) {
      if (end - start == s1.length) {
        return true;
      }

      if (++map[s2[start++]] > 0) {
        cnt++;
      }
    }
  }

  return false;
};

// Time O(N!)
// Space O(N)
const checkInclusion_II = (s1, s2) => {
  // Generate all possible substrings
  return dfs(s1, '');

  function dfs(str, comb) {
    if (str.length == 0) {
      if (s2.indexOf(comb) > -1) {
        return true;
      }
      return false;
    }

    for (let i = 0; i < str.length; i++) {
      let rest = str.substring(0, i) + str.substring(i + 1);

      let isValid = dfs(rest, comb + str[i]);

      if (isValid) {
        return true;
      }
    }
    return false;
  }
};
