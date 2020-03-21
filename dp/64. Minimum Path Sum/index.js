/*

Given a m x n grid filled with non-negative numbers, 
find a path from top left to bottom right which minimizes the sum of all numbers along its path.

Note: You can only move either down or right at any point in time.

Example:
  Input:
  [
    [1,3,1],
    [1,5,1],
    [4,2,1]
  ]
  Output: 7
  Explanation: Because the path 1→3→1→1→1 minimizes the sum.
*/

/*
  Уточнение!!!

  Причина, по которой DP работает здесь (но не в реальной проблеме кратчайшего расстояния), заключается в том, 
  что мы можем двигаться только вправо и вниз по матрице. 
  
  Если мы сможем двигаться во всех 4 направлениях, DP даст неправильный ответ.

  Время может быть улучшенно до O(N)

  Предположим, что вы заполняете таблицу построчно, текущее значение (dp[i][j]) будет немедленно использовано 
  при вычислении dp[i][j + 1], поэтому нет необходимости хранить все значения предыдущего столбца.

*/

// Dp
// Time O(N^2)
// Space O(1)
const minPathSum = grid => {
  if (grid.length === 0) return 0;

  let n = grid.length;
  let m = grid[0].length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (i == 0 && j == 0) continue;

      if (i == 0) {
        grid[i][j] += grid[i][j - 1];
      } else if (j == 0) {
        grid[i][j] += grid[i - 1][j];
      } else {
        grid[i][j] += Math.min(grid[i - 1][j], grid[i][j - 1]);
      }
    }
  }

  return grid[n - 1][m - 1];
};
