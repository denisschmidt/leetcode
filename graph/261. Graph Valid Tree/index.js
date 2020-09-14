/*
Given n nodes labeled from 0 to n-1 and a list of undirected edges (each edge is a pair of nodes),
write a function to check whether these edges make up a valid tree.

Example 1:
  Input: n = 5, and edges = [[0,1], [0,2], [0,3], [1,4]]
  Output: true

Example 2:
  Input: n = 5, and edges = [[0,1], [1,2], [2,3], [1,3], [1,4]]
  Output: false

Note: you can assume that no duplicate edges will appear in edges.
Since all edges are undirected, [0,1] is the same as [1,0] and thus will not appear together in edges.

*/

/* 
  Graph 

  If the graph is fully connected and contains exactly n - 1 edges
  
  It can't possibly contain a cycle, and therefore must be a tree!

  Going by this definition, our algorithm needs to do the following:
    1) Check whether or not there are n - 1 edges. If there's not, then return false.
    2) Check whether or not the graph is fully connected. Return true if it is, false if otherwise.

*/

// Union Find
// Time O(N)
// Space O(N)
const validTree = (n, edges) => {
  if (edges.length != n - 1) {
    return false;
  }

  let parent = [];

  for (let i = 0; i < n; i++) {
    parent[i] = i;
  }

  for (let [u, v] of edges) {
    if (!union(u, v)) {
      return false;
    }
  }

  return true;

  function union(x, y) {
    let xr = find(x);
    let yr = find(y);

    if (xr != yr) {
      parent[yr] = xr;
      return true;
    }
    return false;
  }

  function find(x) {
    if (x != parent[x]) {
      parent[x] = find(parent[x]);
    }
    return parent[x];
  }
};

// Time O(N)
// Space O(N)
const validTree_II = (n, edges) => {
  if (edges.length != n - 1) return false;

  let adjList = [];
  let seen = new Set();

  for (let i = 0; i < n; i++) {
    adjList[i] = [];
  }

  for (let [u, v] of edges) {
    adjList[u].push(v);
    adjList[v].push(u);
  }

  dfs(0);

  return seen.size == n;

  function dfs(u) {
    if (seen.has(u)) {
      return;
    }
    seen.add(u);

    for (let v of adjList[u]) {
      dfs(v);
    }
  }
};

// Time O(N + E)
// Space O(N + E)
const validTree_III = (n, edges) => {
  let adjList = [];
  let seen = new Set();

  for (let i = 0; i < n; i++) {
    adjList[i] = [];
  }

  for (let [u, v] of edges) {
    adjList[u].push(v);
    adjList[v].push(u);
  }

  return !hasCycle(0, -1) && seen.size == n;

  function hasCycle(u, parent) {
    if (seen.has(u)) {
      return true;
    }

    seen.add(u);

    for (let v of adjList[u]) {
      if (v != parent) {
        let res = hasCycle(v, u);

        if (res) {
          return true;
        }
      }
    }

    return false;
  }
};
