/*

Let's play the minesweeper game (Wikipedia, online game)!

You are given a 2D char matrix representing the game board. 'M' represents an unrevealed mine, 
'E' represents an unrevealed empty square, 
'B' represents a revealed blank square that has no adjacent (above, below, left, right, and all 4 diagonals) mines, 
digit ('1' to '8') represents how many mines are adjacent to this revealed square, and finally 'X' represents a revealed mine.

Now given the next click position (row and column indices) among all the unrevealed squares ('M' or 'E'), 
return the board after revealing this position according to the following rules:

If a mine ('M') is revealed, then the game is over - change it to 'X'.

If an empty square ('E') with no adjacent mines is revealed, then change it to revealed blank ('B') 
and all of its adjacent unrevealed squares should be revealed recursively.

If an empty square ('E') with at least one adjacent mine is revealed, then change it to a digit ('1' to '8') 
representing the number of adjacent mines.

Return the board when no more squares will be revealed.
 

Example 1:
  Input: 

  [['E', 'E', 'E', 'E', 'E'],
  ['E', 'E', 'M', 'E', 'E'],
  ['E', 'E', 'E', 'E', 'E'],
  ['E', 'E', 'E', 'E', 'E']]

  Click : [3,0]

  Output: 

  [['B', '1', 'E', '1', 'B'],
  ['B', '1', 'M', '1', 'B'],
  ['B', '1', '1', '1', 'B'],
  ['B', 'B', 'B', 'B', 'B']]

  Explanation:

Example 2:
  Input: 

  [['B', '1', 'E', '1', 'B'],
  ['B', '1', 'M', '1', 'B'],
  ['B', '1', '1', '1', 'B'],
  ['B', 'B', 'B', 'B', 'B']]

  Click : [1,2]

  Output: 

  [['B', '1', 'E', '1', 'B'],
  ['B', '1', 'X', '1', 'B'],
  ['B', '1', '1', '1', 'B'],
  ['B', 'B', 'B', 'B', 'B']]

  Explanation:

 

Note:
  The range of the input matrix's height and width is [1,50].
  The click position will only be an unrevealed square ('M' or 'E'), which also means the input board contains at least one clickable square.
  The input board won't be a stage when game is over (some mines have been revealed).
  For simplicity, not mentioned rules should be ignored in this problem. For example, you don't need to reveal all the unrevealed mines when the game is over, consider any cases that you will win the game or flag any squares.

*/

// BFS
// Time O(N*M)
// Space O(N*M)
const updateBoard = (grid, click) => {
  let queue = [click];
  let n = grid.length;
  let m = grid[0].length;
  let visited = Array(n)
    .fill(0)
    .map(() => Array(m).fill(false));

  let dirs = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
    [1, 1],
    [-1, 1],
    [1, -1],
    [-1, -1],
  ];

  visited[click[0]][click[1]] = true;

  while (queue.length) {
    let size = queue.length;

    for (let k = 0; k < size; k++) {
      let [i, j] = queue.shift();

      if (grid[i][j] == 'M') {
        grid[i][j] = 'X';
        return grid;
      }

      let mine = 0;
      let coords = [];

      for (let dir of dirs) {
        let x = i + dir[0];
        let y = j + dir[1];

        if (x < 0 || y < 0 || x >= n || y >= m || visited[x][y]) continue;

        if (grid[x][y] == 'M') {
          mine++;
        } else if (grid[x][y] == 'E') {
          coords.push([x, y]);
        }
      }

      if (mine == 0) {
        coords.forEach(coord => {
          queue.push([coord[0], coord[1]]);
          visited[coord[0]][coord[1]] = true;
        });
        grid[i][j] = 'B';
      } else {
        grid[i][j] = `${mine}`;
      }
    }
  }

  return grid;
};
