/**
 * class Tree {
 *   constructor(val, left=null, right=null) {
 *     this.val = val
 *     this.left = left
 *     this.right = right
 *   }
 * }
 */

// Time O(N)
// Space O(N)
class Solution {
  solve(root) {
    let max = 0;

    function dfs(node) {
      if (node == null) return [0, 0];

      let left = dfs(node.left);
      let right = dfs(node.right);

      max = Math.max(max, left[1] + 1, right[0] + 1);

      return [left[1] + 1, right[0] + 1];
    }

    dfs(root);

    return max;
  }
}
