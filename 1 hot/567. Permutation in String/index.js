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
const checkInclusion = function(s1, s2) {
  let map = {};
  let start = 0;
  let end = 0;
  let cnt = s1.length;
  let minLen = Number.MAX_VALUE;
  for (let s of s1) {
    map[s] = ~~map[s] + 1;
  }

  while (end < s2.length) {
    if (map[s2[end]] > 0) {
      cnt--;
    }
    map[s2[end]]--;
    end++;

    while (cnt === 0) {
      if (minLen > end - start) {
        minLen = end - start;
      }

      map[s2[start]]++;

      if (map[s2[start]] > 0) {
        cnt++;
      }

      start++;
    }
  }

  return minLen === s1.length;
};
