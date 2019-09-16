/*
Given a list of words and two words word1 and word2, return the shortest distance between these two words in the list.

word1 and word2 may be the same and they represent two individual words in the list.

Example:
  Assume that words = ["practice", "makes", "perfect", "coding", "makes"].
  Input: word1 = “makes”, word2 = “coding”
  Output: 1

  Input: word1 = "makes", word2 = "makes"
  Output: 3

Note:
  You may assume word1 and word2 are both in the list.

 */

// Time O(N)
// Space O(1)
const shortestWordDistance = function(words, word1, word2) {
  let index1 = -1;
  let index2 = -1;
  let ans = Number.MAX_VALUE;

  for (let i = 0; i < words.length; i++) {
    let word = words[i];

    if (word === word1) index1 = i;

    if (word === word2) {
      if (word1 !== word2) {
        index2 = i;
      } else {
        if (index2 === -1) index2 = i;
        else {
          ans = Math.min(ans, Math.abs(index1 - index2));
          index2 = i;
        }
      }
    }

    if (index1 !== -1 && index2 !== -1 && word1 !== word2) {
      ans = Math.min(ans, Math.abs(index1 - index2));
    }
  }

  return ans;
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Time O(N^2)
// Space O(N)
const shortestWordDistance2 = (words, word1, word2) => {
  const map = new Map();

  for (let i = 0; i < words.length; i++) {
    if (!map.has(words[i])) {
      map.set(words[i], [i]);
    } else {
      map.set(words[i], [...map.get(words[i]), i]);
    }
  }

  const arr1 = map.get(word1);
  const arr2 = map.get(word2);

  const isEqual = word1 === word2;
  let ans = Number.MAX_VALUE;

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (isEqual && i === j) continue;
      ans = Math.min(ans, Math.abs(arr1[i] - arr2[j]));
    }
  }

  return ans;
};
