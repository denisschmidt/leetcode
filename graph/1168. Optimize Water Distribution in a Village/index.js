/*

There are n houses in a village. We want to supply water for all the houses by building wells and laying pipes.

For each house i, we can either build a well inside it directly with cost wells[i], or pipe in water from another well to it. 

The costs to lay pipes between houses are given by the array pipes, where each pipes[i] = [house1, house2, cost] represents the cost to connect house1 and house2 together using a pipe. 

Connections are bidirectional.

Find the minimum total cost to supply water to all houses.

Example 1:
  Input: n = 3, wells = [1,2,2], pipes = [[1,2,1],[2,3,1]]
  Output: 3
  Explanation: 
    The image shows the costs of connecting houses using pipes.
    The best strategy is to build a well in the first house with cost 1 and connect the other houses to it with cost 2 so the total cost is 3.
 

Constraints:
  1 <= n <= 10000
  wells.length == n
  0 <= wells[i] <= 10^5
  1 <= pipes.length <= 10000
  1 <= pipes[i][0], pipes[i][1] <= n
  0 <= pipes[i][2] <= 10^5
  pipes[i][0] != pipes[i][1]

*/

// Kruskal's algorithm Minimum Spanning Tree Graph Algorithm

// У нас есть колодцы, но эти колодцы можно представить как трубы к таинственному «нулевому дому», в котором уже есть вода.

// Time O((N + M) Log(N + M)) N и M - количество домов и труб
// Space O(N + M)
const minCostToSupplyWater = (n, wells, pipes) => {
  for (let i = 0; i < n; i++) {
    pipes.push([i + 1, 0, wells[i]]);
  }

  let parent = [];

  for (let i = 0; i <= n; i++) {
    parent[i] = i;
  }

  pipes.sort((a, b) => a[2] - b[2]);

  let ans = 0;
  for (let [u, v, cnt] of pipes) {
    if (union(u, v)) {
      ans += cnt;
    }
  }

  return ans;

  function union(x, y) {
    let xr = find(x);
    let yr = find(y);

    if (xr !== yr) {
      parent[yr] = xr;
      return true;
    }

    return false;
  }

  function find(x) {
    if (x != parent[x]) {
      parent[x] = find(parent[x]);
    }
    return parent[x];
  }
};

const { PriorityQueue } = require('../../algorithms/priorityQueue');

// Prim's algorithm (Minimum Spanning Tree Graph Algorithm)
const minCostToSupplyWater_II = (n, wells, pipes) => {
  let map = new Map();
  let pq = new PriorityQueue({ comparator: (a, b) => a[1] - b[1] });
  let visited = new Set();

  for (let i = 0; i <= n; i++) {
    map.set(i, new Set());
  }

  for (let i = 0; i < wells.length; i++) {
    map.get(0).add([i + 1, wells[i]]);

    pq.offer([i + 1, wells[i]]);
  }

  for (let i = 0; i < pipes.length; i++) {
    let [u, v, cnt] = pipes[i];

    map.get(u).add([v, cnt]);
    map.get(v).add([u, cnt]);
  }

  visited.add(0);

  let ans = 0;

  while (!pq.isEmpty() && visited.size < n + 1) {
    let edge = pq.poll();

    if (visited.has(edge[0])) continue;

    visited.add(edge[0]);
    ans += edge[1];

    for (let [v, cnt] of map.get(edge[0]).values()) {
      if (visited.has(v)) continue;
      pq.offer([v, cnt]);
    }
  }

  return ans;
};
