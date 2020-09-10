/*
Given a string S, find the number of different non-empty palindromic subsequences in S,
 and return that number modulo 10^9 + 7.

A subsequence of a string S is obtained by deleting 0 or more characters from S.

A sequence is palindromic if it is equal to the sequence reversed.

Two sequences A_1, A_2, ... and B_1, B_2, ... are different if there is some i for which A_i != B_i.

Example 1:
  Input: S = 'bccb'
  Output: 6

Explanation:
  The 6 different non-empty palindromic subsequences are 'b', 'c', 'bb', 'cc', 'bcb', 'bccb'.
  Note that 'bcb' is counted only once, even though it occurs twice.

Example 2:
  Input: S = 'abcdabcdabcdabcdabcdabcdabcdabcddcbadcbadcbadcbadcbadcbadcbadcba'
  Output: 104860361

Explanation:
  There are 3104860382 different non-empty palindromic subsequences, which is 104860361 modulo 10^9 + 7.

Note:
  The length of S will be in the range [1, 1000].
  Each character S[i] will be in the set {'a', 'b', 'c', 'd'}.
 */

/**
 * @param {string} S
 * @return {number}
 */
const countPalindromicSubsequences = function (s) {
  let mod = 1000000007;
  let l;
  let r;
  const size = s.length;
  const dp = Array(size)
    .fill(null)
    .map(() => Array(size).fill(0));

  for (let i = size - 1; i >= 0; i--) {
    for (let j = i; j < size; j++) {
      if (i === j) {
        dp[i][j] = 1;
      } else if (s[i] !== s[j]) {
        dp[i][j] = (dp[i][j - 1] + dp[i + 1][j] - dp[i + 1][j - 1]) % mod;
      } else {
        dp[i][j] = (2 * dp[i + 1][j - 1]) % mod;
        l = i + 1;
        r = j - 1;

        while (l <= r && s[i] !== s[l]) l++;
        while (l <= r && s[i] !== s[r]) r--;

        if (l > r) {
          dp[i][j] = (2 + dp[i][j]) % mod;
        } else if (l === r) {
          dp[i][j] = (1 + dp[i][j]) % mod;
        } else if (r - l >= 2) {
          dp[i][j] = (dp[i][j] - dp[l + 1][r - 1]) % mod;
        }
      }
      dp[i][j] = (dp[i][j] + mod) % mod;
    }
  }
  return dp[0][size - 1];
};

const res = countPalindromicSubsequences('aaba');
console.log('---', res);

// ====================================================================================================
/**
 * @param {string} S
 * @return {number}
 */

// https://csacademy.com/contest/round-57/task/distinct-palindromes/solution/

var countPalindromicSubsequences2 = function (s) {
  let mod = 1000000007;
  let l;
  let r;
  const size = s.length;
  const dp = Array(size)
    .fill(null)
    .map(() => Array(size).fill(0));

  for (let i = size - 1; i >= 0; i--) {
    for (let j = i; j < size; j++) {
      if (i === j) {
        dp[i][j] = 1;
      } else if (s[i] !== s[j]) {
        dp[i][j] = dp[i][j - 1] + dp[i + 1][j] - dp[i + 1][j - 1];
      } else {
        dp[i][j] = dp[i + 1][j - 1] * 2;
        l = i + 1;
        r = j - 1;

        // linear search ???
        while (l <= r && s[i] !== s[l]) l++;
        while (l <= r && s[i] !== s[r]) r--;

        if (l === r) {
          dp[i][j] = dp[i][j] + 1;
        } else if (l > r) {
          dp[i][j] = dp[i][j] + 2;
        } else {
          dp[i][j] = dp[i][j] - dp[l + 1][r - 1];
        }
      }
      dp[i][j] = (dp[i][j] + mod) % mod;
    }
  }
  return dp[0][size - 1];
};

const input = 'dddcabadcbabccdadccbcabcdacdadcbbbcadaabcddccbcadaddbdbdacbcccddabbbcbcdccdaadabadacacbdbbbadcdaaabb';

const res2 = countPalindromicSubsequences2(input);
console.log('---', res2); // 6

// =====================================================================================================
// wrong answer

const longestPalindrome2 = s => {
  const size = s.length;
  let asn = [];

  const dp = Array(s.length)
    .fill(null)
    .map(() => Array(s.length).fill(null));

  for (let i = size - 1; i >= 0; i--) {
    for (let j = i; j < size; j++) {
      if (s[i] === s[j]) {
        if (j - i > 2) {
          if (dp[i + 1][j - 1]) {
            !asn.includes(s.substring(i, j + 1)) ? asn.push(s.substring(i, j + 1)) : null;

            !asn.includes(s[i] + s[j]) ? asn.push(s[i] + s[j]) : null;
            !asn.includes(s[i] + s[i + 1] + s[j]) ? asn.push(s[i] + s[i + 1] + s[j]) : null;

            dp[i][j] = true;
          }
        } else {
          switch (j - i) {
            case 2:
              !asn.includes(s[i] + s[j]) ? asn.push(s[i] + s[j]) : null;
              !asn.includes(s[i] + s[j - 1] + s[j]) ? asn.push(s[i] + s[j - 1] + s[j]) : null;
              break;
            case 1:
              !asn.includes(s[i] + s[j]) ? asn.push(s[i] + s[j]) : null;
              break;
            default:
              !asn.includes(s[i]) ? asn.push(s[i]) : null;
              break;
          }
          dp[i][j] = true;
        }
      }
    }
  }
  return asn.length;
};

const res3 = longestPalindrome2('aaba');
console.log('---', res3);
