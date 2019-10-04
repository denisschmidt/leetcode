/*
Given a non-empty string s and a dictionary wordDict containing
a list of non-empty words, add spaces in s to construct a sentence
where each word is a valid dictionary word. Return all such possible sentences.

Note:

  The same word in the dictionary may be reused multiple times in the segmentation.
  You may assume the dictionary does not contain duplicate words.

Example 1:
  Input:
  s = "catsanddog"
  wordDict = ["cat", "cats", "and", "sand", "dog"]
  Output:
  [
    "cats and dog",
    "cat sand dog"
  ]

Example 2:
  Input:
  s = "pineapplepenapple"
  wordDict = ["apple", "pen", "applepen", "pine", "pineapple"]
  Output:
  [
    "pine apple pen apple",
    "pineapple pen apple",
    "pine applepen apple"
  ]
  Explanation: Note that you are allowed to reuse a dictionary word.

Example 3:
  Input:
  s = "catsandog"
  wordDict = ["cats", "dog", "sand", "and", "cat"]
  Output:
  []

 */

const wordBreak = function(str, wordDict) {
  const map = new Map();

  return dfs(str);

  function dfs(s) {
    const ans = [];

    if (map.has(s)) {
      return map.get(s);
    }

    if (s.length === 0) {
      ans.push('');
      return ans;
    }

    for (let i = 0; i < wordDict.length; i++) {
      const word = wordDict[i];
      if (s.startsWith(word)) {
        const subList = dfs(s.substring(word.length));

        for (let sub of subList) {
          ans.push(word + (sub.length ? ' ' : '') + sub);
        }
      }
    }

    map.set(s, ans);
    return ans;
  }
};

const res = wordBreak('catsanddog', ['cat', 'cats', 'and', 'sand', 'dog']);
console.log(res);
