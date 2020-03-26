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

/*
  
  BFS

  We can use a graph to represent the possible solutions.
  The vertices of the graph are simply the positions of the first characters of the words and each edge actually represents a word.

  For example, the input string is "nightmare", there are two ways to break it, "night mare" and "nightmare". The graph would be

  0-->5-->9

  |__ __ _^

/*

Рассмотрим наихудший случай
S = "aaaaaaa" и каждый префикс S присутствует в словаре слов
Тогда дерево рекурсии может вырасти до N ^ N 

*/

// Time O(N^2)
// Space O(N)
const wordBreak = (str, wordDict) => {
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

// Time O(N^2)
// Space O(N)
const wordBreak_II = (s, wordDict) => {
  let set = new Set(wordDict);
  let memo = Array(s.length).fill(null);

  return dfs(0, memo);

  function dfs(start, memo) {
    if (start === s.length) return true;

    if (memo[start] !== null) {
      return memo[start];
    }

    for (let end = start + 1; end <= s.length; end++) {
      if (set.has(s.substring(start, end)) && dfs(end, memo)) {
        memo[start] = true;
        return true;
      }
    }

    memo[start] = false;
    return false;
  }
};
