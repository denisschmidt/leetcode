/*
Given two words (beginWord and endWord), and a dictionary's word list, 
find the length of shortest transformation sequence from beginWord to endWord, such that:

Only one letter can be changed at a time.
Each transformed word must exist in the word list. Note that beginWord is not a transformed word.

Note:
  Return 0 if there is no such transformation sequence.
  All words have the same length.
  All words contain only lowercase alphabetic characters.
  You may assume no duplicates in the word list.
  You may assume beginWord and endWord are non-empty and are not the same.

Example 1:

  Input:
    beginWord = "hit",
    endWord = "cog",
    wordList = ["hot","dot","dog","lot","log","cog"]

  Output: 5
    Explanation: As one shortest transformation is "hit" -> "hot" -> "dot" -> "dog" -> "cog",
    return its length 5.

Example 2:

  Input:
    beginWord = "hit"
    endWord = "cog"
    wordList = ["hot","dot","dog","lot","log"]

  Output: 0
    Explanation: The endWord "cog" is not in wordList, therefore no possible transformation.

 */

// Time O(M * N) где M - длина слова, а N - общее количество слов в списке входных слов.
// Space O(M * N)
const ladderLength = (beginWord, endWord, wordList) => {
  let queue = [beginWord];
  let visited = Array(wordList.length).fill(false);
  let cnt = 1;

  while (queue.length) {
    let size = queue.length;
    for (let i = 0; i < size; i++) {
      let s1 = queue.shift();

      if (s1 == endWord) {
        return cnt;
      }

      for (let i = 0; i < wordList.length; i++) {
        if (visited[i] || !oneEditReplace(s1, wordList[i])) continue;
        visited[i] = true;
        queue.push(wordList[i]);
      }
    }
    cnt++;
  }

  return 0;
};

// Time O(M * N) где M - длина слова, а N - общее количество слов в списке входных слов.
// Space O(M * N)
const ladderLength_II = (beginWord, endWord, wordList) => {
  let n = wordList.length;
  let minLen = Number.MAX_VALUE;
  let visited = new Set();
  let queue = [beginWord];
  let depth = [0];

  while (queue.length) {
    let current = queue.shift();
    let d = depth.shift();

    if (current === endWord) {
      minLen = Math.min(minLen, d);
    }

    if (current.length) {
      for (let i = 0; i < n; i++) {
        if (oneEditReplace(current, wordList[i]) && !visited.has(i)) {
          queue.push(wordList[i]);
          depth.push(d + 1);
          visited.add(i);
        }
      }
    }
  }

  return minLen !== Number.MAX_VALUE ? minLen + 1 : 0;
};

function oneEditReplace(s1, s2) {
  if (s1 === s2) return false;
  let foundDifference = false;

  for (let i = 0; i < s1.length; i++) {
    if (s1[i] !== s2[i]) {
      if (foundDifference) {
        return false;
      }
      foundDifference = true;
    }
  }
  return true;
}
