/*
Given a list of words, each word consists of English lowercase letters.

Let's say word1 is a predecessor of word2 if and only if we can add exactly one letter anywhere in word1 to make it equal to word2.

For example, "abc" is a predecessor of "abac".

A word chain is a sequence of words [word_1, word_2, ..., word_k] with k >= 1, where word_1 is

a predecessor of word_2, word_2 is a predecessor of word_3, and so on.

Return the longest possible length of a word chain with words chosen from the given list of words.


Example 1:
  Input: ["a","b","ba","bca","bda","bdca"]
  Output: 4
  Explanation: one of the longest word chain is "a","ba","bda","bdca".
 

Note:
  1 <= words.length <= 1000
  1 <= words[i].length <= 16
  words[i] only consists of English lowercase letters.

 */

// Time O(N^3)
// Space O(N)
const longestStrChain = words => {
  const dp = Array(words.length).fill(1);
  let ans = 1;

  words.sort((a, b) => a.length - b.length);

  for (let i = 1; i < words.length; i++) {
    for (let j = 0; j < i; j++) {
      if (words[j].length + 1 === words[i].length && oneEditInsert(words[j], words[i])) {
        dp[i] = Math.max(dp[j] + 1, dp[i]);
      }
    }
    ans = Math.max(ans, dp[i]);
  }

  return ans;

  function oneEditInsert(s1, s2) {
    let index1 = 0;
    let index2 = 0;

    while (index1 < s1.length && index2 < s2.length) {
      if (s1[index1] !== s2[index2]) {
        if (index1 !== index2) return false;
        index2++;
      } else {
        index1++;
        index2++;
      }
    }

    return true;
  }
};
