/*
Count the number of segments in a string, where a segment is defined to be a contiguous sequence of non-space characters.

Please note that the string does not contain any non-printable characters.

Example:

Input: "Hello, my name is John"
Output: 5

 */

// Time O(N)
// Space O(N)
var countSegments = function(input) {
  let arr = input.trim().split(' ');

  if (!arr.length) return 0;

  let ans = 0;
  for (let s of arr) {
    if (s) ans++;
  }

  return ans;
};
