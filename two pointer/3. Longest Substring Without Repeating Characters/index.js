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
const lengthOfLongestSubstring = word => {
  let map = {};

  for (let w of word) {
    map[w] = 0;
  }

  let start = 0;
  let end = 0;
  let cnt = 0;
  let maxLen = 0;

  while (end < word.length) {
    if (map[word[end]] > 0) {
      cnt++;
    }

    map[word[end++]]++;

    while (cnt > 0) {
      if (map[word[start]] == 2) {
        cnt--;
      }

      map[word[start]]--;
      start++;
    }

    if (maxLen < end - start) {
      maxLen = end - start;
    }
  }

  return maxLen;
};
