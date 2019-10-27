/*
Given a pattern and a string str, find if str follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in str.

Example 1:
  Input: pattern = "abba", str = "dog cat cat dog"
  Output: true

Example 2:
  Input:pattern = "abba", str = "dog cat cat fish"
  Output: false

Example 3:
  Input: pattern = "aaaa", str = "dog cat cat dog"
  Output: false

Example 4:
  Input: pattern = "abba", str = "dog dog dog dog"
  Output: false

Notes:
You may assume pattern contains only lowercase letters, and str contains lowercase letters that may be separated by a single space.

 */
// Time O(N)
// Space O(N)
const wordPattern = (pattern, str) => {
  const arr = str.split(' ');
  const set = new Set();

  if (arr.length === 1 && pattern.length > 1) return false;

  const map = new Map();
  for (let i = 0; i < arr.length; i++) {
    const p = pattern[i];
    const s = arr[i];

    if (!map.has(p) && !set.has(s)) {
      map.set(p, s);
      set.add(s);
    }
  }

  let ans = [];
  for (let i = 0; i < pattern.length; i++) {
    if (map.has(pattern[i])) ans.push(map.get(pattern[i]));
  }

  return ans.join(' ') === str;
};
