/*
Given two words (beginWord and endWord), and a dictionary's 
word list, find the length of shortest transformation sequence from beginWord to endWord, such that:

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

const ladderLength = function(beginWord, endWord, wordList) {
  if (!wordList.includes(endWord)) return 0;

  let ans = Number.MAX_VALUE;
  let queue = [];
  queue.push(beginWord);
  const visited = new Set();
  const map = new Map();
  map.set(beginWord, 1);

  while (queue.length) {
    let char = queue.shift();

    if (queue.includes(endWord) || char === endWord) {
      ans = Math.min(ans, map.get(endWord));
    }

    wordList.forEach((word, index) => {
      if (oneEditReplace(word, char) && !visited.has(index)) {
        visited.add(index);
        queue.push(word);

        if (map.has(char)) {
          map.set(word, map.get(char) + 1);
        } else {
          map.set(word, 1);
        }
      }
    });
  }

  return ans === Number.MAX_VALUE ? 0 : ans;
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
