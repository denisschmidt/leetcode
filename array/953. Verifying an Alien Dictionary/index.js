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
const isAlienSorted = (words, order) => {
  let map = new Map();
  let i = 0;

  for (let ch of order) {
    map.set(ch, i++);
  }

  let nonSortedWords = [...words];
  words.sort(compare);

  for (let i = 0; i < nonSortedWords.length; i++) {
    if (nonSortedWords[i] != words[i]) {
      return false;
    }
  }

  return true;

  function compare(a, b) {
    for (let i = 0; i < Math.min(a.length, b.length); i++) {
      if (a[i] == b[i]) continue;
      console.log(a[i], b[i], map.get(a[i]) - map.get(b[i]));
      return map.get(a[i]) - map.get(b[i]);
    }
    return a.length - b.length;
  }
};
