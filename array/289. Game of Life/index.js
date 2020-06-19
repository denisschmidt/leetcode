/*

According to the Wikipedia's article: "The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970."

Given a board with m by n cells, each cell has an initial state live (1) or dead (0). 

Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) using the following four rules (taken from the above Wikipedia article):

Any live cell with fewer than two live neighbors dies, as if caused by under-population.
Any live cell with two or three live neighbors lives on to the next generation.
Any live cell with more than three live neighbors dies, as if by over-population..
Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
Write a function to compute the next state (after one update) of the board given its current state. The next state is created by applying the above rules simultaneously to every cell in the current state, where births and deaths occur simultaneously.

Example:
  Input: 
  [
    [0,1,0],
    [0,0,1],
    [1,1,1],
    [0,0,0]
  ]
  Output: 
  [
    [0,0,0],
    [1,0,1],
    [0,1,1],
    [0,1,0]
  ]

Follow up:
  Could you solve it in-place? Remember that the board needs to be updated at the same time: You cannot update some cells first and then use their updated values to update other cells.
  In this question, we represent the board using a 2D array. In principle, the board is infinite, which would cause problems when the active area encroaches the border of the array. How would you address these problems?

*/

// Time O(N*M)
// Space O(1)
const gameOfLife = grid => {
  let n = grid.length;
  let m = grid[0].length;

  let live = '#';
  let die = '@';

  let dirs = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
    [-1, 1],
    [-1, -1],
    [1, -1],
    [1, 1],
  ];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] == 0) {
        let cnt = checkCnt(i, j);

        if (cnt == 3) {
          grid[i][j] = die;
        }
      } else {
        let cnt = checkCnt(i, j);

        if (cnt < 2 || cnt > 3) {
          grid[i][j] = live;
        }
      }
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] == live) {
        grid[i][j] = 0;
      } else if (grid[i][j] == die) {
        grid[i][j] = 1;
      }
    }
  }

  function checkCnt(i, j) {
    let cnt = 0;
    for (let dir of dirs) {
      let x = i + dir[0];
      let y = j + dir[1];

      if (x < 0 || y < 0 || x >= n || y >= m) continue;

      if (grid[x][y] == 1 || grid[x][y] == live) {
        cnt++;
      }
    }
    return cnt;
  }
};
