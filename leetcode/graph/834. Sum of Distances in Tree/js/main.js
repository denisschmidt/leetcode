// Time O(N)
// Space O(N)
const sumOfDistancesInTree = (N, edges) => {
  let adjList = new Map();
  let cntNodes = Array(N).fill(1);
  let sumSubTree = Array(N).fill(0);

  for (let i = 0; i < N; i++) {
    adjList.set(i, []);
  }

  for (let [u, v] of edges) {
    adjList.get(u).push(v);
    adjList.get(v).push(u);
  }

  dfs(0, null);

  dfs2(0, null);

  return sumSubTree;

  // sumDist(k) = sumDist(parent) - (number of nodes in subtree k) + (number of nodes outside subtree k)
  function dfs2(u, parent) {
    for (let v of adjList.get(u)) {
      if (v != parent) {
        sumSubTree[v] = sumSubTree[u] - cntNodes[v] + (N - cntNodes[v]);

        dfs2(v, u);
      }
    }
  }

  // получаем кол-во узлов для каждой ноды и сумму рутового поддерева
  function dfs(u, parent) {
    for (let v of adjList.get(u)) {
      if (v != parent) {
        dfs(v, u);

        cntNodes[u] += cntNodes[v];
        sumSubTree[u] += cntNodes[v] + sumSubTree[v];
      }
    }
  }
};
