/*

In a given grid, each cell can have one of three values:

the value 0 representing an empty cell;
the value 1 representing a fresh orange;
the value 2 representing a rotten orange.
Every minute, any fresh orange that is adjacent (4-directionally) to a rotten orange becomes rotten.

Return the minimum number of minutes that must elapse until no cell has a fresh orange.  
If this is impossible, return -1 instead.

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

*/

/*
  Алгоритм:
    1) Добавляем все гнилые позиции в очередь
    2) Делаем BFS обход для поиска свежих фруктов
    3) Если нашли свежий фрукт делаем его гнилым и добавляем в очередь для дальнейшего поиска

*/

// BFS
// Time O(N)
// Space O(N)
const orangesRotting = function (grid) {
  let queue = [];
  let n = grid.length;
  let m = grid[0].length;
  let fresh = 0;
  let dirs = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] == 2) {
        queue.push([i, j]);
      } else if (grid[i][j] == 1) {
        fresh++;
      }
    }
  }

  let time = 0;

  while (queue.length) {
    let size = queue.length;
    for (let i = 0; i < size; i++) {
      let [i, j] = queue.shift();

      for (let dir of dirs) {
        let x = dir[0] + i;
        let y = dir[1] + j;

        if (x < 0 || y < 0 || x >= n || y >= m || grid[x][y] != 1) {
          continue;
        }

        fresh--;
        grid[x][y] = 2;
        queue.push([x, y]);
      }
    }
    if (queue.length) time++;
  }

  return fresh == 0 ? time : -1;
};
