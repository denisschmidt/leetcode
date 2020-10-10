/*

Given an m x n matrix of positive integers representing the height of each unit cell in a 2D elevation map, 
compute the volume of water it is able to trap after raining.

Example:
  Given the following 3x6 height map:
  [
    [1,4,3,1,3,2],
    [3,2,1,3,2,4],
    [2,3,3,2,3,1]
  ]

  Return 4.
  The above image represents the elevation map [[1,4,3,1,3,2],[3,2,1,3,2,4],[2,3,3,2,3,1]] before the rain.
  After the rain, water is trapped between the blocks. The total volume of water trapped is 4.

Constraints:
  1 <= m, n <= 110
  0 <= heightMap[i][j] <= 20000

*/

// Time O(M*N * Log(M*N))
// Space O(M*N)
const trapRainWater = grid => {
  let pq = new PriorityQueue({ comparator: (a, b) => a.val - b.val });
  let n = grid.length;
  let m = grid[0].length;
  let dirs = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  let visited = Array(n)
    .fill(0)
    .map(() => Array(m).fill(false));

  for (let i = 0; i < n; i++) {
    pq.offer({ val: grid[i][0], coords: [i, 0] });
    pq.offer({ val: grid[i][m - 1], coords: [i, m - 1] });
    visited[i][0] = true;
    visited[i][m - 1] = true;
  }

  for (let j = 1; j < m - 1; j++) {
    pq.offer({ val: grid[0][j], coords: [0, j] });
    pq.offer({ val: grid[n - 1][j], coords: [n - 1, j] });
    visited[0][j] = true;
    visited[n - 1][j] = true;
  }

  let max = 0;
  let ans = 0;

  while (!pq.isEmpty()) {
    let { val, coords } = pq.poll();

    max = Math.max(max, val);

    if (max > val) {
      ans += max - val;
    }

    for (let dir of dirs) {
      let x = dir[0] + coords[0];
      let y = dir[1] + coords[1];

      if (x < 0 || y < 0 || x >= n || y >= m || visited[x][y]) continue;

      visited[x][y] = true;

      pq.offer({ val: grid[x][y], coords: [x, y] });
    }
  }

  return ans;
};
