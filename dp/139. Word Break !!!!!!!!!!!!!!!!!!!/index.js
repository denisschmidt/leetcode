/*

Given a non-empty string s and a dictionary wordDict containing a list of non-empty words, 
determine if s can be segmented into a space-separated sequence of one or more dictionary words.

Note:

The same word in the dictionary may be reused multiple times in the segmentation.
You may assume the dictionary does not contain duplicate words.

Example 1:
  Input: s = "leetcode", wordDict = ["leet", "code"]
  Output: true
  Explanation: Return true because "leetcode" can be segmented as "leet code".

Example 2:
  Input: s = "applepenapple", wordDict = ["apple", "pen"]
  Output: true
  Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
             Note that you are allowed to reuse a dictionary word.

Example 3:
  Input: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
  Output: false

 */

let s = 'leetcode';
let wordDict = ['leet', 'code'];

// DP
// Time O(N^2)
const wordBreak = function(s, wordDict) {
  if (s === null || s.length === 0) return false;

  const dp = Array(s.length + 1).fill(false);

  dp[0] = true;

  for (let i = 1; i <= s.length; i++) {
    for (let j = 0; j < i; j++) {
      if (dp[j] && wordDict.includes(s.substring(i, j))) {
        dp[i] = true;
        break;
      }
    }
  }

  return dp[s.length];
};

const res = wordBreak(s, wordDict);
console.log('---', res);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
