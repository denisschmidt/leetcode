/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} target
 * @return {number}
 */
var closestValue = function (root, target) {
  let diff = Number.MAX_VALUE;
  let res = null;

  dfs(root);

  return res;

  function dfs(node) {
    if (node == null) return null;

    if (diff > Math.abs(node.val - target)) {
      res = node.val;
      diff = Math.abs(node.val - target);
    }

    if (node.val > target) {
      dfs(node.left);
    } else {
      dfs(node.right);
    }
  }
};
