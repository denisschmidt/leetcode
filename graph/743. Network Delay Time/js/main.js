/*
  
  Алгоритм SPFA - это усовершенствование Bellman-Ford, и, пожалуй, его легче понять, чем Dijkstra. 
  
  Он популярен среди студентов, которые принимают участие в NOIP и ACM-ICPC. 
  
  Ключевые моменты: мы используем очередь FIFO для хранения вершин, которые должны быть достигнуты. 
  
  Вершины должны быть заново вставлены в очередь при каждом обновлении их расстояния. 
  
  Сложность наихудшего случая такая же, как у Беллмана-Форда, но среднее время работы O (| E |).

*/

// SPFA
// Time O(E * V) Best Case Time O(E)
// Space O(E + V)
const networkDelayTime = (times, N, K) => {
  let graph = new Map();
  let INF = Number.MAX_VALUE;
  let queue = [];
  let distance = Array(N + 1).fill(INF);
  let res = 0;

  for (let [u, v, dist] of times) {
    if (!graph.has(u)) {
      graph.set(u, []);
    }
    graph.get(u).push([v, dist]);
  }

  distance[K] = 0;
  queue.push(K);

  while (queue.length) {
    let s = queue.length;

    for (let k = 0; k < s; k++) {
      let u = queue.shift();

      if (!graph.get(u).length) continue;

      for (let [v, w] of graph.get(u)) {
        if (distance[v] > distance[u] + w) {
          queue.push(v);
          distance[v] = distance[u] + w;
        }
      }
    }
  }

  for (let i = 1; i <= N; i++) {
    if (distance[i] == INF) return -1;
    res = Math.max(res, distance[i]);
  }

  return res;
};

// DFS
// Time O(N^N + ELogE) где E - длина times. Мы можем полностью посетить каждый узел только до N-1 раз
// Space O(N + E)
const networkDelayTime_II = (times, N, K) => {
  let INF = Number.MAX_VALUE;
  let distance = Array(N + 1).fill(INF);
  let graph = new Map();
  let res = 0;

  for (let [u, v, dist] of times) {
    if (!graph.has(u)) {
      graph.set(u, []);
    }
    graph.get(u).push([v, dist]);
  }

  distance[K] = 0;
  dfs(K);

  for (let i = 1; i <= N; i++) {
    if (distance[i] == INF) return -1;
    res = Math.max(res, distance[i]);
  }

  return res;

  function dfs(u) {
    if (!graph.has(u)) {
      return;
    }
    for (let [v, w] of graph.get(u)) {
      if (distance[v] > distance[u] + w) {
        distance[v] = distance[u] + w;
        dfs(v);
      }
    }
  }
};

// Dijkstra's Algorithm
// Time O(ElogE)
// Space O(N + E) размер графа O(E) плюс размер других используемых объектов O(N)
const networkDelayTime_III = (times, N, K) => {
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
