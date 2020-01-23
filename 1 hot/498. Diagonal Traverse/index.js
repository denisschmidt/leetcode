/*
Given a matrix of M x N elements (M rows, N columns), return all elements of the matrix in diagonal 
order as shown in the below image.

 
Example:
  Input:
  [
  [ 1, 2, 3 ],
  [ 4, 5, 6 ],
  [ 7, 8, 9 ]
  ]

  Output:  [1,2,4,7,5,3,6,8,9]

Explanation:

Note: The total number of elements of the given matrix will not exceed 10,000.
*/

const findDiagonalOrder = function(matrix) {
  let n = matrix.length;
  let m = matrix[0].length;
  let ans = [matrix[0][0]];
  let check = false;

  for (let j = 1; j < n; j++) {
    let comb = helper(0, j, []);
  }

  return ans;

  function helper(i, j, comb) {
    if (i < 0 || j < 0 || i >= n || j >= n) return comb;
    comb.push(matrix[i][j]);
    return helper(i + 1, j - 1);
  }
};
