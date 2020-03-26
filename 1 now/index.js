/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */

/*

Input:
beginWord = "hit",
endWord = "cog",
wordList = ["hot","dot","dog","lot","log","cog"]

Output: 5

Explanation: As one shortest transformation is "hit" -> "hot" -> "dot" -> "dog" -> "cog",
return its length 5.

*/

var ladderLength = function(beginWord, endWord, wordList) {
  let queue = [beginWord];
  let visited = Array(wordList.length).fill(false);
  let cnt = 0;

  while (queue.length) {
    let size = queue.length;
    for (let i = 0; i < size; i++) {
      let s1 = queue.shift();

      if (s1 == endWord) {
        return cnt;
      }

      for (let i = 0; i < wordList.length; i++) {
        if (visited[i] || !oneReplace(s1, wordList[i])) continue;
        visited[i] = true;
        queue.push(wordList[i]);
      }

      cnt++;
    }
  }

  return 0;

  function oneReplace(s1, s2) {
    if (s1 == s2) return false;
    let found = false;
    for (let i = 0; i < s1.length; i++) {
      if (s1[i] != s2[i]) {
        if (found) {
          return false;
        }
        found = true;
      }
    }
    return true;
  }
};
