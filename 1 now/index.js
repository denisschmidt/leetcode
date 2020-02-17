var sufficientSubset = function(root, limit) {
  if (root === null) {
    return null;
  }

  if (root.left === null && root.right === null) {
    if (root.val < limit) {
      return null;
    }

    return root;
  }

  root.left = helper(root.left, limit - root.val);
  root.right = helper(root.right, limit - root.val);

  if (root.left === null && root.right === null) return null;

  return root;
};
