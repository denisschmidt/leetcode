/*

A message containing letters from A-Z is being encoded to numbers using the following mapping:

'A' -> 1
'B' -> 2
...
'Z' -> 26

Given a non-empty string containing only digits, determine the total number of ways to decode it.

Example 1:
  Input: "12"
  Output: 2
  Explanation: It could be decoded as "AB" (1 2) or "L" (12).

Example 2:
  Input: "226"
  Output: 3
  Explanation: It could be decoded as "BZ" (2 26), "VF" (22 6), or "BBF" (2 2 6).


 */

// Time: should be O(n), where n is the length of String
// Space: should be O(n), where n is the length of String
const numDecodings = function(s) {
  const size = s.length;
  if (s == null || size == 0) {
    return 0;
  }

  const dp = new Array(size).fill(0);

  dp[0] = s[0] == 0 ? 0 : 1;

  for (let i = 1; i < size; i++) {
    let current = Number(s[i]);
    let prev = Number(s[i - 1]);

    if (current >= 1 && current <= 9) {
      dp[i] = dp[i - 1];
    }

    if ((prev === 1 && current >= 0 && current <= 9) || (prev === 2 && current >= 0 && current <= 6)) {
      dp[i] += i >= 2 ? dp[i - 2] : 1;
    }
  }
  return dp[size - 1];
};

const res = numDecodings('10');
console.log('---', res);
