/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
  if (root === null) return false;

  return helper(root).isBST;

  function helper(node) {
    if (node === null) {
      return new MinMax();
    }

    let left = helper(node.left);
    let right = helper(node.right);

    let m = new MinMax();

    if (!left.isBST || !right.isBST || left.max >= node.val || node.val >= right.min) {
      m.isBST = false;
      return m;
    }

    m.isBST = true;

    m.min = node.left !== null ? left.min : node.val;
    m.max = node.right !== null ? right.max : node.val;

    return m;
  }
};

class MinMax {
  constructor(min, max, isBST, size) {
    this.min = min || Number.MAX_VALUE;
    this.max = max || -Number.MAX_VALUE;
    this.isBST = isBST || true;
  }
}
