/*

You are given a map of a server center, represented as a m * n integer matrix grid, where 1 means that on that cell there is a server and 0 means that it is no server. 

Two servers are said to communicate if they are on the same row or on the same column.

Return the number of servers that communicate with any other server.

Example 1:
  Input: grid = [[1,0],[0,1]]
  Output: 0
  Explanation: No servers can communicate with others.

Example 2:
  Input: grid = [[1,0],[1,1]]
  Output: 3
  Explanation: All three servers can communicate with at least one other server.

Example 3:
  Input: grid = [[1,1,0,0],[0,0,1,0],[0,0,1,0],[0,0,0,1]]
  Output: 4
  Explanation: The two servers in the first row can communicate with each other. The two servers in the third column can communicate with each other. The server at right bottom corner can't communicate with any other server.
  

Constraints:
  m == grid.length
  n == grid[i].length
  1 <= m <= 250
  1 <= n <= 250
  grid[i][j] == 0 or 1

*/

// Time O(N * M)
// Space O(N)
const countServers = grid => {
  let ans = 0;
  let n = grid.length;
  let m = grid[0].length;

  let dirs = [
    [1, 0],
    [0, -1],
    [0, 1],
    [-1, 0],
  ];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] == 1) {
        let cnt = bfs([i, j]);

        if (cnt > 1) {
          ans += cnt;
        }
      }
    }
  }

  return ans;

  function bfs(start) {
    let queue = [start];
    let cnt = 0;

    grid[start[0]][start[1]] = 0;

    while (queue.length) {
      let size = queue.length;

      for (let k = 0; k < size; k++) {
        let [i, j] = queue.shift();

        for (let dir of dirs) {
          let x = dir[0] + i;
          let y = dir[1] + j;

          while (x >= 0 && y >= 0 && x < n && y < m) {
            if (grid[x][y] == 1) {
              queue.push([x, y]);
              grid[x][y] = 0;
            }
            x += dir[0];
            y += dir[1];
          }
        }

        cnt++;
      }
    }

    return cnt;
  }
};
