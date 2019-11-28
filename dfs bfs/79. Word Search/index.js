/*
Given a 2D board and a word, find if the word exists in the grid.

The word can be constructed from letters of sequentially adjacent cell, 
where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once.

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
const exist = function(board, word) {
  const n = board.length;
  const m = board[0].length;
  let dirs = [
    [0, 1],
    [0, -1],
    [-1, 0],
    [1, 0],
  ];

  const visited = Array(n)
    .fill(null)
    .map(() => Array(m).fill(false));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (board[i][j] === word[0] && dfs(i, j, 0)) {
        return true;
      }
    }
  }

  return false;

  function dfs(i, j, index) {
    if (index === word.length) return true;

    if (i >= n || i < 0 || j >= m || j < 0 || board[i][j] !== word[index] || visited[i][j]) {
      return false;
    }

    visited[i][j] = true;

    for (let [start, end] of dirs) {
      let x = i + start;
      let y = j + end;

      if (dfs(x, y, index + 1)) {
        return true;
      }
    }

    visited[i][j] = false;

    return false;
  }
};

const board = [
  ['A', 'B', 'C', 'E'],
  ['S', 'F', 'C', 'S'],
  ['A', 'D', 'E', 'E'],
];

const res = exist(board, 'ABCCED');
console.log('---', res);
