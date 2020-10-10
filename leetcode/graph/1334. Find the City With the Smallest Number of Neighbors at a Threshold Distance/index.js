/*

There are n cities numbered from 0 to n-1. Given the array edges where edges[i] = [fromi, toi, weighti] represents a bidirectional and weighted edge between cities fromi and toi, and given the integer distanceThreshold.

Return the city with the smallest number of cities that are reachable through some path and whose distance is at most distanceThreshold, 

If there are multiple such cities, return the city with the greatest number.

Notice that the distance of a path connecting cities i and j is equal to the sum of the edges' weights along that path.

Example 1:
  Input: n = 4, edges = [[0,1,3],[1,2,1],[1,3,4],[2,3,1]], distanceThreshold = 4
  Output: 3
  Explanation: The figure above describes the graph. 
  The neighboring cities at a distanceThreshold = 4 for each city are:
  City 0 -> [City 1, City 2] 
  City 1 -> [City 0, City 2, City 3] 
  City 2 -> [City 0, City 1, City 3] 
  City 3 -> [City 1, City 2] 
  Cities 0 and 3 have 2 neighboring cities at a distanceThreshold = 4, but we have to return city 3 since it has the greatest number.

Example 2:
  Input: n = 5, edges = [[0,1,2],[0,4,8],[1,2,3],[1,4,2],[2,3,1],[3,4,1]], distanceThreshold = 2
  Output: 0
  Explanation: The figure above describes the graph. 
  The neighboring cities at a distanceThreshold = 2 for each city are:
  City 0 -> [City 1] 
  City 1 -> [City 0, City 4] 
  City 2 -> [City 3, City 4] 
  City 3 -> [City 2, City 4]
  City 4 -> [City 1, City 2, City 3] 
  The city 0 has 1 neighboring city at a distanceThreshold = 2.
  

Constraints:
  2 <= n <= 100
  1 <= edges.length <= n * (n - 1) / 2
  edges[i].length == 3
  0 <= fromi < toi < n
  1 <= weighti, distanceThreshold <= 10^4
  All pairs (fromi, toi) are distinct.

*/

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
