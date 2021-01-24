// Time O(N^2)
// Space O(1)
const solve = board => {
  if (!board.length) {
    return [];
  }

  let n = board.length;
  let m = board[0].length;
  let dirs = [
    [0, 1],
    [0, -1],
    [-1, 0],
    [1, 0],
  ];

  // scan the borders and mark the 'O's to '1'
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if ((i === 0 || i === n - 1 || j === 0 || j === m - 1) && board[i][j] === 'O') {
        bfs(i, j);
      }
    }
  }

  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      if (board[i][j] === 'O') {
        board[i][j] = 'X';
      }
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (board[i][j] === '1') {
        board[i][j] = 'O';
      }
    }
  }

  function bfs(i, j) {
    const queue = [];
    queue.push([i, j]);
    board[i][j] = '1';

    while (queue.length) {
      const coord = queue.shift();

      for (let dir of dirs) {
        i = dir[0] + coord[0];
        j = dir[1] + coord[1];

        if (i >= 0 && i < n && j >= 0 && j < m && board[i][j] === 'O') {
          board[i][j] = '1';
          queue.push([i, j]);
        }
      }
    }
  }
};
