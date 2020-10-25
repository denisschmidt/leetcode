/*  

Given an undirected tree, return its diameter: the number of edges in a longest path in that tree.

The tree is given as an array of edges where edges[i] = [u, v] is a bidirectional edge between nodes u and v.  
Each node has labels in the set {0, 1, ..., edges.length}.

Example 1:
  Input: edges = [[0,1],[0,2]]
  Output: 2
  Explanation: A longest path of the tree is the path 1 - 0 - 2.


Example 2:
  Input: edges = [[0,1],[1,2],[2,3],[1,4],[4,5]]
  Output: 4
  Explanation: A longest path of the tree is the path 3 - 2 - 1 - 4 - 5.
 

Constraints:
  0 <= edges.length < 10^4
  edges[i][0] != edges[i][1]
  0 <= edges[i][j] <= edges.length
  The given edges form an undirected tree.

*/

/*

  Алгоритм:
  
  1) Делаем dfs если достигаем максимальной грубины сохраняем пару [длина пути, вершина]
  2) Используя вершину которая дает максимальную глубину делаем снова dfs уже от этой точки

*/

// Time O(N)
// Space O(N)

/**
 * @param {number[][]} edges
 * @return {number}
 */
var treeDiameter = function (edges) {
  let adjList = new Map();
  let n = edges.length;

  for (let i = 0; i <= n; i++) {
    adjList[i] = [];
  }

  for (let [u, v] of edges) {
    adjList[u].push(v);
    adjList[v].push(u);
  }

  let visited = new Set();
  let maxDist = -1;
  let maxDistNode = -1;

  dfs(0, null, 0, new Set());

  dfs(maxDistNode, null, 0, new Set());

  return maxDist;

  function dfs(u, parent, dist, visited) {
    if (visited.has(u)) {
      return;
    }

    if (dist > maxDist) {
      maxDist = dist;
      maxDistNode = u;
    }

    visited.add(u);

    for (let v of adjList[u]) {
      if (v != parent) {
        dfs(v, u, dist + 1, visited);
      }
    }
  }
};
