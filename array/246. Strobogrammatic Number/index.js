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
const isStrobogrammatic = function(x) {
  const map = { 0: 0, 1: 1, 6: 9, 9: 6, 8: 8 };

  let l = 0;
  let r = x.length - 1;

  while (l <= r) {
    if (!(x[l] in map)) return false;
    if (map[x[l]] !== x[r]) return false;

    l++;
    r--;
  }

  return true;
};
