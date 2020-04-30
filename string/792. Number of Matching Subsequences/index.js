/*

Given string S and a dictionary of words words, find the number of words[i] that is a subsequence of S.

Example :
  Input: S = "abcde" words = ["a", "bb", "acd", "ace"]
  Output: 3
  Explanation: There are three words in words that are a subsequence of S: "a", "acd", "ace".

Note:
  All words in words and S will only consists of lowercase letters.
  The length of S will be in the range of [1, 50000].
  The length of words will be in the range of [1, 5000].
  The length of words[i] will be in the range of [1, 50].

*/

const numMatchingSubseq = function(S, words) {
  let cnt = 0;
  let memo = new Map();

  for (let word of words) {
    if (memo.has(word) && memo.get(word) == true) {
      cnt++;
      continue;
    }

    if (memo.has(word) && memo.get(word) == false) {
      continue;
    }

    let i = 0;

    while (i < word.length) {
      for (let j = 0; j < S.length; j++) {
        if (word[i] == S[j]) {
          i++;
        }
      }

      if (i != word.length) {
        break;
      }
    }

    if (i == word.length) {
      memo.set(word, true);
      cnt++;
    } else {
      memo.set(word, false);
    }
  }

  return cnt;
};
