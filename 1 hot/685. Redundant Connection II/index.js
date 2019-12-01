/*
In this problem, a rooted tree is a directed graph such that, there is exactly one node (the root)
for which all other nodes are descendants of this node, plus every node has exactly one parent, except for
the root node which has no parents.

The given input is a directed graph that started as a rooted tree with N nodes (with distinct values 1, 2, ..., N),
with one additional directed edge added. The added edge has two different vertices chosen from 1 to N, and was not an
edge that already existed.

The resulting graph is given as a 2D-array of edges.
Each element of edges is a pair [u, v] that represents a directed edge connecting nodes u and v, where u is a parent of child v.

Return an edge that can be removed so that the resulting graph is a rooted tree of N nodes.
If there are multiple answers, return the answer that occurs last in the given 2D-array.

Example 1:
  Input: [[1,2], [1,3], [2,3]]
  Output: [2,3]
  Explanation: The given directed graph will be like this:
    1
   / \
  v   v
  2-->3

Example 2:
  Input: [[1,2], [2,3], [3,4], [4,1], [1,5]]
  Output: [4,1]
  Explanation: The given directed graph will be like this:
  5 <- 1 -> 2
       ^    |
       |    v
     4 <- 3

Note:
  The size of the input 2D-array will be between 3 and 1000.
  Every integer represented in the 2D-array will be between 1 and N, where N is the size of the input array.

 */

// Существует два случая, когда древовидная структура является недействительной.
// Узел, имеющий двух родителей [[1,2], [1,3], [2,3]] у 3 будет два родителя 2 и 1
// Есть цикл

const findRedundantDirectedConnection = edges => {
  let parent = Array(2000).fill(0);

  // Шаг 1. Проверьте, есть ли у узла два родителя
  // Если это так, сохраните их в качестве кандидатов A и B и установите второй край недействительным
  let canA = [-1, -1];
  let canB = [-1, -1];

  for (let i = 0; i < edges.length; i++) {
    // u родитель v.
    const [u, v] = edges[i];
    if (parent[v] === 0) {
      parent[v] = u;
    } else {
      canB = [u, v];
      canA = [parent[v], v];
      edges[i][1] = 0;
    }
  }

  for (let i = 0; i < 2000; i++) {
    parent[i] = i;
  }

  for (let i = 0; i < edges.length; i++) {
    const edge = edges[i];

    if (edges[i][1] === 0) continue;

    const x = find(edge[0]);
    const y = find(edge[1]);

    if (x === y) {
      if (canA[0] === -1) {
        return edge;
      }

      return canA;
    }

    // union
    parent[y] = x;
  }

  return canB;

  function find(x) {
    if (parent[x] !== x) {
      parent[x] = find(parent[x]);
    }
    return parent[x];
  }
};

const res = findRedundantDirectedConnection([
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 1],
  [1, 5],
]);

console.log(res);
