// Inorder Traversal
// Time O(N)
// Space O(N)
const isValidBST = function (root) {
  let stack = [];
  let node = root;
  let inorder = -Number.MAX_VALUE;

  while (stack.length || node !== null) {
    while (node !== null) {
      stack.push(node);
      node = node.left;
    }

    node = stack.pop();

    if (inorder >= node.val) {
      return false;
    }

    inorder = node.val;
    node = node.right;
  }

  return true;
};

// Time O(N)
// Space O(N)
const isValidBST_II = root => {
  let node = dfs(root);
  return node.isBST;

  function dfs(node) {
    if (node == null) return new MinMax();

    let left = dfs(node.left);
    let right = dfs(node.right);

    let m = new MinMax();

    if (!left.isBST || !right.isBST || left.max >= node.val || right.min <= node.val) {
      m.isBST = false;
      return m;
    }

    // for min take min value from left
    // for max take max value from right
    m.min = node.left != null ? left.min : node.val;
    m.max = node.right != null ? right.max : node.val;

    return m;
  }
};

class MinMax {
  constructor(min, max, isBST) {
    this.min = min || Number.MAX_VALUE;
    this.max = max || -Number.MAX_VALUE;
    this.isBST = isBST || true;
  }
}
