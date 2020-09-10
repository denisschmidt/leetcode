/*

Consider a directed graph, with nodes labelled 0, 1, ..., n-1.  

In this graph, each edge is either red or blue, and there could be self-edges or parallel edges.

Each [i, j] in red_edges denotes a red directed edge from node i to node j.  

Similarly, each [i, j] in blue_edges denotes a blue directed edge from node i to node j.

Return an array answer of length n, where each answer[X] is the length of the shortest path from node 0 to node X such that the edge colors alternate along the path (or -1 if such a path doesn't exist).

Example 1:
  Input: n = 3, red_edges = [[0,1],[1,2]], blue_edges = []
  Output: [0,1,-1]

Example 2:
  Input: n = 3, red_edges = [[0,1]], blue_edges = [[2,1]]
  Output: [0,1,-1]

Example 3:
  Input: n = 3, red_edges = [[1,0]], blue_edges = [[2,1]]
  Output: [0,-1,-1]

Example 4:
  Input: n = 3, red_edges = [[0,1]], blue_edges = [[1,2]]
  Output: [0,1,2]

Example 5:
  Input: n = 3, red_edges = [[0,1],[0,2]], blue_edges = [[1,0]]
  Output: [0,1,1]
  

Constraints:
  1 <= n <= 100
  red_edges.length <= 400
  blue_edges.length <= 400
  red_edges[i].length == blue_edges[i].length == 2
  0 <= red_edges[i][j], blue_edges[i][j] < n

*/

// Time O(N * V * E)
// Space O(E * V)
const shortestAlternatingPaths = function (n, red_edges, blue_edges) {
  let map = new Map();

  for (let i = 0; i < n; i++) {
    map.set(i, []);
  }

  for (let [u, v] of red_edges) {
    map.get(u).push([v, 0]);
  }

  for (let [u, v] of blue_edges) {
    map.get(u).push([v, 1]);
  }

  let ans = [];
  for (let i = 0; i < n; i++) {
    let x = SPFA(0, i);
    ans.push(x);
  }

  return ans;

  function SPFA(start, target) {
    let distance = Array(n)
      .fill(0)
      .map(() => Array(2).fill(Number.MAX_VALUE));

    let queue = [];

    queue.push([start, 0]);
    queue.push([start, 1]);

    distance[start][0] = 0;
    distance[start][1] = 0;

    while (queue.length) {
      let s = queue.length;

      for (let k = 0; k < s; k++) {
        let [u, color1] = queue.shift();

        if (u == target) {
          return distance[u][color1];
        }

        if (!map.has(u)) continue;

        for (let [v, color2] of map.get(u)) {
          if (color1 == color2) continue;

          if (distance[v][color2] > distance[u][color1] + 1) {
            distance[v][color2] = distance[u][color1] + 1;
            queue.push([v, color2]);
          }
        }
      }
    }
    return -1;
  }
};
