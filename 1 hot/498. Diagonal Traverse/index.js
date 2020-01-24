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

// Time O(N*M)
// Space O(min(N, M))
const findDiagonalOrder = function(matrix) {
  if (matrix.length === 0) {
    return [];
  }

  let n = matrix.length;
  let m = matrix[0].length;
  let nums = [];

  for (let i = 0; i < n + m - 1; i++) {
    let comb = [];

    // если i > m тогда мы считаем разницу между ними и добавляем + 1
    let r = i < m ? 0 : i - m + 1;

    // если i > m тогда возвращаемся на последнюю ячейку
    let c = i < m ? i : m - 1;

    while (r < n && c > -1) {
      comb.push(matrix[r][c]);
      c--;
      r++;
    }

    if (i % 2 === 0) {
      comb.reverse();
    }

    nums = [...nums, ...comb];
  }

  return nums;
};

// Time O(N^3)
// Space O(N^2)
const findDiagonalOrder_II = function(matrix) {
  if (matrix.length === 0) {
    return [];
  }

  let n = matrix.length;
  let m = matrix[0].length;
  let set = new Set();
  let cnt = 0;
  let ans = [];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (!set.has(`${i}_${j}`)) {
        let comb = helper(i, j, []);

        if (cnt % 2 === 0) comb.reverse();

        ans.push(comb);

        cnt++;
      }
    }
  }

  return ans.reduce((acc, item) => {
    return [...acc, ...item];
  }, []);

  function helper(i, j, comb) {
    if (i < 0 || j < 0 || i >= n || j >= m) return comb;

    set.add(`${i}_${j}`);
    comb.push(matrix[i][j]);

    return helper(i + 1, j - 1, comb);
  }
};
