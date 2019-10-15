/*
In an alien language, surprisingly they also use english lowercase letters, but possibly in a different order.
The order of the alphabet is some permutation of lowercase letters.

Given a sequence of words written in the alien language, and the order of the alphabet, return true if and only
if the given words are sorted lexicographicaly in this alien language.

Example 1:
  Input: words = ["hello","leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz"
  Output: true
  Explanation: As 'h' comes before 'l' in this language, then the sequence is sorted.

Example 2:
  Input: words = ["word","world","row"], order = "worldabcefghijkmnpqstuvxyz"
  Output: false
  Explanation: As 'd' comes after 'l' in this language, then words[0] > words[1], hence the sequence is unsorted.

Example 3:
  Input: words = ["apple","app"], order = "abcdefghijklmnopqrstuvwxyz"
  Output: false
  Explanation: The first three characters "app" match, and the second string is shorter (in size.)
  According to lexicographical rules "apple" > "app", because 'l' > '∅', where '∅' is defined
  as the blank character which is less than any other character (More info).
 

Note:

  1 <= words.length <= 100
  1 <= words[i].length <= 20
  order.length == 26
  All characters in words[i] and order are english lowercase letters.


 */
// Time O(N^2)
// Space O(N)
const isAlienSorted = function(words, order) {
  const map = new Map();

  order.split('').forEach((char, val) => map.set(char, val));

  const oldWords = [...words];

  words.sort((a, b) => {
    const max = Math.max(a.length, b.length);
    for (let i = 0; i < max; i++) {
      if (a[i] === b[i]) continue;
      if (map.get(a[i]) < map.get(b[i])) return -1;
      if (map.get(a[i]) > map.get(b[i])) return 1;
    }
    return -1;
  });

  for (let i = 0; i < words.length; i++) {
    if (words[i] !== oldWords[i]) return false;
  }

  return true;
};
