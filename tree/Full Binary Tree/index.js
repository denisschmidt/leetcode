/*
This func test is a binary tree is a full binary tree
 */

function isFullTree(root) {
  if (root === null) {
    return true;
  }
  if (root.right == null && root.left == null) {
    return true;
  }

  // If both left and right are not Null, and left & right subtrees
  // are full
  if((root.left) && (root.right)) {
    return isFullTree(root.left) && isFullTree(root.right);
  }

  return false;
}
