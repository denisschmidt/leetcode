/*

Given an array of strings, group anagrams together.

Example:
  Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
  Output:
  [
    ["ate","eat","tea"],
    ["nat","tan"],
    ["bat"]
  ]

Note:
  All inputs will be in lowercase.
  The order of your output does not matter.

 */

// Time O(N KlogK) где N - длина строки, а K - максимальная длина строки в строке.
// Внешний цикл имеет сложность O (N), поскольку мы перебираем каждую строку.
// Затем мы сортируем каждую строку за  O(KlogK).
// Space O(NK)
const groupAnagrams = strs => {
  let map = new Map();

  for (let str of strs) {
    let key = [...str].sort().join('');

    if (!map.has(key)) map.set(key, []);

    map.get(key).push(str);
  }

  return Array.from(map.values());
};

// Time O(N^3)
// Space O(N)
const groupAnagrams_II = strs => {
  let visited = Array(strs.length).fill(false);
  let ans = [];
  let map = new Map();

  for (let i = 0; i < strs.length; i++) buildMap(i);

  for (let i = 0; i < strs.length; i++) {
    if (visited[i]) continue;
    let comb = [strs[i]];

    for (let j = 0; j < strs.length; j++) {
      if (i == j || visited[j] || strs[i].length !== strs[j].length) continue;

      if (isAnnagram(i, j)) {
        comb.push(strs[j]);
        visited[j] = true;
      }
    }
    ans.push(comb);
  }
  return ans;

  function isAnnagram(i, j) {
    let m1 = map.get(i);
    let m2 = map.get(j);
    let s = strs[j];
    for (let i = 0; i < s.length; i++) {
      if (!(s[i] in m1) || m1[s[i]] !== m2[s[i]]) return false;
    }
    return true;
  }

  function buildMap(index) {
    let s = strs[index];
    let o = {};
    for (let i = 0; i < s.length; i++) {
      o[s[i]] = ~~o[s[i]] + 1;
    }
    map.set(index, o);
    return map;
  }
};
