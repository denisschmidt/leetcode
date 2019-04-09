/*
Given a string, sort it in decreasing order based on the frequency of characters.

Example 1:
  Input:
  "tree"

  Output:
  "eert"

  Explanation:
  'e' appears twice while 'r' and 't' both appear once.
  So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.

Example 2:
  Input:
  "cccaaa"

  Output:
    "cccaaa"

  Explanation:
  Both 'c' and 'a' appear three times, so "aaaccc" is also a valid answer.
  Note that "cacaca" is incorrect, as the same characters must be together.

Example 3:
  Input:
    "Aabb"

  Output:
    "bbAa"

Explanation:
  "bbaA" is also a valid answer, but "Aabb" is incorrect.
  Note that 'A' and 'a' are treated as two different characters.
 */

// Time complexity : O(n)
// Space complexity : O(n)

/**
 * @param {string} s
 * @return {string}
 */
const frequencySort = s => {
  const arr = s.split('');
  const size = arr.length;
  const map = new Map();

  for (let i = 0; i < size; i++) {
    let char = arr[i];
    if (!map.has(char)) {
      map.set(char, 1);
    } else {
      map.set(char, map.get(char) + 1);
    }
  }

  let A = [];
  for (let [key, value] of map) {
    let str = '';
    for (let i = 0; i < value; i++) {
      str = str + key;
    }
    A.push(str);
  }

  A.sort((a, b) => b.length - a.length);
  return A.join('');
};

const res = frequencySort('tree');
console.log('====', res);
