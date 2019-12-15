/*
For strings S and T, we say "T divides S" if and only if S = T + ... + T  (T concatenated with itself 1 or more times)

Return the largest string X such that X divides str1 and X divides str2.

Example 1:
  Input: str1 = "ABCABC", str2 = "ABC"
  Output: "ABC"

Example 2:
  Input: str1 = "ABABAB", str2 = "ABAB"
  Output: "AB"

Example 3:
  Input: str1 = "LEET", str2 = "CODE"
  Output: ""

Note:
  1 <= str1.length <= 1000
  1 <= str2.length <= 1000
  str1[i] and str2[i] are English uppercase letters.

 */

// Time O(N * K) где K - равно недению str1 / X
// Space O(N)

const gcdOfStrings = (str1, str2) => {
  let len = str2.length;

  while (len > 0) {
    let s2 = str2.substring(0, len);
    let first = s2;

    while (first.length < str1.length) first += s2;

    if (str1 === first) {
      let second = s2;

      while (second.length < str2.length) {
        second += s2;
      }

      if (str2 === second) return s2;
    }
    len = len * 2 > str2 ? Math.floor(len / 2) : len - 1;
  }

  return '';
};
let s1 = 'ABZABZ';
let s2 = 'ABC';

const res = gcdOfStrings(s1, s2);
console.log(res);
