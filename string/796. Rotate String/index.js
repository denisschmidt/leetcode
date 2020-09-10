/*
We are given two strings, A and B.

A shift on A consists of taking string A and moving the leftmost character to the rightmost position. For example, if A = 'abcde', then it will be 'bcdea' after one shift on A. Return True if and only if A can become B after some number of shifts on A.

Example 1:
  Input: A = 'abcde', B = 'cdeab'
  Output: true

Example 2:
  Input: A = 'abcde', B = 'abced'
  Output: false

Note:
  A and B will have length at most 100.
 */

// Time O(N^2)
// Space O(N)
const rotateString = function (s1, s2) {
  return s1.length === s2.length && (s1 + s1).indexOf(s2) > -1;
};

// Time O(N^2)
// Space O(1)
const rotateString = function (s1, s2) {
  let i = 0;
  while (s1 !== s2 && i < s1.length) {
    s1 = s1.slice(1) + s1.slice(0, 1);
    i++;
  }
  return s1 === s2;
};
