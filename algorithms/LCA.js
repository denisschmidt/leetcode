/*

  LCA in a tree using Binary Lifting Technique

  https://www.geeksforgeeks.org/lca-in-a-tree-using-binary-lifting-technique/

  Given a binary tree, the task is to find the Lowest Common Ancestor of the given two nodes in the tree.
  Let G be a tree then LCA of two nodes u and v is defined as the node w in the tree which is an ancestor of both u and v and is farthest from the root node.
  If one node is the ancestor of another one than that particular node is the LCA of those two nodes.

  Approach: 
  
  The article describes an approach known as Binary Lifting to find the Lowest Common Ancestor of two nodes in a tree.
  There can be many approaches to solve the LCA problem. 
  Binary Lifting is a dynamic programming approach 
  
  Where we pre-compute an array memo[1, n][1, log(n)] where memo[i][j] contains 2^j-th ancestor of node i. 
  
  For computing the values of memo[][], the following recursion may be used

  memo[i][j] = parent[i] if j = 0 and
  memo[i][j] = memo[memo[i][j – 1]][j – 1] if j > 0.

*/

// Time O(NLogN) - pre-processing is O(NlogN) and every query takes O(logN) time
// Space O(NLogN)
class TreeAncestor {
  constructor(n, parent) {
    this.parent = parent;
    this.height = ~~Math.log2(n);
    this.levels = Array(n + 1).fill(0);
    this.memo = Array(n)
      .fill(0)
      .map(() => Array(this.height + 1).fill(-1));

    let tree = new Map();

    for (let i = 0; i < n; i++) {
      tree.set(i, []);
    }

    for (let i = 0; i < parent.length; i++) {
      if (parent[i] != -1) {
        tree.get(parent[i]).push(i);
        tree.get(i).push(parent[i]);
      }
    }

    this.tree = tree;

    this.dfs(0, 0);
  }

  // Function to return the LCA of nodes u and v
  lca(u, v) {
    // The node which is present farthest from the root node is taken as u
    // If v is farther from root node then swap the two
    if (this.levels[u] < this.levels[v]) {
      let tmp = u;
      u = v;
      v = tmp;
    }

    // Finding the ancestor of u which is at same level as v
    for (let h = this.height; h >= 0; h--) {
      if (this.levels[u] - Math.pow(2, h) >= this.levels[v]) {
        u = this.memo[u][h];
      }
    }

    // If v is the ancestor of u then v is the LCA of u and v
    if (u == v) {
      return v;
    }

    // Finding the node closest to the root which is not the common ancestor of u and v
    // i.e. a node x such that x is not the common ancestor of u and v but memo[x][0] is
    for (let h = this.height; h >= 0; h--) {
      if (this.memo[u][h] != this.memo[v][h]) {
        u = this.memo[u][h];
        v = this.memo[v][h];
      }
    }

    // Returning the first ancestor of above found node
    return this.memo[u][0];
  }

  // Pre-processing to calculate values of memo[][]
  dfs(u, parent) {
    this.memo[u][0] = parent;

    for (let h = 1; h <= this.height; h++) {
      let k = this.memo[u][h - 1];
      this.memo[u][h] = this.memo[k][h - 1];
    }

    for (let v of this.tree.get(u)) {
      if (v != parent) {
        // Calculating the level of each node
        this.levels[v] = this.levels[u] + 1;

        this.dfs(v, u);
      }
    }
  }
}
