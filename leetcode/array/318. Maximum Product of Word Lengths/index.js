/*

Given a string array words, find the maximum value of length(word[i]) * length(word[j]) 
where the two words do not share common letters. You may assume that each word will contain only lower case letters. 
If no such two words exist, return 0.

Example 1:
  Input: ["abcw","baz","foo","bar","xtfn","abcdef"]
  Output: 16 
  Explanation: The two words can be "abcw", "xtfn".

Example 2:
  Input: ["a","ab","abc","d","cd","bcd","abcd"]
  Output: 4 
  Explanation: The two words can be "ab", "cd".

Example 3:
  Input: ["a","aa","aaa","aaaa"]
  Output: 0 
  Explanation: No such pair of words.

*/

const maxProduct = words => {
  let n = words.length;
  let ans = 0;

  for (let i = 0; i < n; i++) {
    let map = buildMap(words[i]);
    for (let j = i + 1; j < n; j++) {
      if (!hasCommon(words[j], map) && ans < words[i].length * words[j].length) {
        ans = words[i].length * words[j].length;
      }
    }
  }

  return ans;

  function buildMap(s) {
    let map = {};
    for (let i = 0; i < s.length; i++) map[s[i]] = ~~map[s[i]] + 1;
    return map;
  }

  function hasCommon(s, map) {
    for (let i = 0; i < s.length; i++) if (s[i] in map) return true;
    return false;
  }
};
