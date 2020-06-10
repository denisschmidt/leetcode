/*

There are n cities numbered from 0 to n-1 and n-1 roads such that there is only one way to travel between two different cities (this network form a tree). 

Last year, The ministry of transport decided to orient the roads in one direction because they are too narrow.

Roads are represented by connections where connections[i] = [a, b] represents a road from city a to b.

This year, there will be a big event in the capital (city 0), and many people want to travel to this city.

Your task consists of reorienting some roads such that each city can visit the city 0. 

Return the minimum number of edges changed.

It's guaranteed that each city can reach the city 0 after reorder.

Example 1:
  Input: n = 6, connections = [[0,1],[1,3],[2,3],[4,0],[4,5]]
  Output: 3
  Explanation: Change the direction of edges show in red such that each node can reach the node 0 (capital).

Example 2:
  Input: n = 5, connections = [[1,0],[1,2],[3,2],[3,4]]
  Output: 2
  Explanation: Change the direction of edges show in red such that each node can reach the node 0 (capital).

Example 3:
  Input: n = 3, connections = [[1,0],[2,0]]
  Output: 0
 

Constraints:
  2 <= n <= 5 * 10^4
  connections.length == n-1
  connections[i].length == 2
  0 <= connections[i][0], connections[i][1] <= n-1
  connections[i][0] != connections[i][1]

*/

// Преобразовываем каждое ребро в двунаправленное ребро,
// Если идем в правильном (исходном) направлении, это будет стоить 1
// Когда идем в не оригинальном направлении, это будет стоить вам 0.

// Начинаем DFS из города 0 и идем по его соседям и всегда добавляем стоимость движения в этом направлении.
// Из-за того, что мы добавили 1, если направление верное, это означает, что это ребро необходимо повернуть вспять, следовательно, оно будет стоить 1.

// Time O(N)
// Space O(N)
const minReorder = (n, connections) => {
  let graph = [];
  let visited = Array(n).fill(false);

  for (let i = 0; i < n; i++) {
    graph[i] = [];
  }

  connections.forEach(([u, v]) => {
    graph[u].push([v, 1]);
    graph[v].push([u, 0]);
  });

  return dfs(0);

  function dfs(u) {
    let cost = 0;
    visited[u] = true;
    for (let [v, sum] of graph[u]) {
      if (!visited[v]) {
        cost += sum;
        cost += dfs(v);
      }
    }
    return cost;
  }
};

// Time O(N*K)
// Space O(N)
const minReorder_II = (n, connections) => {
  let map = new Map();
  let con = new Map();
  let cnt = 0;

  for (let i = 0; i < n; i++) {
    map.set(i, []);
    con.set(i, []);
  }

  connections.forEach(([u, v]) => {
    map.get(u).push(v);
    map.get(v).push(u);
    con.get(u).push(v);
  });

  dfs(0, null);

  function dfs(u, parent) {
    for (let v of map.get(u)) {
      if (v == parent) continue;
      dfs(v, u);
    }

    if (con.has(parent) && con.get(parent).includes(u)) {
      cnt++;
    }
  }

  return cnt;
};
