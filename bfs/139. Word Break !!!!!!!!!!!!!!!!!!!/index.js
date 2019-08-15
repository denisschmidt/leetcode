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

// BFS

// We can use a graph to represent the possible solutions.
// The vertices of the graph are simply the positions of the first characters of the words and each edge actually represents a word.
//
// For example, the input string is "nightmare", there are two ways to break it, "night mare" and "nightmare". The graph would be

// 0-->5-->9
//
// |__ __ _^

// O(n^2) and space complexity is O(n)
const wordBreak2 = function(s, wordDict) {
  let queue = [];
  let set = new Set(wordDict);
  let visited = [];

  visited[0] = true;
  queue.push(0);

  while (queue.length) {
    let start = queue.shift();

    for (let end = start + 1; end <= s.length; end++) {
      if (visited[end]) continue;
      if (set.has(s.substring(start, end))) {
        if (end === s.length) {
          return true;
        }
        // next node
        queue.push(end);
        // is visit this node
        visited[end] = true;
      }
    }
  }
  return false;
};

const res2 = wordBreak2(s, wordDict);
console.log('---', res2);
