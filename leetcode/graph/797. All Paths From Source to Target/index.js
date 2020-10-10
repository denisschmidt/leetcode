/*
Given a directed, acyclic graph of N nodes.

Find all possible paths from node 0 to node N-1, and return them in any order.

The graph is given as fox>llows:
  the nodes are 0, 1, ..., graph.length - 1.  graph[i] is a list of all nodes j for which the edge (i, j) exists.

Example:
  Input: [[1,2], [3], [3], []]
  Output: [[0,1,3],[0,2,3]]

Explanation: The graph looks like this:
  0--->1
  |    |
  v    v
  2--->3

There are two paths: 0 -> 1 -> 3 and 0 -> 2 -> 3.

Note:

The number of nodes in the graph will be in the range [2, 15].
You can print different paths in any order, but you should keep the order of nodes inside one path.
 */

/**
 * DFS Solution
 *
 * @param {number[][]} graph
 * @return {number[][]}
 */
const allPathsSourceTarget = graph => {
  let res = [],
    path = [];
  path.push(0);
  dfsSearch(0);

  function dfsSearch(node) {
    if (node === graph.length - 1) {
      res.push(path.slice(0));
      return;
    }
    for (let nextNode of graph[node]) {
      path.push(nextNode);
      dfsSearch(nextNode);
      path.pop();
    }
  }
  console.log('====', res);
  return res;
};

allPathsSourceTarget([[1, 2], [3], [3], []]);

/**
 * DFS Solution
 *
 * @param {number[][]} graph
 * @return {number[][]}
 */
const allPathsSourceTarget2 = graph => {
  let results = [];
  const dfs = (graph, node = 0, step = 0, path = []) => {
    if (node === graph.length - 1) {
      path[step] = node;
      results.push(path.slice(0, step + 1));
      return;
    }

    if (!graph[node] || graph[node].length === 0) {
      return;
    }

    path[step] = node;

    for (let i = 0; i < graph[node].length; i++) {
      dfs(graph, graph[node][i], step + 1, path);
    }
  };
  dfs(graph);
  console.log('====', results);
  return results;
};

allPathsSourceTarget2([[1, 2], [3], [3], []]);
