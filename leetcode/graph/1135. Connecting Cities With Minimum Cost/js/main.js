// Решение через Kruskal's algorithm Minimum Spanning Tree Graph Algorithm

// Реализация и обьяснение https://www.youtube.com/watch?v=fAuF0EuZVCk

// UNION FIND
// Time O(ELogE + E)
// Space O(N)
const minimumCost = (N, connections) => {
  let parent = [];

  for (let i = 0; i < N; i++) {
    parent[i] = i;
  }

  // connections - это ненаправленный граф

  connections.sort((a, b) => a[2] - b[2]);

  let ans = 0;
  for (let i = 0; i < connections.length; i++) {
    let [u, v, z] = connections[i];
    if (union(u - 1, v - 1)) {
      ans += z;
    }
  }

  return N === 1 ? ans : -1;

  function find(x) {
    if (x !== parent[x]) {
      parent[x] = find(parent[x]);
    }
    return parent[x];
  }

  function union(x, y) {
    let xr = find(x);
    let yr = find(y);

    if (xr !== yr) {
      parent[yr] = xr;

      N--;
      return true;
    }

    /* 

     Что значит xr === yr ?
     
     Означает, что имеется пренадлежность к одному и тому же подмножеству. Тоесть компоненты уже являются связанным.
     
     Если связь уже есть, то считать сумму уже не нужно, так как меньшу сумму связи мы уже нашли.

     И так как мы отсортировали графы по стоимости, то если связи нету мы считаем сумму их связи.
     
     */
    if (xr === yr) {
      return false;
    }
  }
};
