// Time O(N * V * E)
// Space O(E * V)
const shortestAlternatingPaths = function (n, red_edges, blue_edges) {
  let adjList = new Map();
  let INF = Number.MAX_VALUE;

  let distance = Array(n)
    .fill(0)
    .map(() => [INF, INF]);

  for (let i = 0; i < n; i++) {
    adjList.set(i, []);
  }

  for (let [i, j] of red_edges) {
    adjList.get(i).push([j, 0]);
  }

  for (let [i, j] of blue_edges) {
    adjList.get(i).push([j, 1]);
  }

  distance[0][0] = 0;
  distance[0][1] = 0;

  for (let i = 0; i < n; i++) {
    dfs(0, 0, i);
    dfs(0, 1, i);
  }

  let ans = [];
  for (let i = 0; i < n; i++) {
    let min = Math.min(distance[i][0], distance[i][1]);
    ans[i] = min == INF ? -1 : min;
  }

  return ans;

  function dfs(u, uColor, target) {
    if (u == target) return;

    for (let [v, vColor] of adjList.get(u)) {
      if (uColor != vColor && distance[v][vColor] >= distance[u][uColor] + 1) {
        distance[v][vColor] = distance[u][uColor] + 1;
        dfs(v, vColor, target);
      }
    }
  }
};

// Time O(N * V * E)
// Space O(E * V)
const shortestAlternatingPaths_II = (n, red_edges, blue_edges) => {
  let map = new Map();

  for (let i = 0; i < n; i++) {
    map.set(i, []);
  }

  for (let [u, v] of red_edges) {
    map.get(u).push([v, 0]);
  }

  for (let [u, v] of blue_edges) {
    map.get(u).push([v, 1]);
  }

  let ans = [];
  for (let i = 0; i < n; i++) {
    let x = SPFA(0, i);
    ans.push(x);
  }

  return ans;

  function SPFA(start, target) {
    let distance = Array(n)
      .fill(0)
      .map(() => Array(2).fill(Number.MAX_VALUE));

    let queue = [];

    queue.push([start, 0]);
    queue.push([start, 1]);

    distance[start][0] = 0;
    distance[start][1] = 0;

    while (queue.length) {
      let s = queue.length;

      for (let k = 0; k < s; k++) {
        let [u, color1] = queue.shift();

        if (u == target) {
          return distance[u][color1];
        }

        if (!map.has(u)) continue;

        for (let [v, color2] of map.get(u)) {
          if (color1 == color2) continue;

          if (distance[v][color2] > distance[u][color1] + 1) {
            distance[v][color2] = distance[u][color1] + 1;
            queue.push([v, color2]);
          }
        }
      }
    }
    return -1;
  }
};
