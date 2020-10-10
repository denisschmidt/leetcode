/*

A Stepping Number is an integer such that all of its adjacent digits have an absolute difference of exactly 1. 

For example, 321 is a Stepping Number while 421 is not.

Given two integers low and high, find and return a sorted list of all the Stepping Numbers in the range [low, high] inclusive.

Example 1:
  Input: low = 0, high = 21
  Output: [0,1,2,3,4,5,6,7,8,9,10,12,21]
 

Constraints:
  0 <= low <= high <= 2 * 10^9

*/

// Time O(N!)
// Space O(N!)
const countSteppingNumbers = (low, high) => {
  let res = [];

  if (low == 0) res.push(0);

  for (let num = 1; num <= 9; num++) {
    dfs(num);
  }

  res.sort((a, b) => a - b);

  return res;

  function dfs(num) {
    if (num > high) {
      return;
    }

    if (num >= low && num <= high) {
      res.push(num);
    }

    for (let i = 0; i <= 9; i++) {
      if (Math.abs((num % 10) - i) != 1) continue;

      dfs(num * 10 + i);
    }
  }
};
