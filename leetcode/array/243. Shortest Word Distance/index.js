/*
Given a list of words and two words word1 and word2, return the shortest distance between these two words in the list.

Example:
  Assume that words = ["practice", "makes", "perfect", "coding", "makes"].

  Input: word1 = “coding”, word2 = “practice”
  Output: 3

  Input: word1 = "makes", word2 = "coding"
  Output: 1

Note:
You may assume that word1 does not equal to word2, and word1 and word2 are both in the list.

 */
// Time O(N)
// Space O(1)
var shortestDistance = function (words, word1, word2) {
  if (!words || words.length === 0) return;

  let leftIndex = -1;
  let rightIndex = -1;
  let minDiff = Number.MAX_VALUE;

  for (let i = 0; i < words.length; i++) {
    let word = words[i];

    if (word === word1) {
      leftIndex = i;
    } else if (word === word2) {
      rightIndex = i;
    }

    if (leftIndex !== -1 && rightIndex !== -1) {
      minDiff = Math.min(minDiff, Math.abs(leftIndex - rightIndex));
    }
  }

  return minDiff;
};
