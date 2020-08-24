/*

You want to build a house on an empty land which reaches all buildings in the shortest amount of distance. 
You can only move up, down, left and right. 

You are given a 2D grid of values 0, 1 or 2, where:
  Each 0 marks an empty land which you can pass by freely.
  Each 1 marks a building which you cannot pass through.
  Each 2 marks an obstacle which you cannot pass through.

Example:
  Input: [[1,0,2,0,1],[0,0,0,0,0],[0,0,1,0,0]]

  1 - 0 - 2 - 0 - 1
  |   |   |   |   |
  0 - 0 - 0 - 0 - 0
  |   |   |   |   |
  0 - 0 - 1 - 0 - 0

  Output: 7 

  Explanation: Given three buildings at (0,0), (0,4), (2,2), and an obstacle at (0,2),
             the point (1,2) is an ideal empty land to build a house, as the total 
             travel distance of 3+3+1=7 is minimal. So return 7.

Note: 
  There will be at least one building. 
  If it is not possible to build such house according to the above rules, return -1.

*/

const shortestDistance = grid => {
  let n = grid.length;
  let m = grid[0].length;
  let buildings = [];
  let points = [];
  let dirs = [
    [0, 1],
    [0, -1],
    [-1, 0],
    [1, 0],
  ];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] == 1) {
        buildings.push([i, j]);
      } else if (grid[i][j] == 0) {
        points.push([i, j]);
      }
    }
  }

  let min = Number.MAX_VALUE;

  for (let p of points) {
    let cnt = 0;
    let sum = 0;
    for (let b of buildings) {
      let d = shortestPath(p[0], p[1], b[0], b[1], grid);
      if (d == -1) break;
      sum += d;
      cnt++;
    }

    if (cnt == buildings.length) {
      min = Math.min(min, sum);
    }
  }

  return min == Number.MAX_VALUE ? -1 : min;

  function shortestPath(startX, startY, endX, endY, grid) {
    let m = grid[0].length;
    let pq = new PriorityQueue({ comparator: (a, b) => a[0] - b[0] });
    let costMap = new Map();

    pq.offer([0, 0, startX, startY]);
    costMap.set(startX * m + startY, 0);

    while (!pq.isEmpty()) {
      let [_, cost, x, y] = pq.poll();

      if (x == endX && y == endY) {
        return cost;
      }

      for (let dir of dirs) {
        let newX = x + dir[0];
        let newY = y + dir[1];

        if (newX < 0 || newX >= n || newY < 0 || newY >= m || grid[newX][newY] == 2) {
          continue;
        }

        if (grid[newX][newY] == 1) {
          if (newX == endX && newY == endY) {
            return cost + 1;
          } else {
            continue;
          }
        }

        let newCost = cost + 1 + getDist(newX, newY, endX, endY);

        if (!costMap.has(newX * m + newY) || newCost < costMap.get(newX * m + newY)) {
          pq.offer([newCost, cost + 1, newX, newY]);
          costMap.set(newX * m + newY, newCost);
        }
      }
    }
    return -1;
  }

  function getDist(x, y, u, z) {
    return Math.abs(x - u) + Math.abs(y - z);
  }
};
