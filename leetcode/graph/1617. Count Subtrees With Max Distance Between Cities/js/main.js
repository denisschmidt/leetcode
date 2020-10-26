const { stat } = require('fs');

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var countSubgraphsForEachDiameter = function (n, edges) {
  let max_dist = -1;
  let max_node_dist = -1;

  let adj_list = new Map();

  for (let i = 0; i < n; i++) {
    adj_list.set(i, new Set());
  }

  for (let [u, v] of edges) {
    adj_list.get(u - 1).add(v - 1);
    adj_list.get(v - 1).add(u - 1);
  }

  let ans = Array(n - 1).fill(0);

  for (let state = 1; state < 1 << n; state++) {
    let dist = diameterOfTree(state);

    if (dist > 0) {
      ans[dist - 1] += 1;
    }
  }

  return ans;

  function diameterOfTree(state) {
    let cities = new Set();

    // Get all possible nodes using Bitmask
    for (let i = 0; i < n; i++) {
      if ((state >> i) & 1) {
        cities.add(i);
      }
    }

    max_dist = -1;
    max_node_dist = -1;

    let visited = new Set();
    let anyNode = cities.values().next().value;

    // For each of subset, we calculate the maximum distance between any two cities in our subset.
    dfs(anyNode, visited, cities, 0);

    // # Can't visit all nodes of the tree -> Invalid tree
    if (visited.size < cities.size) {
      return 0;
    }

    // Maximum distance between any two cities in our subset (subset must be a subtree) is the diameter of the tree.
    // https://leetcode.com/problems/tree-diameter
    // Get diamemter of the tree
    dfs(max_node_dist, new Set(), cities, 0);

    return max_dist;
  }

  function dfs(u, visited, cities, dist) {
    if (visited.has(u)) {
      return;
    }

    visited.add(u);

    if (max_dist < dist) {
      max_dist = dist;
      max_node_dist = u;
    }

    for (let v of adj_list.get(u).values()) {
      if (!visited.has(v) && cities.has(v)) {
        dfs(v, visited, cities, dist + 1);
      }
    }
  }
};
