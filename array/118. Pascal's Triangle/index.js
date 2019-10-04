/*
Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.


In Pascal's triangle, each number is the sum of the two numbers directly above it.

Example:

Input: 5
Output:
[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]

 */

// Time O(N^2)
// Space O(N)
const generate = function(numRows) {
  if (numRows === 0) return [];
  if (numRows === 1) return [[1]];

  const ans = [];
  ans.push([1]);
  ans.push([1, 1]);

  for (let i = 2; i < numRows; i++) {
    const cur = ans[ans.length - 1];
    const comb = [1];
    for (let j = 0; j < cur.length - 1; j++) {
      comb.push(cur[j] + cur[j + 1]);
    }
    comb.push(1);

    ans.push(comb);
  }

  return ans;
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Time O(N^2)
// Space O(N)
const generate2 = function(numRows) {
  if (numRows === 0) return [];
  if (numRows === 1) return [[1]];
  const ans = [[1]];

  const comb = help(numRows);

  ans.push(comb);

  return ans;

  function help(num) {
    if (num === 1) return [1];
    if (num === 2) return [1, 1];

    const x = help(num - 1);

    ans.push(x);

    const comb = [1];
    for (let i = 0; i < x.length - 1; i++) {
      comb.push(x[i] + x[i + 1]);
    }
    comb.push(1);

    return comb;
  }
};
