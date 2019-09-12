/*
1119. Remove Vowels from a String

Given a string S, remove the vowels 'a', 'e', 'i', 'o', and 'u' from it, and return the new string.



Example 1:

Input: "leetcodeisacommunityforcoders"
Output: "ltcdscmmntyfrcdrs"
Example 2:

Input: "aeiou"
Output: ""
 */

// Time O(N)
// Space O(1)
const removeVowels = function(s) {
  s = replaceAll(s, 'a', '');
  s = replaceAll(s, 'e', '');
  s = replaceAll(s, 'i', '');
  s = replaceAll(s, 'o', '');
  s = replaceAll(s, 'u', '');
  return s;

  function replaceAll(str, search, replacement) {
    return str.split(search).join(replacement);
  }
};
