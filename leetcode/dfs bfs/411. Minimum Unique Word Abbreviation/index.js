/*

A string such as "word" contains the following abbreviations:

["word", "1ord", "w1rd", "wo1d", "wor1", "2rd", "w2d", "wo2", "1o1d", "1or1", "w1r1", "1o2", "2r1", "3d", "w3", "4"]
Given a target string and a set of strings in a dictionary, find an abbreviation of this target string with the smallest possible length such that it does not conflict with abbreviations of the strings in the dictionary.

Each number or letter in the abbreviation is considered length = 1. 
For example, the abbreviation "a32bc" has length = 4.

Note:
  In the case of multiple answers as shown in the second example below, you may return any one of them.
  Assume length of target string = m, and dictionary size = n. You may assume that m ≤ 21, n ≤ 1000, and log2(n) + m ≤ 20.

Examples: 
  "apple", ["blade"] -> "a4" (because "5" or "4e" conflicts with "blade")
  "apple", ["plain", "amber", "blade"] -> "1p3" (other valid answers include "ap3", "a3e", "2p2", "3le", "3l1").

*/

// Brute force

// Time O(N * 2^N + NLogN + N)
// Space O(N)
const minAbbreviation = (target, dictionary) => {
  let res = [];

  helper(0, '', 0);

  res.sort((a, b) => a.length - b.length);

  for (let abbr of res) {
    let found = false;
    for (let x of dictionary) {
      if (validWordAbbreviation(x, abbr)) {
        found = true;
        break;
      }
    }
    if (!found) return abbr;
  }

  return '';

  function helper(pos, current, count) {
    if (pos == target.length) {
      if (count > 0) current += count;
      res.push(current);
      return;
    }

    helper(pos + 1, current, count + 1);
    helper(pos + 1, current + (count > 0 ? count : '') + target[pos], 0);
  }

  function validWordAbbreviation(word, abbr) {
    let j = 0;
    let i = 0;

    for (; i < abbr.length; i++) {
      let num = '';

      if (abbr[i] == 0 && word[i]) return false;

      while (Number.isInteger(+abbr[i])) {
        num += abbr[i];
        i++;
      }

      if (num != '') {
        j += parseInt(num);
      }

      if (abbr[i] != word[j] || i > word.length || j > word.length) {
        return false;
      }
      j++;
    }

    return i >= abbr.length - 1 && j >= word.length;
  }
};
