/*

Given a string s and an integer k.

Return the maximum number of vowel letters in any substring of s with length k.

Vowel letters in English are (a, e, i, o, u).

Example 1:
  Input: s = "abciiidef", k = 3
  Output: 3
  Explanation: The substring "iii" contains 3 vowel letters.

Example 2:
  Input: s = "aeiou", k = 2
  Output: 2
  Explanation: Any substring of length 2 contains 2 vowels.

Example 3:
  Input: s = "leetcode", k = 3
  Output: 2
  Explanation: "lee", "eet" and "ode" contain 2 vowels.

Example 4:
  Input: s = "rhythms", k = 4
  Output: 0
  Explanation: We can see that s doesn't have any vowel letters.

Example 5:
  Input: s = "tryhard", k = 4
  Output: 1
 

Constraints:
  1 <= s.length <= 10^5
  s consists of lowercase English letters.
  1 <= k <= s.length

*/

// Time O(N)
// Space O(1)
const maxVowels = (s, k) => {
  let start = 0;
  let end = 0;
  let set = new Set(['a', 'e', 'i', 'o', 'u']);
  let cnt = 0;
  let max = 0;

  while (end < s.length) {
    if (set.has(s[end])) {
      cnt++;
    }
    end++;

    if (end - start > k) {
      if (set.has(s[start])) {
        cnt--;
      }
      start++;
    }

    max = Math.max(max, cnt);
  }

  return max;
};
