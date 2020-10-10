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

// Time O(N + NLogN)
// Space O(N)
const frequencySort = s => {
  let map = {};

  for (let x of s) {
    map[x] = ~~map[x] + 1;
  }

  let bucket = [];
  for (let ch of Object.keys(map)) {
    let cnt = map[ch];
    let x = '';

    while (cnt-- > 0) {
      x += ch;
    }

    bucket.push(x);
  }

  bucket.sort((a, b) => b.length - a.length);

  return bucket.join('');
};
