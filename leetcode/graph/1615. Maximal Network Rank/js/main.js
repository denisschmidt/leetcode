// Time O(N^2)
// Space O(N)
const maximalNetworkRank = (n, roads) => {
  let adjList = new Map();
  let visited = new Set();

  for (let i = 0; i < n; i++) {
    adjList.set(i, new Set());
  }

  for (let [u, v] of roads) {
    adjList.get(u).add(v);
    adjList.get(v).add(u);
  }

  let max = 0;

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      let city1 = adjList.get(i);
      let city2 = adjList.get(j);
      let diff = city2.has(i) ? 1 : 0;
      max = Math.max(max, city1.size + city2.size - diff);
    }
  }

  return max;
};
