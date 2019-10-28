/*
Given n nodes labeled from 0 to n-1 and a list of undirected edges (each edge is a pair of nodes),
write a function to check whether these edges make up a valid tree.

Example 1:
  Input: n = 5, and edges = [[0,1], [0,2], [0,3], [1,4]]
  Output: true

Example 2:
  Input: n = 5, and edges = [[0,1], [1,2], [2,3], [1,3], [1,4]]
  Output: false

Note: you can assume that no duplicate edges will appear in edges.
Since all edges are undirected, [0,1] is the same as [1,0] and thus will not appear together in edges.

 */

const validTree = (n, edges) => {
  const adjList = [];
  const visited = new Set();

  for (let i = 0; i < n; i++) {
    adjList[i] = [];
  }

  // структура key -> []
  // где key - это id  ноды
  // массив [] - массив смежных элементов
  edges.forEach(([u, v]) => {
    adjList[u].push(v);
    adjList[v].push(u);
  });

  console.log(adjList);

  if (hasCycle(0, -1)) {
    return false;
  }

  for (let nodeKey = 0; nodeKey < n; nodeKey++) {
    if (!visited.has(nodeKey)) {
      return false;
    }
  }

  return true;

  function hasCycle(u, parent) {
    visited.add(u);

    const neighbors = adjList[u];

    for (let i = 0; i < neighbors.length; i++) {
      const v = neighbors[i];

      if (visited.has(v) && v !== parent) {
        return true;
      }

      if (!visited.has(v) && hasCycle(v, u)) {
        return true;
      }
    }
    return false;
  }
};
