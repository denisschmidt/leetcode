/*

Given a 2D board and a word, find if the word exists in the grid.

The word can be constructed from letters of sequentially adjacent cell, 
where "adjacent" cells are those horizontally or vertically neighboring. 
The same letter cell may not be used more than once.

Example:
  board =
  [
    ['A','B','C','E'],
    ['S','F','C','S'],
    ['A','D','E','E']
  ]

  Given word = "ABCCED", return true.
  Given word = "SEE", return true.
  Given word = "ABCB", return false.

*/

// Time O(N^2)
// Space O(N)
const exist = (board, word) => {
  let n = board.length;
  let m = board[0].length;
  let visited = Array(n)
    .fill(0)
    .map(() => Array(m).fill(false));

  let dirs = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (board[i][j] == word[0] && dfs(i, j, 1)) {
        return true;
      }
    }
  }

  return false;

  function dfs(i, j, index) {
    if (index == word.length) return true;

    if (visited[i][j]) return false;

    visited[i][j] = true;

    for (let dir of dirs) {
      let x = dir[0] + i;
      let y = dir[1] + j;

      if (x < 0 || y < 0 || x >= n || y >= m || visited[x][y]) continue;

      if (board[x][y] == word[index] && dfs(x, y, index + 1)) {
        return true;
      }
    }

    visited[i][j] = false;

    return false;
  }
};
