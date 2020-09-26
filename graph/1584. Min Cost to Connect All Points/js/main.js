// Kruskal MST
// Time O(N^2)
// Space O(N^2)
const minCostConnectPoints = points => {
  let graph = [];

  for (let i = 0; i < points.length; i++) {
    for (let j = i + 1; j < points.length; j++) {
      graph.push([i, j, getDist(points[i], points[j])]);
    }
  }

  graph.sort((a, b) => a[2] - b[2]);

  let parent = [];

  for (let i = 0; i <= points.length; i++) {
    parent[i] = i;
  }

  let res = 0;

  for ([u, v, cnt] of graph) {
    if (union(u, v)) {
      res += cnt;
    }
  }

  return res;

  function find(x) {
    if (parent[x] != x) {
      parent[x] = find(parent[x]);
    }
    return parent[x];
  }

  function union(x, y) {
    let xr = find(x);
    let yr = find(y);

    if (xr != yr) {
      parent[yr] = xr;
      return true;
    }
    return false;
  }

  function getDist([x, y], [u, z]) {
    return Math.abs(x - u) + Math.abs(y - z);
  }
};
