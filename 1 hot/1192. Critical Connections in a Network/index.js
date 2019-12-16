/*

There are n servers numbered from 0 to n-1 connected by undirected server-to-server connections 
forming a network where connections[i] = [a, b] represents a connection between servers a and b.

Any server can reach any other server directly or indirectly through the network.

A critical connection is a connection that, if removed, will make some server unable to reach some other server.

Return all critical connections in the network in any order.

Example 1
  Input: n = 4, connections = [[0,1],[1,2],[2,0],[1,3]]
  Output: [[1,3]]
  Explanation: [[3,1]] is also accepted.

         0
       /  \
      /    \
     2------1
            |
            |
            3
Constraints:
  1 <= n <= 10^5
  n-1 <= connections.length <= 10^5
  connections[i][0] != connections[i][1]
  There are no repeated connections.

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

    // установить время обнаружения и инициировать низкий уровень
    lowTime[u] = visitedTime[u] = ++time;

    const neighbors = adjList[u];

    for (let i = 0; i < neighbors.length; i++) {
      const v = neighbors[i];

      // в неориентированном графе внешний край может вернуться сразу
      if (v === parent) continue;

      if (!visited[v]) {
        dfs(v, u);

        // back edge
        // во время backtracking прослеживаем минимальное значение
        lowTime[u] = Math.min(lowTime[u], lowTime[v]);

        // если ДОСТИГНУТОЕ значения родителя меньше чем МИНИМАЛЬНОЕ значение ребенка
        // значит мы нашли мост
        if (visitedTime[u] < lowTime[v]) {
          ans.push([u, v]);
        }
      } else {
        lowTime[u] = Math.min(lowTime[u], visitedTime[v]);
      }
    }
  }
};

const res = criticalConnections(5, [
  [1, 0],
  [2, 0],
  [3, 2],
  [4, 2],
  [4, 3],
  [3, 0],
  [4, 0],
]);

console.log(res);
