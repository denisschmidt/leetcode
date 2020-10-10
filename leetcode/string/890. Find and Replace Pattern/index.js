/*

You have a list of words and a pattern, and you want to know which words in words matches the pattern.

A word matches the pattern if there exists a permutation of letters p so that after replacing every letter x in the pattern with p(x), we get the desired word.

(Recall that a permutation of letters is a bijection from letters to letters: every letter maps to another letter, and no two letters map to the same letter.)

Return a list of the words in words that match the given pattern. 

You may return the answer in any order.

Example 1:
  Input: words = ["abc","deq","mee","aqq","dkd","ccc"], pattern = "abb"
  Output: ["mee","aqq"]
  Explanation: "mee" matches the pattern because there is a permutation {a -> m, b -> e, ...}. 
    "ccc" does not match the pattern because {a -> c, b -> c, ...} is not a permutation,
    since a and b map to the same letter.
 
Note:
  1 <= words.length <= 50
  1 <= pattern.length = words[i].length <= 20

*/

// Time O(N^2)
// Space O(N)
const findAndReplacePattern = (words, pattern) => {
  let ans = [];
  for (let w of words) if (valid(w, pattern)) ans.push(w);

  return ans;

  function valid(s1, s2) {
    let m1 = {};
    let m2 = {};
    s1 = s1.split('');

    for (let i = 0; i < s1.length; i++) {
      m1[s1[i]] = s2[i];
      m2[s2[i]] = s2[i];
    }

    if (Object.keys(m1).length != Object.keys(m2).length) return false;

    for (let i = 0; i < s1.length; i++) s1[i] = m1[s1[i]];

    return s1.join('') == s2;
  }
};
