/*

  С каждым добавленным ребром проверьте, к какому подмножеству принадлежит u и v. 
  Если u и v пренадлежат одному и тому же подмноеству, ничего не делайте. 
  В противном случае объедините два подмноества и уменьшите количество связанных компонентов.
  Бонус: сжатие пути(Path compression) может сократить время на 50%.

*/

const countComponents = (n, edges) => {
  let graph = [];

  for (let i = 0; i < n; i++) {
    graph[i] = i;
  }

  for (let i = 0; i < edges.length; i++) {
    let [u, v] = edges[i];

    let x = find(u);
    let y = find(v);

    if (x !== y) {
      graph[y] = x;
      n--;
    }
  }

  return n;

  function find(x) {
    if (graph[x] !== x) {
      graph[x] = find(graph[x]);
    }

    return graph[x];
  }
};

// Time O(V + E) - V кол-во нод(вершин), E - количество ребер
// Space O(V + E)
const countComponents_II = function (n, edges) {
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
