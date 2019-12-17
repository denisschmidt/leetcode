/*
There is a new alien language which uses the latin alphabet. 
However, the order among letters are unknown to you. 

You receive a list of non-empty words from the dictionary
Where words are sorted lexicographically by the rules of this new language.

Derive the order of letters in this language.

Example 1:

  Input:
  [
    "wrt",
    "wrf",
    "er",
    "ett",
    "rftt"
  ]

  Output: "wertf"
  
Example 2:
  Input:
  [
    "z",
    "x"
  ]

  Output: "zx"

Example 3:
  Input:
  [
    "z",
    "x",
    "z"
  ] 

  Output: "" 

  Explanation: The order is invalid, so return "".

Note:

  You may assume all letters are in lowercase.
  You may assume that if a is a prefix of b, then a must appear before b in the given dictionary.
  If the order is invalid, return an empty string.
  There may be multiple valid order of letters, return any one of them is fine.
*/

// Topology Traversal Sort

// Time O(Max(U, V))
// Space O(Max(U, V))
const alienOrder = words => {
  if (!words || words.length === 0) {
    return '';
  }

  if (words.length === 1) {
    return words[0];
  }

  const adjList = new Map();

  // строим граф
  for (let i = 0; i < words.length - 1; i++) {
    let w1 = words[i];
    let w2 = words[i + 1];
    let found = false;

    for (let i = 0; i < Math.max(w1.length, w2.length); i++) {
      let c1 = w1[i];
      let c2 = w2[i];

      if (c1 && !adjList.has(c1)) {
        adjList.set(c1, []);
      }

      if (c2 && !adjList.has(c2)) {
        adjList.set(c2, []);
      }

      // Находим только первое соотношение того что с1 !== c2
      // Сравнение после этого символа бессмысленно.
      // Например, «zab» и «zcd», мы знаем, что «a» предшествует «c», мы не можем определить соотношение между «b» и «d»,
      // Поэтому после добавления «a» и «c» в hashmap, нам нужно установть found = true
      // Иначе  получите неправильный ответ.
      if (c1 && c2 && c1 !== c2 && !found) {
        adjList.set(c1, [...adjList.get(c1), c2]);
      }
    }
  }

  const visited = new Set();
  const stack = new Set();
  const ans = [];
  const vertices = [...adjList.keys()];

  // topological sort
  for (let i = 0; i < vertices.length; i++) {
    if (hasCycle(vertices[i])) {
      return '';
    }
  }

  return ans.reverse().join('');

  function hasCycle(u) {
    if (visited.has(u)) {
      return false;
    }

    visited.add(u);
    stack.add(u);

    const neighbors = adjList.get(u);

    for (let i = 0; i < neighbors.length; i++) {
      const v = neighbors[i];

      if (stack.has(v)) {
        return true;
      }

      if (!visited.has(v) && hasCycle(v)) {
        return true;
      }
    }

    stack.delete(u); // backtrack
    ans.push(u);

    return false;
  }
};
