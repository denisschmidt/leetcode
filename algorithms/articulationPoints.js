/*
  Articulation Points Graph Algorithm

  https://www.youtube.com/watch?v=2kREIkF9UAs&t=809s

  Time O(U + V)
  Space O(U + V)
*/
function findarticulationPoints(n, graph) {
  let visited = Array(n).fill(false);
  let visitedTime = Array(n).fill(0);
  let lowTime = Array(n).fill(0);
  let time = 0;
  let adjList = [];
  let parent = new Map();
  let ans = [];

  for (let i = 0; i < n; i++) {
    adjList[i] = [];
  }

  for (let [u, v] of graph) {
    adjList[u].push(v);
    adjList[v].push(u);
  }

  dfs(0);

  return ans;

  function dfs(u) {
    visited[u] = true;

    visitedTime[u] = lowTime[u] = ++time;

    let childCount = 0;
    let isArticulationPoint = false;

    for (let v of adjList[u]) {
      // если смежная вершина такой же, как parent, просто проигнорируем эту вершину

      if (v == parent.get(v)) {
        continue;
      }

      if (!visited[v]) {
        parent.set(v, u);

        childCount++;

        dfs(v, u);

        if (visitedTime[u] <= lowTime[v]) {
          isArticulationPoint = true;
        } else {
          lowTime[u] = Math.min(lowTime[u], lowTime[v]);
        }
      } else {
        // если смежный узел уже посещен, посмотрим, сможем ли улучшить время.
        lowTime[u] = Math.min(lowTime[u], visitedTime[v]);
      }
    }

    if ((parent.get(u) == null && childCount >= 2) || (parent.get(u) != null && isArticulationPoint)) {
      ans.push(u);
    }
  }
}

let graph = [
  [0, 1],
  [1, 2],
  [0, 2],
  [0, 3],
  [3, 4],
  [4, 5],
  [5, 6],
  [6, 4],
  [5, 7],
];

let result = findarticulationPoints(8, graph);
console.log(result);
