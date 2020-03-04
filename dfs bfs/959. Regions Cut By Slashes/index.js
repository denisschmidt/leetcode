/*

In a N x N grid composed of 1 x 1 squares, each 1 x 1 square consists of a /, \, or blank space.  
These characters divide the square into contiguous regions.

(Note that backslash characters are escaped, so a \ is represented as "\\".)

Return the number of regions.

Example 1:
  Input:
  [
    " /",
    "/ "
  ]
  Output: 2
  Explanation: The 2x2 grid is as follows:

Example 2:
  Input:
  [
    " /",
    "  "
  ]
  Output: 1
  Explanation: The 2x2 grid is as follows:

Example 3:
  Input:
  [
    "\\/",
    "/\\"
  ]
  Output: 4
  Explanation: (Recall that because \ characters are escaped, "\\/" refers to \/, and "/\\" refers to /\.)
  The 2x2 grid is as follows:

Example 4:
  Input:
  [
    "/\\",
    "\\/"
  ]
  Output: 5
  Explanation: (Recall that because \ characters are escaped, "/\\" refers to /\, and "\\/" refers to \/.)
  The 2x2 grid is as follows:

Example 5:
  Input:
  [
    "//",
    "/ "
  ]
  Output: 3
  Explanation: The 2x2 grid is as follows:

 

Note:
  1 <= grid.length == grid[0].length <= 30
  grid[i][j] is either '/', '\', or ' '.



*/

// Time O(N)
// Space O(N)
const regionsBySlashes = function(grid) {
  // Строим grid если попадается \\ или / заполняем грид 1 в противном случае заполняем его 0
  // Потом делаем dfs и считаем кол-во 0 в grid
  // При grid.length * 2 минимальное расстояние между линиями равно нулю, что делает невозможным обнаружение региона.
  // При grid.length * 3 минимальное расстояние равно 1, что работает.
  let g = Array(grid.length * 3)
    .fill(null)
    .map(() => Array(grid.length * 3).fill(0));

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid.length; j++) {
      if (grid[i][j] === '/') {
        g[i * 3][j * 3 + 2] = 1;
        g[i * 3 + 1][j * 3 + 1] = 1;
        g[i * 3 + 2][j * 3] = 1;
      }

      if (grid[i][j] === '\\') {
        g[i * 3][j * 3] = 1;
        g[i * 3 + 1][j * 3 + 1] = 1;
        g[i * 3 + 2][j * 3 + 2] = 1;
      }
    }
  }

  let cnt = 0;

  for (let i = 0; i < g.length; i++) {
    for (let j = 0; j < g.length; j++) {
      if (g[i][j] === 0) {
        dfs(i, j, g);
        cnt++;
      }
    }
  }

  return cnt;
};

let dirs = [
  [1, 0],
  [0, -1],
  [0, 1],
  [-1, 0],
];

function dfs(i, j, g) {
  if (i < 0 || i >= g.length || j < 0 || j >= g.length || g[i][j] === 1) return;

  g[i][j] = 1;

  for (let dir of dirs) {
    dfs(i + dir[0], j + dir[1], g);
  }
}
