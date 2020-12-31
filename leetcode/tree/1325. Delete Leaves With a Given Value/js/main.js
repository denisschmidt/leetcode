// Time O(N)
// Space O(N)
const removeLeafNodes = (root, target) => {
  if (root.left != null) {
    root.left = removeLeafNodes(root.left, target);
  }

  if (root.right != null) {
    root.right = removeLeafNodes(root.right, target);
  }

  return root.left == root.right && root.val == target ? null : root;
};
