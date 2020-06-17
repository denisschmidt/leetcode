/*

Given the string s, return the size of the longest substring containing each vowel an even number of times. 

That is, 'a', 'e', 'i', 'o', and 'u' must appear an even number of times.

Example 1:
  Input: s = "eleetminicoworoep"
  Output: 13
  Explanation: The longest substring is "leetminicowor" which contains two each of the vowels: e, i and o and zero of the vowels: a and u.

Example 2:
  Input: s = "leetcodeisgreat"
  Output: 5
  Explanation: The longest substring is "leetc" which contains two e's.

Example 3:
  Input: s = "bcbcbc"
  Output: 6
  Explanation: In this case, the given string "bcbcbc" is the longest because all vowels: a, e, i, o and u appear zero times.
  

Constraints:
  1 <= s.length <= 5 x 10^5
  s contains only lowercase English letters.

*/

// Time O(N)
// Space O(N)
const findTheLongestSubstring = s => {
  let map = [1, 0, 0, 0, 2, 0, 0, 0, 4, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0];
  let mask = 0;
  let prefix = Array(32).fill(-1);
  let res = 0;

  for (let i = 0; i < s.length; i++) {
    let id = s[i].charCodeAt(0) - 97;

    mask = mask ^ map[id];

    if (mask != 0 && prefix[mask] == -1) {
      prefix[mask] = i;
    }
    res = Math.max(res, i - prefix[mask]);
  }

  return res;
};

// Time O(N^2)
// Space O(5*N)
const findTheLongestSubstring_II = s => {
  let n = s.length;
  let res = 0;
  let w = ['a', 'e', 'i', 'o', 'u'];
  let map = {};

  for (let i = 0; i < n; i++) {
    if (res > n - i) break;

    for (let x of w) map[x] = 0;

    for (let j = i; j < n; j++) {
      map[s[j]]++;

      if (map['a'] % 2 == 0 && map['e'] % 2 == 0 && map['i'] % 2 == 0 && map['o'] % 2 == 0 && map['u'] % 2 == 0) {
        res = Math.max(res, j - i + 1);
      }
    }
  }
  return res;
};
