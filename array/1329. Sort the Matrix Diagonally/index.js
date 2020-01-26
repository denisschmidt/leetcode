/*
Given a m * n matrix mat of integers, sort it diagonally in ascending order from the top-left 
to the bottom-right then return the sorted array.

 
Example 1:
  Input: mat = [[3,3,1,1],[2,2,1,2],[1,1,1,2]]
  Output: [[1,1,1,1],[1,2,2,2],[1,2,3,3]]
 

Constraints:
  m == mat.length
  n == mat[i].length
  1 <= m, n <= 100
  1 <= mat[i][j] <= 100

*/

// Time: O((m+n)*diagonal*log(diagonal), m is the number of rows, n is the number of columns of matrix mat, diagonal = min(m, n)
// Space O(diagonal)
const diagonalSort = matrix => {
  if (matrix.length === 0) {
    return matrix;
  }

  let n = matrix.length;
  let m = matrix[0].length;

  for (let i = 0; i < n + m - 1; i++) {
    let row = i < m ? 0 : i - m + 1;
    let col = i < m ? i : m - 1;

    helper(row, col);
  }

  for (let i = 1; i < n; i++) {
    let row = i;
    let col = 0;

    helper(row, col);
  }

  function helper(row, col) {
    let ans = [];
    let x = row;
    let y = col;

    while (x < n && y < m) {
      ans.push(matrix[x][y]);
      x++;
      y++;
    }

    x = row;
    y = col;

    let k = 0;
    ans.sort((a, b) => a - b);

    while (x < n && y < m && k < ans.length) {
      matrix[x][y] = ans[k];
      k++;
      x++;
      y++;
    }
  }

  return matrix;
};

let r = diagonalSort([
  [3, 3, 1, 1],
  [2, 2, 1, 2],
  [1, 1, 1, 2],
]);

console.log(r);
