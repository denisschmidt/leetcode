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
  if (strs.length === 0) return [];
  const map = {};

  for (let str of strs) {
    const key = [...str].sort().join('');

    if (!map[key]) {
      map.set(key, []);
    }

    map[key].push(str);
  }

  return Object.values(map);
};

// Time Limit
// Time O(N^2)
// Space O(N)
const groupAnagrams2 = nums => {
  const n = nums.length;
  const visited = new Set();
  const paths = [];

  for (let i = 0; i < n; i++) {
    if (visited.has(i)) continue;
    let path = [];
    path.push(nums[i]);
    visited.add(i);
    for (let j = i + 1; j < n; j++) {
      if (visited.has(j)) continue;
      if (isValid(path[0], nums[j])) {
        path.push(nums[j]);
        visited.add(j);
      }
    }
    paths.push([...path]);
  }

  return paths;
};
