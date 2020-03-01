/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */

var findMinHeightTrees = function(n, edges) {
  if (edges.length === 0) return [0];

  let graph = [];
  let visited = [];
  let colors = Array(n).fill(Number.MAX_VALUE);

  for (let i = 0; i < n; i++) {
    graph[i] = [];
  }

  edges.forEach(([u, v]) => {
    graph[u].push(v);
    graph[v].push(u);
  });

  let set = new Set();

  for (let i = 0; i < n; i++) {
    dfs(i, 0);
  }

  console.log();

  return Array.from(set);

  function dfs(index, color) {
    if (visited[index]) return;

    visited[index] = true;

    colors[index] = Math.min(colors[index], color);

    for (let i = 0; i < graph[index].length; i++) {
      dfs(graph[index][i], color + 1);
    }

    visited[index] = false;
  }
};

let a = findMinHeightTrees(6, [
  [0, 1],
  [0, 2],
  [0, 3],
  [3, 4],
  [4, 5],
]);

console.log(a);
