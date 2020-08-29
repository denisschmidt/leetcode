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

// DP
// Time O(N^2)
// Space O(N)
const wordBreak = (s, wordDict) => {
  if (wordDict.length == 0) return false;

  let n = s.length;
  let dp = Array(n + 1).fill(false);

  for (let i = 0; i <= n; i++) {
    for (let word of wordDict) {
      if (word.length + i > s.length) continue;

      if (s.startsWith(word, i)) {
        if (i == 0) {
          dp[0] = true;
          dp[word.length] = true;
        } else {
          if (!dp[word.length + i]) {
            dp[word.length + i] = dp[i];
          }
        }
      }
    }
  }

  return dp[s.length];
};

// DFS
// Time O(N^2)
// Space O(N)
const wordBreak_II = (s, wordDict) => {
  let n = s.length;
  let dp = Array(n).fill(null);
  let set = new Set(wordDict);

  return dfs(0);

  function dfs(start) {
    if (start == n) return true;

    if (dp[start] != null) {
      return dp[start];
    }

    for (let end = start + 1; end <= n; end++) {
      if (set.has(s.substring(start, end)) && dfs(end)) {
        dp[start] = true;
        return true;
      }
    }

    dp[start] = false;
    return false;
  }
};

// BFS
// Time O(N^2)
// Space O(N)
const wordBreak_III = (str, wordDict) => {
  let set = new Set(wordDict);
  let visited = Array(str.length).fill(null);
  let queue = [0];

  while (queue.length) {
    let size = queue.length;

    for (let k = 0; k < size; k++) {
      let start = queue.shift();

      for (let end = start + 1; end <= str.length; end++) {
        if (visited[end]) continue;

        if (set.has(str.substring(start, end))) {
          if (end == str.length) {
            return true;
          }

          queue.push(end);
          // слово начинающееся с индекса start можно найти в словаре
          // это информацию мы запонимаем
          visited[start] = true;
        }
      }
    }
  }

  return false;
};
