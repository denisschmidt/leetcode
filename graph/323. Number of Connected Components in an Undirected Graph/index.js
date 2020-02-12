/*
Given n nodes labeled from 0 to n - 1 and a list of undirected edges (each edge is a pair of nodes), 
write a function to find the number of connected components in an undirected graph.

Example 1:
  Input: n = 5 and edges = [[0, 1], [1, 2], [3, 4]]

     0          3
     |          |
     1 --- 2    4 

  Output: 2

Example 2:
  Input: n = 5 and edges = [[0, 1], [1, 2], [2, 3], [3, 4]]

     0           4
     |           |
     1 --- 2 --- 3

  Output:  1

Note:
  You can assume that no duplicate edges will appear in edges. 
  Since all edges are undirected, [0, 1] is the same as [1, 0] and thus will not appear together in edges.

*/

// Time O(V + E) - V кол-во нод(вершин), E - количество ребер
// Space O(V + E)
const countComponents = function(n, edges) {
  let graph = [];

  for (let i = 0; i < n; i++) {
    graph[i] = [];
  }

  for (let i = 0; i < edges.length; i++) {
    let [u, v] = edges[i];

    graph[u].push(v);
    graph[v].push(u);
  }

  let colors = [];
  let visited = [];
  let colorNum = 0;

  for (let i = 0; i < n; i++) {
    dfs(i, colorNum);
    colorNum++;
  }

  return new Set(colors).size;

  function dfs(index, color) {
    if (visited[index]) {
      return;
    }

    visited[index] = true;
    colors[index] = color;

    for (let i = 0; i < graph[index].length; i++) {
      dfs(graph[index][i], color);
    }
  }
};
