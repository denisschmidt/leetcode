/*
A strobogrammatic number is a number that looks the same when rotated 180 degrees (looked at upside down).

Write a function to determine if a number is strobogrammatic. The number is represented as a string.

Example 1:

Input:  "69"
Output: true
Example 2:

Input:  "88"
Output: true
Example 3:

Input:  "962"
Output: false
 */

// Time O(N)
// Space O(1)
const isStrobogrammatic = num => {
  let map = { 0: 0, 1: 1, 6: 9, 9: 6, 8: 8 };

  let lo = 0;
  let hi = num.length - 1;

  while (lo <= hi) {
    if (!(num[lo] in map) || !(num[hi] in map)) return false;
    if (num[hi] != map[num[lo]]) return false;
    if (lo == hi) return num[lo] == 0 || num[lo] == 8 || num[lo] == 1;
    lo++;
    hi--;
  }

  return true;
};
