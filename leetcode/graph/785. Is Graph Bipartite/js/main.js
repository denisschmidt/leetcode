/*

  Если в графе есть нечетный цикл

  Bipartite  граф - это граф, вершины которого можно разделить на два независимых множества, U и V, 
  так что каждое ребро (u, v) либо соединяет вершину из U в V, либо вершину из V в U. 
  
  Другими словами, для каждого ребра (u, v), либо u принадлежит U, а v - V, либо u принадлежит V, а v - U. 
  
  Можно также сказать, что не существует ребра, соединяющего вершины одного и того же множества.

  Bipartite граф возможен, если раскраска графа возможна с использованием двух цветов, так что вершины в наборе окрашены в один и тот же цвет. 
  
  Когда мы находим неокрашенный узел, мы окрашиваем его 0 и окрашиваем весь его связанный компонент. 
  
  Мы сохраним массив (или хэш-карту) для поиска цвета каждого узла: colors[node]. 
  
  Цвета могут быть 0, 1 или -1. 
  
  Каждый сосед окрашивается в противоположный цвет от текущего узла. 
  
  Если мы найдем соседа, окрашенного в тот же цвет, что и текущий узел, то наша раскраска была бы невозможна. 
  
  Для каждого неокрашенного соседа в graph[node] мы раскрасим одним из возможных цветов.

  
  https://www.geeksforgeeks.org/bipartite-graph/

*/

// BFS
// Time O(N + E) N - кол-во нод, E - кол-во ребер
// Space O(N)
const isBipartite = graph => {
  let n = graph.length;
  let colors = Array(n).fill(0);
  let queue = [];

  for (let k = 0; k < n; k++) {
    if (colors[k] != 0) {
      continue;
    }

    queue.push(k);
    colors[k] = 1; // Blue: 1; Red: -1.

    while (queue.length) {
      let size = queue.length;

      for (let i = 0; i < size; i++) {
        let u = queue.shift();
        let neighbors = graph[u];

        for (let j = 0; j < neighbors.length; j++) {
          let v = neighbors[j];

          // если нода не раскрашена раскрасим ее в противоположный цвет
          if (colors[v] == 0) {
            colors[v] = -colors[u];
            queue.push(v);
          } else if (colors[v] == colors[u]) {
            // Если мы найдем соседа, окрашенного в тот же цвет, что и текущий узел, то наша раскраска будет невозможна.
            return false;
          }
        }
      }
    }
  }

  return true;
};

// DFS
// Time O(N + E) N - кол-во нод, E - кол-во ребер
// Space O(N)
const isBipartite_II = graph => {
  let colors = Array(graph.length).fill(0);

  for (let i = 0; i < graph.length; i++) {
    if (colors[i] === 0 && !dfs(1, i)) {
      return false;
    }
  }

  return true;

  function dfs(color, node) {
    if (colors[node] !== 0) {
      return color[node] === color;
    }

    color[node] = color;

    for (let v of graph[u]) {
      if (!dfs(v, -color)) {
        return false;
      }
    }

    return true;
  }
};
