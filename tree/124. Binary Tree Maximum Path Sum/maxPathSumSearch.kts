class TreeNode(var `val`: Int) {
  var left: TreeNode? = null
  var right: TreeNode? = null
}

class Solution {
  var maxSum = Int.MAX_VALUE;

  fun maxPathSum(root: TreeNode?): Int {
    if (root == null) {
      return 0;
    }

    maxPathSumSearch(root);

    return maxSum;
  }

  fun maxPathSumSearch(root: TreeNode?): Int {
    if (root == null) {
      return 0;
    }

    var l = maxPathSumSearch(root.left);
    var r = maxPathSumSearch(root.right);

    var x = 0;
    if (l > 0) {
      x += l;
    }

    var y = 0;
    if (r > 0) {
      y += r;
    }

    maxSum = Math.max(maxSum, x + y + root.`val`);

    return Math.max(x, y) + root.`val`;
  }
}