/*

Given a non-empty string s and a dictionary wordDict containing
a list of non-empty words, add spaces in s to construct a sentence
where each word is a valid dictionary word. Return all such possible sentences.

  Note:
    The same word in the dictionary may be reused multiple times in the segmentation.
    You may assume the dictionary does not contain duplicate words.

  Example 1:
    Input: s = "catsanddog" wordDict = ["cat", "cats", "and", "sand", "dog"]
    Output: ["cats and dog","cat sand dog"]

  Example 2:
    Input: s = "pineapplepenapple" wordDict = ["apple", "pen", "applepen", "pine", "pineapple"]
    Output:
    [
      "pine apple pen apple",
      "pineapple pen apple",
      "pine applepen apple"
    ]
  Explanation: Note that you are allowed to reuse a dictionary word.

  Example 3:
    Input: s = "catsandog" wordDict = ["cats", "dog", "sand", "and", "cat"]
    Output: []

*/

const wordBreak = (s, wordDict) => {
  let map = new Map();

  return dfs(s);

  function dfs(str) {
    if (map.has(str)) {
      return map.get(str);
    }

    if (str.length == 0) {
      return [''];
    }

    let ans = [];

    for (let word of wordDict) {
      if (str.startsWith(word)) {
        let list = dfs(str.substring(word.length));

        for (let childName of list) {
          ans.push(childName.length == '' ? word : word + ' ' + childName);
        }
      }
    }

    map.set(str, ans);

    return ans;
  }
};
