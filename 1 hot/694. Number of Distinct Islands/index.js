/*
Given a non-empty 2D array grid of 0's and 1's, an island is a group of 1's (representing land)
connected 4-directionally (horizontal or vertical.)
You may assume all four edges of the grid are surrounded by water.

Count the number of distinct islands.
An island is considered to be the same as another
if and only if one island can be translated (and not rotated or reflected) to equal the other.

Example 1:
  11000
  10000
  00001
  00011
  Given the above grid map, return 1.

Example 2:
  11011
  10000
  00011
  11010

  Notice that:
    11
    1
    and
     1
    11
    are considered different island shapes, because we do not consider reflection / rotation.

Note: The length of each dimension in the given grid does not exceed 50.

 */

// Time O(N^2)
// Space O(N)
const numDistinctIslands = grid => {
  const n = grid.length;
  const m = grid[0].length;
  const dirs = [
    [1, 0, 'd'],
    [0, -1, 'l'],
    [0, 1, 'r'],
    [-1, 0, 'u'],
  ];
  let set = new Set();
  let path = '';

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) {
        path = '';
        dfs(i, j, 'o');
        set.add(path);
      }
    }
  }

  return set.size;

  function dfs(i, j, direction) {
    if (i < 0 || j < 0 || i >= n || j >= m || grid[i][j] !== 1) return;

    grid[i][j] = 0;
    path += direction;

    for (let [start, end, d] of dirs) {
      dfs(i + start, j + end, d);
    }

    // backtrack
    path += 'b';

    return path;
  }
};
