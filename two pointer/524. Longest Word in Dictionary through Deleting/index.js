/*

Given a string and a string dictionary, find the longest string in the dictionary that can be formed by deleting some characters of the given string. 

If there are more than one possible results, return the longest word with the smallest lexicographical order. 

If there is no possible result, return the empty string.

Example 1:
  Input: s = "abpcplea", d = ["ale","apple","monkey","plea"]
  Output: "apple"

Example 2:
  Input: s = "abpcplea", d = ["a","b","c"]
  Output: "a"

Note:
  All the strings in the input will only contain lower-case letters.
  The size of the dictionary won't exceed 1,000.
  The length of all the strings in the input won't exceed 1,000.

*/

// Time O(N*K)
// Space O(1)
const findLongestWord = (s, d) => {
  let res = '';
  let maxLen = 0;

  for (let word of d) {
    let p1 = 0;
    let p2 = 0;

    while (p1 < s.length && p2 < word.length) {
      if (s[p1] == word[p2]) {
        p1++;
        p2++;
      } else {
        p1++;
      }
    }

    if (p2 == word.length) {
      if (word.length > maxLen) {
        maxLen = word.length;
        res = word;
      } else if (word.length == maxLen && word < res) {
        res = word;
      }
    }
  }

  return res;
};
