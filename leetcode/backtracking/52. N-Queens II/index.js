/*
The n-queens puzzle is the problem of placing n queens on an n×n chessboard such that no two queens attack each other.

Given an integer n, return the number of distinct solutions to the n-queens puzzle.

Example:

Input: 4
Output: 2
Explanation: There are two distinct solutions to the 4-queens puzzle as shown below.
[
 [".Q..",  // Solution 1
  "...Q",
  "Q...",
  "..Q."],

 ["..Q.",  // Solution 2
  "Q...",
  "...Q",
  ".Q.."]
]
 */

// Time O(N!)
// Space O(N)
const totalNQueens = function (n) {
  let ans = 0;

  backtrack([], 0);

  return ans;

  function backtrack(comb, row) {
    if (row === n) {
      ans++;
      return n;
    } else
      for (let i = 0; i < n; i++) {
        comb.push(i);

        if (isValid(comb)) backtrack(comb, row + 1);

        comb.pop();
      }
  }

  function isValid(comb) {
    const size = comb.length - 1;
    const last = comb[comb.length - 1];

    for (let i = 0; i < size; i++) {
      let diff = Math.abs(comb[i] - last);

      // проверяем под и диагональ
      if (diff === 0 || diff === size - i) return false;
    }

    return true;
  }
};
