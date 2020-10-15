/**
 * class Tree {
 *   constructor(val, left=null, right=null) {
 *     this.val = val
 *     this.left = left
 *     this.right = right
 *   }
 * }
 */
let INF = Number.MAX_VALUE;

// Time O(N)
// Space O(N)
class Solution {
  solve(root) {
    this.ans = -INF;

    this.dfs(root);

    return this.ans == -INF ? 0 : this.ans;
  }

  dfs(node) {
    if (node == null) {
      return [INF, -INF];
    }

    if (this.isLeaf(node)) {
      return [node.val, node.val];
    }

    let [leftMin, leftMax] = this.dfs(node.left);
    let [rightMin, rightMax] = this.dfs(node.right);

    let min = Math.min(leftMin, rightMin);
    let max = Math.max(leftMax, rightMax);

    this.ans = Math.max(this.ans, Math.abs(node.val - min), Math.abs(node.val - max));

    min = Math.min(min, node.val);
    max = Math.max(max, node.val);

    return [min, max];
  }

  isLeaf(node) {
    return node.left == null && node.right == null;
  }
}
