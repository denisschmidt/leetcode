/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const maxSumBST = root => {
  let ans = 0;

  helper(root);

  function helper(node) {
    if (node == null) return new MinMax();

    let left = helper(node.left);
    let right = helper(node.right);

    let m = new MinMax();

    if (!left.isBST || !right.isBST || left.max >= node.val || node.val >= right.min) {
      m.isBST = false;
      return m;
    }

    m.isBST = true;
    m.sum = m.sum + node.val;

    ans = Math.max(ans, m.sum);

    m.min = node.left != null ? left.min : node.val;
    m.max = node.right != null ? right.max : node.val;

    return m;
  }
};

class MinMax {
  constructor(isBST = true, min = Number.MAX_VALUE, max = -Number.MAX_VALUE, sum = 0) {
    this.min = min;
    this.max = max;
    this.isBST = isBST;
    this.sum = sum;
  }
}
