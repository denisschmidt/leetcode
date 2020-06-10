/*

A string S represents a list of words.

Each letter in the word has 1 or more options.  If there is one option, the letter is represented as is.  

If there is more than one option, then curly braces delimit the options.  

For example, "{a,b,c}" represents options ["a", "b", "c"].

For example, "{a,b,c}d{e,f}" represents the list ["ade", "adf", "bde", "bdf", "cde", "cdf"].

Return all words that can be formed in this manner, in lexicographical order.

Example 1:
  Input: "{a,b}c{d,e}f"
  Output: ["acdf","acef","bcdf","bcef"]

Example 2:
  Input: "abcd"
  Output: ["abcd"]
  

Note:
  1 <= S.length <= 50
  There are no nested curly brackets.
  All characters inside a pair of consecutive opening and ending curly brackets are different.

*/

// Time O(5log5^5) при S.length = 50
// Space O(N)
const expand = str => {
  let levels = [];
  let s = '';

  for (let i = 0; i < str.length; i++) {
    if (str[i] == '{') {
      if (s.length > 0) {
        levels.push([s]);
        s = '';
      }

      let j = i + 1;
      while (str[j] != '}') j++;

      levels.push(str.substring(i + 1, j).split(','));
      i = j;
    } else {
      s += str[i];
    }
  }

  if (s.length) levels.push([s]);

  let ans = [];

  helper([], 0);

  return ans.sort();

  function helper(comb, level) {
    if (level > levels.length) return;
    if (level == levels.length) {
      ans.push(comb.join(''));
      return;
    }

    for (let j = 0; j < levels[level].length; j++) {
      comb.push(levels[level][j]);

      helper(comb, level + 1);

      comb.pop();
    }
  }
};
