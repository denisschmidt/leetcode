/*
Given a string s and a non-empty string p, find all the start indices of p's anagrams in s.

Strings consists of lowercase English letters only and the length of both strings s and p will not be larger than 20,100.

The order of output does not matter.

Example 1:
  Input: s: "cbaebabacd" p: "abc"
  Output: [0, 6]

  Explanation:
    The substring with start index = 0 is "cba", which is an anagram of "abc".
    The substring with start index = 6 is "bac", which is an anagram of "abc".

Example 2:
  Input: s: "abab" p: "ab"
  Output: [0, 1, 2]

Explanation:
  The substring with start index = 0 is "ab", which is an anagram of "ab".
  The substring with start index = 1 is "ba", which is an anagram of "ab".
  The substring with start index = 2 is "ab", which is an anagram of "ab".

 */

const findAnagrams = (s, p) => {
  let map = {};
  const ans = [];
  for (let x of p) {
    map[x] = ~~map[x] + 1;
  }

  let n = Object.keys(map).length;
  let start = 0;
  let end = 0;
  let cnt = n;

  while (end < s.length) {
    if (s[end] in map) {
      map[s[end]]--;
      if (map[s[end]] === 0) cnt--;
    }
    end++;

    while (cnt === 0) {
      if (s[start] in map) {
        map[s[start]]++;
        if (map[s[start]] > 0) cnt++;
      }
      if (end - start === p.length) ans.push(start);
      start++;
    }
  }

  return ans;
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Time O(N^2)
// Space O(N)
const findAnagrams2 = (s, p) => {
  const ans = [];
  const map = {};
  const set = new Set();

  for (let x of p) {
    map[x] = ~~map[x] + 1;
  }

  for (let i = 0; i < s.length; i++) {
    let cnt = 0;
    const map2 = {};
    const str = s.substring(i, i + p.length);

    if (set.has(str)) {
      ans.push(i);
      continue;
    }

    for (let x of str) {
      map2[x] = ~~map2[x] + 1;
      if (map2[x] === map[x]) {
        cnt++;
      }
    }

    if (cnt === Object.keys(map).length) {
      set.add(str);
      ans.push(i);
    }
  }
  return ans;
};
