/**
 * @param {number} N
 * @param {number[][]} edges
 * @return {number[]}
 */
var sumOfDistancesInTree = function (N, edges) {
  let adjList = new Map();
  let cntNodes = Array(N).fill(1);
  let sumSubTree = Array(N).fill(0);

  for (let i = 0; i < N; i++) {
    adjList.set(i, []);
  }

  for (let [u, v] of edges) {
    adjList.get(u).push(v);
  }

  dfs(0, null);

  function dfs(u, parent) {
    for (let v of adjList.get(u)) {
      if (v != parent) {
        dfs(v, u);

        cntNodes[u] += cntNodes[v];
      }
    }
  }
};

sumOfDistancesInTree(6, [
  [0, 1],
  [0, 2],
  [2, 3],
  [2, 4],
  [2, 5],
]);
