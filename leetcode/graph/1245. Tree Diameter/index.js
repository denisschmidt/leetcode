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
const treeDiameter = edges => {
  let adjList = [];
  let n = edges.length;

  for (let i = 0; i <= n; i++) {
    adjList[i] = [];
  }

  for (let [u, v] of edges) {
    adjList[u].push(v);
    adjList[v].push(u);
  }
  let best = [-1, -1]; // [depth, point]

  dfs(0, -1, 0);
  dfs(best[1], -1, 0);

  return best[0];

  function dfs(u, parent, depth) {
    if (best[0] < depth) {
      best = [depth, u];
    }

    for (let i = 0; i < adjList[u].length; i++) {
      let v = adjList[u][i];

      if (v == parent) continue;

      dfs(v, u, depth + 1);
    }
  }
};
