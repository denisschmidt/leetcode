/*
You are given a map in form of a two-dimensional integer grid where 1 represents land and 0 represents water.

Grid cells are connected horizontally/vertically (not diagonally). 
The grid is completely surrounded by water, and there is exactly one island (i.e., one or more connected land cells).

The island doesn't have "lakes" (water inside that isn't connected to the water around the island). 
One cell is a square with side length 1. The grid is rectangular, width and height don't exceed 100. 
Determine the perimeter of the island.

 

Example:
  
  Input:
  [[0,1,0,0],
   [1,1,1,0],
   [0,1,0,0],
   [1,1,0,0]]

  Output: 16
  Explanation: The perimeter is the 16 yellow stripes in the image below:

Периметр прямоугольника — это сумма длины и ширины, умноженная на «2».

 */

// Time O(N^2)
// Space O(1)

const islandPerimeter = grid => {
  if (grid.length === 0) return 0;
  const n = grid.length;
  const m = grid[0].length;

  let ans = 0;

  const dirs = [
    [0, 1],
    [1, 0],
    [-1, 0],
    [0, -1],
  ];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] === 1) {
        for (let [start, end] of dirs) {
          let x = i + start;
          let y = j + end;

          if (x < 0 || y < 0 || x === n || y === m || grid[x][y] === 0) {
            ans++;
          }
        }
      }
    }
  }
  return ans;
};
