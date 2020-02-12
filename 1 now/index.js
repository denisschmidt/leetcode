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
