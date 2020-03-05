/*

There are N cities numbered from 1 to N.

You are given connections, where each connections[i] = [city1, city2, cost] represents the cost to connect city1 and city2 together.  
(A connection is bidirectional: connecting city1 and city2 is the same as connecting city2 and city1.)

Return the minimum cost so that for every pair of cities, there exists a path of connections (possibly of length 1) that connects those two cities together.
The cost is the sum of the connection costs used. If the task is impossible, return -1.

 
Example 1:
  Input: N = 3, connections = [[1,2,5],[1,3,6],[2,3,1]]
  Output: 6
  Explanation: Choosing any 2 edges will connect all cities so we choose the minimum 2.

Example 2:
  Input: N = 4, connections = [[1,2,3],[3,4,4]]
  Output: -1
  Explanation: There is no way to connect all cities even if all edges are used.
 

Note:
  1 <= N <= 10000
  1 <= connections.length <= 10000
  1 <= connections[i][0], connections[i][1] <= N
  0 <= connections[i][2] <= 10^5
  connections[i][0] != connections[i][1]

*/

/*
  Решение через Kruskal's algorithm Minimum Spanning Tree Graph Algorithm

  Реализация и обьяснение https://www.youtube.com/watch?v=fAuF0EuZVCk

*/

// UNION FIND
// Time O(ELogE + E)
// Space O(N)
const minimumCost = function(N, connections) {
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
     
     Означает, что имеется пренадлежность к одному и тому же подмножеству. Тоесть компоненты уже является связанным.
     И так как мы отсортировали графы по стоимости, то если связи нету мы считаем сумму их связи.
     Если связь уже есть, то считать сумму уже не нужно, так как меньшу сумму связи мы уже нашли.
    
     */
    if (xr === yr) {
      return false;
    }
  }
};
