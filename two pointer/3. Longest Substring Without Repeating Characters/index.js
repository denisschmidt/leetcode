/*

Given a string, find the length of the longest substring without repeating characters.


Input: "abcabcbb"
Output: 3
Explanation: The answer is "abc", which the length is 3.

Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.


Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
             Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

*/

// Two Pointers
// Time O(N)
// Space O(N)
const lengthOfLongestSubstring = str => {
  const map = {};

  for (let i = 0; i < 128; i++) {
    map[String.fromCharCode(i)] = 0;
  }

  let start = 0;
  let end = 0;
  let cnt = 0;
  let maxLen = 0;

  while (end < str.length) {
    if (map[str[end]] > 0) {
      cnt++;
    }
    map[str[end]]++;
    end++;

    while (cnt > 0) {
      if (map[str[start]] > 1) {
        cnt--;
      }
      map[str[start]]--;
      start++;
    }

    maxLen = Math.max(maxLen, end - start);
  }

  return maxLen;
};
