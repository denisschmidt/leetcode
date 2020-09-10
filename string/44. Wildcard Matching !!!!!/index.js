/*
Given an input string (s) and a pattern (p),
implement wildcard pattern matching with support for '?' and '*'.

IMPORTANT:
'?' Matches any single character.
'*' Matches any sequence of characters (including the empty sequence).

The matching should cover the entire input string (not partial).

Note:
  s could be empty and contains only lowercase letters a-z.
  p could be empty and contains only lowercase letters a-z, and characters like ? or *.

Example 1:

  Input:
    s = "aa"
    p = "a"
  Output: false
  Explanation: "a" does not match the entire string "aa".


Example 2:

  Input:
    s = "aa"
    p = "*"
  Output: true
  Explanation: '*' matches any sequence.


Example 3:

  Input:
    s = "cb"
    p = "?a"
  Output: false
  Explanation: '?' matches 'c', but the second letter is 'a', which does not match 'b'.

Example 4:

  Input:
    s = "adceb"
    p = "*a*b"
  Output: true
  Explanation: The first '*' matches the empty sequence, while the second '*' matches the substring "dce".

Example 5:

  Input:
    s = "acdcb"
    p = "a*c?b"
  Output: false


  The basic idea is to have one pointer for the string and one pointer for the pattern.
  This algorithm iterates at most length(string) + length(pattern) times, for each iteration,
  at least one pointer advance one step.
 */

/**

 Analytics: !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

 For each element in s
 If s == p or p == ? which means this is a match, then goes to next element s++ p++.
 If p == '*', this is also a match, but one or many chars may be available,
  so let us save this *'s position and the matched s position.

 If not match, then we check if there is a * previously showed up,
 if there is no *,  return false;
 if there is an *,  we set current p to the next element of *, and set current s to the next saved s position.


 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
const isMatch = function (str, pattern) {
  let s = 0,
    p = 0,
    match = 0,
    startIdx = -1;

  while (s < str.length) {
    if (p < pattern.length && (pattern[p] === '?' || str[s] === pattern[p])) {
      s++;
      p++;
    } else if (p < pattern.length && pattern[p] === '*') {
      startIdx = p;
      match = s;
      p++;
    } else if (startIdx !== -1) {
      p = startIdx + 1;
      match++;
      s = match;
    } else {
      return false;
    }
  }
  // check for remaining characters in pattern
  while (p < pattern.length && pattern[p] === '*') p++;

  return p === pattern.length;
};

const res = isMatch('adceb', '*a*b');

console.log(res);
