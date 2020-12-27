// Dijkstra
// Time O(E * ElogE)
// Space O(E^2)
const findTheCity = (n, edges, distanceThreshold) => {
  let adjList = [];
  let visited = new Set();
  let pq = new PriorityQueue({ comparator: (a, b) => a[1] - b[1] });

  for (let i = 0; i < n; i++) {
    adjList[i] = [];
  }

  for (let [u, v, weight] of edges) {
    adjList[u].push([v, weight]);
    adjList[v].push([u, weight]);
  }

  let min = Number.MAX_VALUE;
  let maxIndex = -Number.MAX_VALUE;

  for (let i = 0; i < n; i++) {
    let cntCities = dijkstra(i);

    if (cntCities <= min) {
      min = cntCities;
      maxIndex = i;
    }
  }

  return maxIndex;

  function dijkstra(u) {
    let cnt = 0;

    pq.offer([u, 0]);

    while (!pq.isEmpty()) {
      let [u, totalWeight] = pq.poll();

      if (visited.has(u) || totalWeight > distanceThreshold) continue;

      visited.add(u);
      cnt++;

      for (let [v, weight] of adjList[u]) {
        pq.offer([v, totalWeight + weight]);
      }
    }

    pq.clear();
    visited.clear();

    return cnt - 1;
  }
};

// Time O(N^2)
// Space O(N^2)
const findTheCity_II = (n, edges, distanceThreshold) => {
  let adjList = [];

  let distance = Array(n)
    .fill(0)
    .map(() => Array(n).fill(Number.MAX_VALUE));

  for (let i = 0; i < n; i++) {
    adjList[i] = [];
  }

  for (let [u, v, weight] of edges) {
    adjList[u].push([v, weight]);
    adjList[v].push([u, weight]);
  }

  let min = Number.MAX_VALUE;
  let maxIndex = -Number.MAX_VALUE;

  for (let i = 0; i < n; i++) {
    SPFA(i);
  }

  for (let i = 0; i < n; i++) {
    let cntCities = 0;

    for (let j = 0; j < n; j++) {
      if (i == j) continue;

      if (distance[i][j] <= distanceThreshold) cntCities++;
    }

    if (min >= cntCities) {
      min = cntCities;
      maxIndex = i;
    }
  }

  return maxIndex;

  function SPFA(i) {
    let queue = [];

    distance[i][i] = 0;
    queue.push(i);

    while (queue.length) {
      let size = queue.length;

      for (let z = 0; z < size; z++) {
        let u = queue.shift();

        for (let [v, dist] of adjList[u]) {
          if (distance[i][v] > distance[i][u] + dist) {
            distance[i][v] = distance[i][u] + dist;
            queue.push(v);
          }
        }
      }
    }
  }
};
