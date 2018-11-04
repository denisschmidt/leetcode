/*
Given a list of unique words,
find all pairs of distinct indices (i, j) in the given list,

so that the concatenation of the two words, i.e. words[i] + words[j] is a palindrome.

Example 1:

Input: ["abcd","dcba","lls","s","sssll"]
Output: [[0,1],[1,0],[3,2],[2,4]]
Explanation: The palindromes are ["dcbaabcd","abcddcba","slls","llssssll"]
Example 2:

Input: ["bat","tab","cat"]
Output: [[0,1],[1,0]]
Explanation: The palindromes are ["battab","tabbat"]

 */
/**
 *
 * @param s {string}
 * @returns {boolean}
 */
const isPalindromic = function (s) {
  let left = 0; right = s.length - 1;

  while(left < right) {
    if (s[left] !== s[right]) {
      return false
    }
    left++;
    right--;
  }
  return true;
}

/**
 * @param {string[]} words
 * @return {number[][]}
 */
var palindromePairs = function(words) {
  const size = words.length;
  const res = [];

  for (let i = 0; i <= size - 1; i++) {
    for (let j = 0; j <= size - 1; j++) {
      if (i === j) {
        continue;
      }
      console.log('---', i, j);
      if (isPalindromic(words[i] + words[j])) {
        let arr = [i, j]
        res.push(arr);
      }
    }
  }
  return res;
};

const res = palindromePairs(["bat","tab","cat"]);

console.log('---', res);
