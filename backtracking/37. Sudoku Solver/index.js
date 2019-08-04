/*
Write a program to solve a Sudoku puzzle by filling the empty cells.

A sudoku solution must satisfy all of the following rules:

Each of the digits 1-9 must occur exactly once in each row.
Each of the digits 1-9 must occur exactly once in each column.
Each of the the digits 1-9 must occur exactly once in each of the 9 3x3 sub-boxes of the grid.
Empty cells are indicated by the character '.'.


A sudoku puzzle...


...and its solution numbers marked in red.

Note:

The given board contain only digits 1-9 and the character '.'.
You may assume that the given Sudoku puzzle will have a single unique solution.
The given board size is always 9x9.

 */

const board = [
  ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
  ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
  ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
  ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
  ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
];

const isValid = (board, row, col) => {
  // Check current column
  for (let i = 0; i < 9; i++) {
    if (board[i][col] === board[row][col] && i !== row) {
      return false;
    }
  }

  // Check current row
  for (let j = 0; j < 9; j++) {
    if (board[row][j] === board[row][col] && j !== col) {
      return false;
    }
  }

  // Check current 3x3 grid
  let si = Math.floor(row / 3) * 3;
  let sj = Math.floor(col / 3) * 3;

  for (let i = si; i < si + 3; i++) {
    for (let j = sj; j < sj + 3; j++) {
      if (board[i][j] === board[row][col] && i !== row && j !== col) {
        return false;
      }
    }
  }

  return true;
};

const solve = (board, row, col) => {
  if (row === 9) {
    return true;
  }

  if (col === 9) {
    return solve(board, row + 1, 0);
  }

  if (board[row][col] !== '.') {
    return solve(board, row, col + 1);
  }

  for (let n = 1; n <= 9; n++) {
    board[row][col] = `${n}`;

    if (isValid(board, row, col)) {
      if (solve(board, row, col + 1)) {
        return true;
      }
    }

    board[row][col] = '.';
  }

  return false;
};

const solveSudoku = function(board) {
  solve(board, 0, 0);
};

solveSudoku(board);
