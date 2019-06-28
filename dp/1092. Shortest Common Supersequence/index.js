/*

Given two strings str1 and str2, return the shortest string that has both str1 and str2 as subsequences.
If multiple answers exist, you may return any of them.

(A string S is a subsequence of string T if deleting some number of characters from T
(possibly 0, and the characters are chosen anywhere from T) results in the string S.)

Example 1:

  Input: str1 = "abac", str2 = "cab"
  Output: "cabac"
  Explanation:
    str1 = "abac" is a substring of "cabac" because we can delete the first "c".
    str2 = "cab" is a substring of "cabac" because we can delete the last "ac".

The answer provided is the shortest such string that satisfies these properties.

Note:
  1 <= str1.length, str2.length <= 1000
  str1 and str2 consist of lowercase English letters.

abac => cab

   |   | a | b | a | c |
---|--------------------
   | 0 | 1 | 2 | 3 | 4 |
---|--------------------
 c | 1 | 2 | 3 | 4 | 4 |
---|--------------------
 a | 2 | 2 | 3 | 4 | 5 |
---|--------------------
 b | 3 | 3 | 3 | 4 | 5 |
---|--------------------

 */
const shortestCommonSupersequence = function(str1, str2) {
  const s1 = str1.length;
  const s2 = str2.length;

  const dp = [[]];

  for (let i = 0; i <= s1; i++) {
    if (!dp[i]) {
      dp[i] = [];
    }
    for (let j = 0; j <= s2; j++) {
      if (i === 0) {
        dp[i][j] = j;
      } else if (j === 0) {
        dp[i][j] = i;
      } else if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = 1 + dp[i - 1][j - 1];
      } else {
        dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  // shortest sequence
  let index = dp[s1][s2];

  let ans = [];
  let i = s1;
  let j = s2;
  while (i > 0 && j > 0) {
    if (str1[i - 1] === str2[j - 1]) {
      ans[index - 1] = str1[i - 1];
      i--;
      j--;
      index--;
    } else if (dp[i - 1][j] < dp[i][j - 1]) {
      // If not same, then find the larger of two and
      // go in the direction of larger value
      ans[index - 1] = str1[i - 1];
      i--;
      index--;
    } else {
      ans[index - 1] = str2[j - 1];
      j--;
      index--;
    }
  }

  while (i > 0) {
    ans[index - 1] = str1[i - 1];
    i--;
    index--;
  }

  while (j > 0) {
    ans[index - 1] = str2[j - 1];
    j--;
    index--;
  }
  return ans.join('');
};

const res = shortestCommonSupersequence('abac', 'cab');
console.log('---', res);
