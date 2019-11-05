/*
You are given a string, s, and a list of words, words, that are all of the same length.
Find all starting indices of substring(s) in s that is a concatenation
of each word in words exactly once and without any intervening characters.

Example 1:
  Input: s = "barfoothefoobarman", words = ["foo","bar"]
  Output: [0,9]
  Explanation: Substrings starting at index 0 and 9 are "barfoo" and "foobar" respectively.
  The output order does not matter, returning [9,0] is fine too.

Example 2:
  Input: s = "wordgoodgoodgoodbestword", words = ["word","good","best","word"]
  Output: []


wordgood goodgoodbestword


 */

// Time O(N * Num) где Num - words.length * words[0].length
// O(words.length)
const findSubstring = function(s, words) {
  if (!words || words.length === 0) return [];

  const map = {};
  const n = words.length;
  const m = words[0].length;
  const totalLength = n * m;
  const ans = [];

  for (let w of words) {
    map[w] = ~~map[w] + 1;
  }

  for (let i = 0; i < s.length - totalLength + 1; i++) {
    const temp = { ...map };
    for (let j = i; j < i + totalLength; j = j + m) {
      const str = s.substr(j, m);
      if (!(str in temp)) {
        break;
      }

      if (--temp[str] === 0) {
        delete temp[str];
      }
    }

    if (Object.keys(temp).length === 0) {
      ans.push(i);
    }
  }
  return ans;
};

const res = findSubstring('barfoothefoobarman', ['foo', 'bar']);
console.log(res);
