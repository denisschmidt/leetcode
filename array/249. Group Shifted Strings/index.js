/*
Given a string, we can "shift" each of its letter to its successive letter, for example: "abc" -> "bcd".
We can keep "shifting" which forms the sequence:

"abc" -> "bcd" -> ... -> "xyz"
Given a list of strings which contains only lowercase alphabets, group all strings that belong to the same shifting sequence.

Example:

Input: ["abc", "bcd", "acef", "xyz", "az", "ba", "a", "z"],
Output:
[
  ["abc","bcd","xyz"],
  ["az","ba"],
  ["acef"],
  ["a","z"]
]
 */

// Time O(N * Max(Word.Length))
// Space O(N)
const groupStrings = words => {
  if (!words.length) return [];

  let alf = 'abcdefghijklmnopqrstuvwxyz';
  let map = {};
  let ans = [];
  let results = new Map();

  for (let i = 0; i < 26; i++) map[alf[i]] = i + 1;

  for (let word of words) {
    let diff = '';
    for (let i = 1; i < word.length; i++) {
      if (word[i - 1] === word[i]) continue;
      diff += getDiff(word[i - 1], word[i]);
    }

    let key = diff > 0 ? diff : word.length;

    if (!results.has(key)) {
      results.set(key, []);
    }

    results.get(key).push(word);
  }

  for (let result of results.values()) {
    ans.push(result);
  }

  return ans;

  function getDiff(a, b) {
    return map[a] < map[b] ? map[b] - map[a] : 26 - map[a] + map[b];
  }
};
