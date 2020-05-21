/*

  Кратчайший путь более быстрый алгоритм (SPFA) представляет собой усовершенствование алгоритма Беллмана-Форд 

  Он популярен среди студентов, которые принимают участие в NOIP и ACM-ICPC. 
  
  Алгоритм , как полагают, хорошо работает на случайных разреженных графах и особенно подходит для графов,
  которые содержат ребра отрицательного веса. 
  
  Однако, в худшем случае сложность SPFA такой же , как и Беллман-Форд, так и для графов с неотрицательными весами ребер алгоритм Дейкстры является предпочтительным. 
  
  Ключевые моменты: мы используем очередь FIFO(queue) для хранения вершин, которые должны быть достигнуты. 
  
  Вершины должны быть заново вставлены в очередь при каждом обновлении их расстояния. 
  
  Сложность наихудшего случая такая же, как у Беллмана-Форда, но среднее время работы O (|E|).

   Итого: 
    Как результат получаем максимальную дистанцию в графе

*/

const SPFA = (prims, N, K) => {
  let queue = [];
  let distance = Array(N + 1).fill(Number.MAX_VALUE);
  let graph = new Map();

  for (let [u, v, dist] of prims) {
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
