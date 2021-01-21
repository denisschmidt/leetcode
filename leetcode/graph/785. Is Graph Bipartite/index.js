/*

Given an undirected graph, return true if and only if it is bipartite.

Recall that a graph is bipartite if we can split it's set of nodes into two independent subsets A and B 
such that every edge in the graph has one node in A and another node in B.

The graph is given in the following form: 
  graph[i] is a list of indexes j for which the edge between nodes i and j exists.  
  
Each node is an integer between 0 and graph.length - 1.  
There are no self edges or parallel edges: graph[i] does not contain i, and it doesn't contain any element twice.

Example 1:
  Input: [[1,3], [0,2], [1,3], [0,2]]
  Output: true
  Explanation: 
    The graph looks like this:
    0----1
    |    |
    |    |
    3----2
    We can divide the vertices into two groups: {0, 2} and {1, 3}.

Example 2:
  Input: [[1,2,3], [0,2], [0,1,3], [0,2]]
  Output: false
  Explanation: 
  The graph looks like this:
  0----1
  | \  |
  |  \ |
  3----2
  We cannot find a way to divide the set of nodes into two independent subsets.
 
Note:
  graph will have length in range [1, 100].
  graph[i] will contain integers in range [0, graph.length - 1].
  graph[i] will not contain i or duplicate values.
  The graph is undirected: if any element j is in graph[i], then i will be in graph[j].

*/

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
    if (colors[k] != 0) continue;

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
    if (colors[i] === 0 && !isValidColor(1, i)) {
      return false;
    }
  }

  return true;

  function isValidColor(color, node) {
    if (colors[node] !== 0) {
      return color[node] === color;
    }

    color[node] = color;

    for (let v of graph[u]) {
      if (!isValidColor(v, -color)) {
        return false;
      }
    }

    return true;
  }
};
