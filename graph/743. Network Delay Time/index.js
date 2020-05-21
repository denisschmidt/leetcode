/*

There are N network nodes, labelled 1 to N.

Given times, a list of travel times as directed edges times[i] = (u, v, w), where u is the source node, v is the target node, and w is the time it takes for a signal to travel from source to target.

Now, we send a signal from a certain node K. How long will it take for all nodes to receive the signal? 

If it is impossible, return -1.

Example 1:
  Input: times = [[2,1,1],[2,3,1],[3,4,1]], N = 4, K = 2
  Output: 2

Note:
  N will be in the range [1, 100].
  K will be in the range [1, N].
  The length of times will be in the range [1, 6000].
  All edges times[i] = (u, v, w) will have 1 <= u, v <= N and 0 <= w <= 100.

*/

/*
  
  Алгоритм SPFA - это усовершенствование Bellman-Ford, и, пожалуй, его легче понять, чем Dijkstra. 
  
  Он популярен среди студентов, которые принимают участие в NOIP и ACM-ICPC. 
  
  Ключевые моменты: мы используем очередь FIFO для хранения вершин, которые должны быть достигнуты. 
  
  Вершины должны быть заново вставлены в очередь при каждом обновлении их расстояния. 
  
  Сложность наихудшего случая такая же, как у Беллмана-Форда, но среднее время работы O (| E |).

*/

// Time O(E * V) Best Case Time O(E)
// Space O(E + V)
const networkDelayTime = (times, N, K) => {
  let queue = [];
  let distance = Array(N + 1).fill(Number.MAX_VALUE);
  let graph = new Map();

  for (let [u, v, dist] of times) {
    if (!graph.has(u)) {
      graph.set(u, []);
    }
    graph.get(u).push([v, dist]);
  }

  distance[K] = 0;
  queue.push(K);

  while (queue.length) {
    let size = queue.length;

    for (let z = 0; z < size; z++) {
      let u = queue.shift();

      if (!graph.has(u)) continue;

      for (let [v, dist] of graph.get(u)) {
        if (distance[v] > distance[u] + dist) {
          distance[v] = distance[u] + dist;
          queue.push(v);
        }
      }
    }
  }

  let ans = 0;

  for (let i = 1; i <= N; i++) {
    ans = Math.max(ans, distance[i]);
  }

  return ans == Number.MAX_VALUE ? -1 : ans;
};

const { PriorityQueue } = require('../../algorithms/priorityQueue');

// Dijkstra's Algorithm

// Time O(ElogE)
// Space O(N + E) размер графа O(E) плюс размер других используемых объектов O(N)
const networkDelayTime_II = (times, N, K) => {
  let pq = new PriorityQueue({ comparator: (a, b) => a[1] - b[1] });
  let distance = new Map();
  let map = new Map();

  for (let [u, v, dist] of times) {
    if (!map.has(u)) {
      map.set(u, []);
    }
    map.get(u).push([v, dist]);
  }

  pq.offer([K, 0]);

  while (!pq.isEmpty()) {
    let [u, dist] = pq.poll();

    if (distance.has(u)) continue;

    distance.set(u, dist);

    if (map.has(u)) {
      for (let [v, c] of map.get(u)) {
        if (distance.has(v)) continue;
        pq.offer([v, c + dist]);
      }
    }
  }

  if (distance.size != N) {
    return -1;
  }

  let max = 0;
  for (let d of distance.values()) {
    if (d == Number.MAX_VALUE) {
      return -1;
    }
    max = Math.max(max, d);
  }

  return max;
};

// DFS

// Time O(N^N + ELogE) где E - длина times. Мы можем полностью посетить каждый узел только до N-1 раз
// Space O(N + E)
const networkDelayTime_III = (times, N, K) => {
  let map = new Map();
  let seen = new Map();

  for (let [u, v, cnt] of times) {
    if (!map.has(u)) {
      map.set(u, []);
    }
    map.get(u).push([v, cnt]);
  }

  for (let key of map.keys()) {
    map.get(key).sort((a, b) => a - b);
  }

  for (let i = 1; i <= N; i++) {
    seen.set(i, Number.MAX_VALUE);
  }

  dfs(K, 0);

  let max = 0;
  for (let distance of seen.values()) {
    if (distance == Number.MAX_VALUE) {
      return -1;
    }
    max = Math.max(max, distance);
  }

  return max;

  function dfs(u, distance) {
    if (distance >= seen.get(u)) return;

    seen.set(u, distance);

    if (map.has(u)) {
      for (let [v, cnt] of map.get(u)) {
        dfs(v, distance + cnt);
      }
    }
  }
};
