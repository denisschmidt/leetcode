/*
159. Longest Substring with At Most Two Distinct Characters

Given a string s , find the length of the longest substring t  that contains at most 2 distinct characters.

Example 1:
  Input: "eceba"
  Output: 3
  Explanation: t is "ece" which its length is 3.

Example 2:
  Input: "ccaabbb"
  Output: 5
  Explanation: t is "aabbb" which its length is 5.
 */

// Time O(N)
// Space O(K)
const lengthOfLongestSubstringTwoDistinct = function(str) {
  const map = {};
  for (let x of str) {
    map[x] = 0;
  }

  let start = 0;
  let end = 0;
  let cnt = 0;
  let maxLen = 0;

  while (end < str.length) {
    if (map[str[end]] === 0) {
      cnt++;
    }

    map[str[end]]++;
    end++;

    while (cnt > 2) {
      if (map[str[start]] === 1) {
        cnt--;
      }
      map[str[start]]--;
      start++;
    }

    if (maxLen < end - start) {
      maxLen = end - start;
    }
  }
  return maxLen;
};
