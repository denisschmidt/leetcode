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

const alienOrder = words => {
  if (!words || words.length === 0) {
    return '';
  }

  if (words.length === 1) {
    return words[0];
  }

  const adjList = new Map();

  for (let i = 0; i < words.length - 1; i++) {
    const w1 = words[i];
    const w2 = words[i + 1];

    for (let i = 0; i < Math.max(w1.length, w2.length); i++) {}
  }
};
