var insertIntoBST = function(root, val) {
  if (root === null) {
    let node = new TreeNode(val);
    return node;
  }

  if (root.val > val) {
    root.left = insertIntoBST(root.left, val);
  } else if (root.val < val) {
    root.right = insertIntoBST(root.right, val);
  }
};
