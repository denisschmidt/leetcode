/*
In a given grid, each cell can have one of three values:

the value 0 representing an empty cell;
the value 1 representing a fresh orange;
the value 2 representing a rotten orange.
Every minute, any fresh orange that is adjacent (4-directionally) to a rotten orange becomes rotten.

Return the minimum number of minutes that must elapse until no cell has a fresh orange.  If this is impossible, return -1 instead.

Example 1:
  Input: [
    [2,1,1],
    [1,1,0],
    [0,1,1]
    ]
  Output: 4

Example 2:
  Input: [
    [2,1,1],
    [0,1,1],
    [1,0,1]
    ]
  Output: -1
  Explanation:  The orange in the bottom left corner (row 2, column 0) is never rotten, because rotting only happens 4-directionally.
  
Example 3:
  Input: [[0,2]]
  Output: 0
  Explanation:  Since there are already no fresh oranges at minute 0, the answer is just 0.
 

Note:
  1 <= grid.length <= 10
  1 <= grid[0].length <= 10
  grid[i][j] is only 0, 1, or 2.

Используем все гнилые позиции в качестве начальной позиции
Делаем обход по ним и делаем свежие фрукты гнилыми

 */

// BFS
// Time O(N)
// Space O(N)
const orangesRotting = grid => {
  if (grid.length === 0) return -1;

  const n = grid.length;
  const m = grid[0].length;
  let fresh = 0;
  let queue = [];
  let ans = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] === 2) {
        queue.push([i, j]);
      } else if (grid[i][j] === 1) {
        fresh++;
      }
    }
  }

  if (fresh === 0) return 0;

  while (queue.length > 0) {
    const tmp = [];

    for (let [i, j] of queue) {
      if (i - 1 >= 0 && grid[i - 1][j] === 1) {
        tmp.push([i - 1, j]);
        grid[i - 1][j] = 2;
        fresh--;
      }
      if (i + 1 < grid.length && grid[i + 1][j] === 1) {
        tmp.push([i + 1, j]);
        grid[i + 1][j] = 2;
        fresh--;
      }
      if (j - 1 >= 0 && grid[i][j - 1] === 1) {
        tmp.push([i, j - 1]);
        grid[i][j - 1] = 2;
        fresh--;
      }
      if (j + 1 < grid[0].length && grid[i][j + 1] === 1) {
        tmp.push([i, j + 1]);
        grid[i][j + 1] = 2;
        fresh--;
      }
    }
    ans++;
    queue = tmp;
  }

  return fresh > 0 ? -1 : --ans;
};
