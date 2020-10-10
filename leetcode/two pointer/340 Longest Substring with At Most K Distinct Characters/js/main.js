/*

Given a string, find the length of the longest substring T that contains at most k distinct characters.

Example 1:
  Input: s = "eceba", k = 2
  Output: 3
  Explanation: T is "ece" which its length is 3.

Example 2:
  Input: s = "aa", k = 1
  Output: 2
  Explanation: T is "aa" which its length is 2.

*/

// Time O(N)
// Space O(K)
const lengthOfLongestSubstringKDistinct = (s, k) => {
  let map = {};
  let start = 0;
  let end = 0;
  let cnt = 0;
  let maxLen = 0;

  for (let x of s) {
    map[x] = 0;
  }

  while (end < s.length) {
    if (map[s[end]] == 0) {
      cnt++;
    }
    map[s[end]]++;
    end++;

    while (cnt > k) {
      if (map[s[start]] == 1) {
        cnt--;
      }
      map[s[start]]--;
      start++;
    }

    if (maxLen < end - start) {
      maxLen = end - start;
    }
  }
  return maxLen;
};
