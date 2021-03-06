/*

6
[[0,1],[1,2],[2,0],[1,3],[3,4],[4,5],[5,3]]

              0
               \
                1
              /  \
             3    2
            /
          4
         /
        5

[[1,3]]


5
[[1,0],[2,0],[3,2],[4,2],[4,3],[3,0],[4,0]]

             0
           / | \
          /  |  \
         1   |   2
             |  /  \
             | /    \
             |3------4


Цель - найти ребра которые не приводят к циклу 
Данный алгоритм работает только для undirected графа

http://www.cs.umd.edu/class/fall2017/cmsc451-0101/Lects/lect04-edge-connectivity.pdf

*/

// Tarjan's Algorithm  https://www.youtube.com/watch?v=2kREIkF9UAs&t=809s
// E = общее количество ребер
// V = общее количество вершин
// Time O(V + E)
// Space O(V + E)
const criticalConnections = (numConnections, connections) => {
  let adjList = [];

  for (let i = 0; i < numConnections; i++) {
    adjList[i] = [];
  }

  connections.forEach(([u, v]) => {
    adjList[u].push(v);
    adjList[v].push(u);
  });

  let ans = [];
  let visited = [];

  // отметка времени при входе в вершину
  let time = 0;

  // low discovery time
  // нужно для определения моста между связями
  // если есть цикл значения всегда будут одинаковые и равны минимальному значению в цикле
  let lowTime = Array(numConnections).fill(0);

  // записываем номер верншин при обходе
  let visitedTime = Array(numConnections).fill(0);

  dfs(0, -1);

  return ans;

  // u - parent
  // v - child
  function dfs(u, parent) {
    visited[u] = true;

    // установить время обнаружения и инициировать lowTime
    lowTime[u] = visitedTime[u] = ++time;

    let neighbors = adjList[u];

    for (let i = 0; i < neighbors.length; i++) {
      let v = neighbors[i];

      // в неориентированном графе внешний край может вернуться сразу
      if (v === parent) continue;

      if (!visited[v]) {
        dfs(v, u);

        // Поднимается по рекурсии Bottom-top
        // Цикл продолжит итерации с той точки на которой мы находимся и мы перейдем к соседним точкам

        // Во время backtracking прослеживаем минимальное значение
        lowTime[u] = Math.min(lowTime[u], lowTime[v]);

        // По сути это следущее значение так как мы поднимаемся по рекурсии(Bottom-top рекурсия)
        // если ДОСТИГНУТОЕ время меньше чем время смежных точек значит мы нашли мост
        if (visitedTime[u] < lowTime[v]) {
          ans.push([u, v]);
        }
      } else {
        // Обновляем минимальное время
        // Берем минимальное значение из смежных точек
        lowTime[u] = Math.min(lowTime[u], visitedTime[v]);
      }
    }
  }
};
