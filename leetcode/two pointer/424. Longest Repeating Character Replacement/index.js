/*

Given a string s that consists of only uppercase English letters, you can perform at most k operations on that string.

In one operation, you can choose any character of the string and change it to any other uppercase English character.

Find the length of the longest sub-string containing all repeating letters you can get after performing the above operations.

Note: Both the string's length and k will not exceed 104.

Example 1:
  Input: s = "ABAB", k = 2
  Output: 4

  Explanation: Replace the two 'A's with two 'B's or vice versa.
 

Example 2:
  Input: s = "AABABBA", k = 1
  Output: 4

  Explanation:
  Replace the one 'A' in the middle with 'B' and form "AABBBBA".
  The substring "BBBB" has the longest repeating letters, which is 4.
 
 */

// Time O(N)
// Space O(N)
const characterReplacement = (s, k) => {
  let map = {};
  let start = 0;
  let end = 0;
  let maxCnt = 0;
  let maxLen = 0;

  for (let t of s) map[t] = 0;

  while (end < s.length) {
    map[s[end]]++;
    maxCnt = Math.max(maxCnt, map[s[end]]);

    /* 

      end - start + 1 размер текущего окна
      maxCount максимальное вхождение в окне

      end - start + 1 - maxCount - количество символов, которые НЕ являются символом, который встречается чаще всего в этом окне.

      Для окна "xxxyz" end-start+1-maxCount = 2

    */

    if (end - start + 1 - maxCnt > k) {
      map[s[start++]]--;
    }

    if (maxLen < end - start + 1) {
      maxLen = end - start + 1;
    }

    end++;
  }

  return maxLen;
};
