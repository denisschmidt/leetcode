/*
On a 2-dimensional grid, there are 4 types of squares:

1 represents the starting square.  There is exactly one starting square.
2 represents the ending square.  There is exactly one ending square.
0 represents empty squares we can walk over.
-1 represents obstacles that we cannot walk over.

Return the number of 4-directional walks from the starting square to the ending square,
that walk over every non-obstacle square exactly once.

Example 1:
  Input:
    [
      [1,0,0,0],
      [0,0,0,0],
      [0,0,2,-1]
    ]

  Output: 2
  Explanation: We have the following two paths:
  1. (0,0),(0,1),(0,2),(0,3),(1,3),(1,2),(1,1),(1,0),(2,0),(2,1),(2,2)
  2. (0,0),(1,0),(2,0),(2,1),(1,1),(0,1),(0,2),(0,3),(1,3),(1,2),(2,2)

Example 2:
  Input:
    [
       [1,0,0,0],
       [0,0,0,0],
       [0,0,0,2]
    ]
  Output: 4
  Explanation: We have the following four paths:
  1. (0,0),(0,1),(0,2),(0,3),(1,3),(1,2),(1,1),(1,0),(2,0),(2,1),(2,2),(2,3)
  2. (0,0),(0,1),(1,1),(1,0),(2,0),(2,1),(2,2),(1,2),(0,2),(0,3),(1,3),(2,3)
  3. (0,0),(1,0),(2,0),(2,1),(2,2),(1,2),(1,1),(0,1),(0,2),(0,3),(1,3),(2,3)
  4. (0,0),(1,0),(2,0),(2,1),(1,1),(0,1),(0,2),(0,3),(1,3),(1,2),(2,2),(2,3)

Example 3:
  Input:
    [
      [0,1],
      [2,0]
    ]
  Output: 0
  Explanation:
  There is no path that walks over every empty square exactly once.
  Note that the starting and ending square can be anywhere in the grid.
 

Note:
  1 <= grid.length * grid[0].length <= 20

 */

const uniquePathsIII = grid => {
  if (grid.length === 0) return 0;
  let ans = 0;
  const n = grid.length;
  const m = grid[0].length;
  const start = [];
  const dirs = [
    [0, 1],
    [0, -1],
    [-1, 0],
    [1, 0],
  ];

  for (let i = 0; i < n; i++) {
    if (start.length) break;
    for (let j = 0; j < m; j++) {
      if (grid[i][j] === 1) {
        start.push(i, j);
        break;
      }
    }
  }

  helper(start[0], start[1]);

  return ans;

  function helper(i, j) {
    if (i < 0 || j < 0 || i >= n || j >= m || grid[i][j] === -1) {
      return;
    } else if (grid[i][j] === 2) {
      if (isValid(grid)) {
        ans++;
      }
      return;
    } else {
      for (let dir of dirs) {
        let x = i + dir[0];
        let y = j + dir[1];

        grid[i][j] = -1;
        helper(x, y);
        grid[i][j] = 0;
      }
    }
  }

  function isValid(grid) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (grid[i][j] === 2) continue;
        if (grid[i][j] !== -1) return false;
      }
    }

    return true;
  }
};
