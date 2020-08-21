const { PriorityQueue } = require('../../../utils/priorityQueue.js');

// A* Search
// Dijkstra's algorithm is a special case of A* Search with node.h = 0
const cutOffTree = forest => {
  let dirs = [
    [0, 1],
    [0, -1],
    [-1, 0],
    [1, 0],
  ];
  let n = forest.length;
  let m = forest[0].length;
  let positions = [];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (forest[i][j] > 1) {
        positions.push([i, j, forest[i][j]]);
      }
    }
  }

  // sort by height
  positions.sort((a, b) => a[2] - b[2]);

  let res = 0;
  let start = [0, 0];

  for (let target of positions) {
    let dist = aStartSearch(start, target);

    if (dist == -1) {
      return -1;
    }

    res += dist;

    start = target;
  }

  return res;

  function aStartSearch([startX, startY], [endX, endY]) {
    let pq = new PriorityQueue({ comparator: (a, b) => a[0] - b[0] });

    //
    pq.offer([0, 0, startX, startY]);

    let costMap = new Map();

    costMap.set(startX * m + startY, 0);

    while (!pq.isEmpty()) {
      let [_, g, x, y] = pq.poll();

      if (x == endX && y == endY) {
        return g;
      }

      for (let dir of dirs) {
        let newX = x + dir[0];
        let newY = y + dir[1];

        if (newX >= 0 && newX < n && newY >= 0 && newY < m && forest[x][y] > 0) {
          // cost = g + h
          // g - actual distance between two points
          // h - heuristic (guess) of the distance between two points, in our case it will be - Manhattan distance
          let newCost = g + 1 + getDist([x, y], [newX, newY]);

          if (!costMap.has(newX * m + newY) || newCost < costMap.get(newX * m + newY)) {
            costMap.set(newX * m + newY, newCost);
            pq.offer([newCost, g + 1, newX, newY]);
          }
        }
      }
    }

    return -1;
  }

  function getDist([x, y], [u, z]) {
    return Math.abs(x - u) + Math.abs(y - z);
  }
};
