/*

You are given a tree with n nodes numbered from 0 to n-1 in the form of a parent array where parent[i] is the parent of node i. 

The root of the tree is node 0.

Implement the function getKthAncestor(int node, int k) to return the k-th ancestor of the given node. 

If there is no such ancestor, return -1.

The k-th ancestor of a tree node is the k-th node in the path from that node to the root.

Example:
  Input:
    ["TreeAncestor","getKthAncestor","getKthAncestor","getKthAncestor"]
    [[7,[-1,0,0,1,1,2,2]],[3,1],[5,2],[6,3]]

  Output: [null,1,0,-1]

  Explanation:
    TreeAncestor treeAncestor = new TreeAncestor(7, [-1, 0, 0, 1, 1, 2, 2]);
    treeAncestor.getKthAncestor(3, 1);  // returns 1 which is the parent of 3
    treeAncestor.getKthAncestor(5, 2);  // returns 0 which is the grandparent of 5
    treeAncestor.getKthAncestor(6, 3);  // returns -1 because there is no such ancestor
  

Constraints:
  1 <= k <= n <= 5*10^4
  parent[0] == -1 indicating that 0 is the root node.
  0 <= parent[i] < n for all 0 < i < n
  0 <= node < n
  There will be at most 5*10^4 queries.

*/

// Binary Lifting Technique
// https://www.geeksforgeeks.org/lca-in-a-tree-using-binary-lifting-technique/

// memo[i][j] = parent[i] if j = 0 and
// memo[i][j] = memo[memo[i][j – 1]][j – 1] if j > 0.

// Time O(NLogH)
// Space O(NLogH)
class TreeAncestor {
  constructor(n, parent) {
    this.parent = parent;

    let log = ~~Math.log2(n);

    let dp = Array(n)
      .fill(0)
      .map(() => Array(log + 1).fill(-1));

    for (let i = 0; i < n; i++) {
      dp[i][0] = parent[i];
    }

    for (let h = 1; h <= log; h++) {
      for (let u = 1; u < n; u++) {
        if (dp[u][h - 1] != -1) {
          let k = dp[u][h - 1];
          dp[u][h] = dp[k][h - 1];
        }
      }
    }

    this.dp = dp;
    this.log = log;
  }

  getKthAncestor(node, k) {
    if (k == 0) return node;
    for (let i = 0; i <= this.log; i++) {
      if (k & (1 << i)) {
        node = this.dp[node][i];
        if (node == -1) break;
      }
    }
    return node;
  }
}

// Time O(NLogH)
// Space O(NLogH)
class TreeAncestor_II {
  constructor(n, parent) {
    this.parent = parent;

    this.tree = new Map();

    for (let i = 0; i < n; i++) {
      this.tree.set(i, []);
    }

    for (let i = 1; i < n; i++) {
      this.tree.get(parent[i]).push(i);
      this.tree.get(i).push(parent[i]);
    }

    this.log = ~~Math.log2(n);

    this.dp = Array(n)
      .fill(0)
      .map(() => Array(this.log + 1).fill(-1));

    this.dfs(0, -1);
  }

  // Pre-processing to calculate values of memo[][]
  dfs(u, parent) {
    this.dp[u][0] = parent;

    for (let i = 1; i <= this.log; i++) {
      let k = this.dp[u][i - 1];
      if (k != -1) {
        this.dp[u][i] = this.dp[k][i - 1];
      }
    }

    if (this.tree.has(u)) {
      for (let v of this.tree.get(u)) {
        if (v != parent) {
          this.dfs(v, u);
        }
      }
    }
  }

  getKthAncestor(node, k) {
    if (k == 0) return node;
    for (let i = 0; i <= this.log; i++) {
      if (k & (1 << i)) {
        node = this.dp[node][i];
        if (node == -1) break;
      }
    }
    return node;
  }
}
