// Существует два случая, когда древовидная структура является недействительной.
// Узел, имеющий двух родителей [[1,2], [1,3], [2,3]] у 3 будет два родителя 2 и 1
// Есть цикл

// Union Find
// Time: O(Nlog*N) ~ O(N)
// Space: O(N)
const findRedundantDirectedConnection = edges => {
  let n = edges.length;
  let parent = Array(n + 1).fill(0);

  // Step 1. Check, if edge have two parents
  // If there are such edges, save them as candidates A and B and delete this edge from sets
  let ans1;
  let ans2;

  for (let i = 0; i < edges.length; i++) {
    let [u, v] = edges[i];

    if (parent[v] != 0) {
      // remember this edges, which children have two parents
      ans1 = [parent[v], v];
      ans2 = [u, v];

      // remove this edge from sets
      edges[i] = [-1, -1];
    } else {
      parent[v] = u;
    }
  }

  for (let i = 0; i <= n; i++) {
    parent[i] = i;
  }

  for (let [u, v] of edges) {
    if (u == -1 || v == -1) continue;

    let x = find(u);
    let y = find(v);

    // if x and y belong to the same subset, they have already connected
    // we have a cycle
    if (x == y) {
      if (ans1) {
        return ans1;
      }

      return [u, v];
    }

    parent[y] = x;
  }

  return ans2;

  function find(x) {
    if (parent[x] != x) {
      parent[x] = find(parent[x]);
    }
    return parent[x];
  }
};
