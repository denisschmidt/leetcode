/*

Numbers can be regarded as product of its factors. For example,

8 = 2 x 2 x 2;
  = 2 x 4.

Write a function that takes an integer n and return all possible combinations of its factors.

Example 1:
  Input: 1
  Output: []

Example 2:
  Input: 37
  Output:[]

Example 3:
  Input: 12
  Output:
    [
      [2, 6],
      [2, 2, 3],
      [3, 4]
    ]

Example 4:
  Input: 32
  Output:
  [
    [2, 16],
    [2, 2, 8],
    [2, 2, 2, 4],
    [2, 2, 2, 2, 2],
    [2, 4, 4],
    [4, 8]
  ]

Note:
  You may assume that n is always positive.
  Factors should be greater than 1 and less than n.  

*/

// Time O(N!)
// Space O(N!)
const getFactors = n => {
  let ans = [];

  helper(2, n, []);

  return ans;

  function helper(start, end, comb) {
    if (end == 1 && comb.length > 1) {
      ans.push([...comb]);
      return;
    }

    for (let i = start; i <= end; i++) {
      if (end % i == 0) {
        comb.push(i);
        helper(i, end / i, comb);
        comb.pop();
      }
    }
  }
};
