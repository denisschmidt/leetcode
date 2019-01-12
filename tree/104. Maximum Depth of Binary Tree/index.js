/*
Given a binary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

Note: A leaf is a node with no children.

Example:

Given binary tree [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7

return its depth = 3.


TreeNode {
  val: 3,
  right: 
   TreeNode {
     val: 20,
     right: TreeNode { val: 7, right: null, left: null },
     left: TreeNode { val: 15, right: null, left: null } },
  left: TreeNode { val: 9, right: null, left: null } }

*/
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
var maxDepth = function(root) {
  let max = 0;

  const size = (node = root, depth = max) => {
    if (node === null) {
      max = Math.max(max, depth);
      return;
    }
    size(node.left, depth + 1);
    size(node.right, depth + 1);
  };
  size();
  return max;
};

console.log(
  maxDepth({
    val: 3,
    right: {
      val: 20,
      right: { val: 7, right: null, left: null },
      left: { val: 15, right: null, left: null },
    },
    left: { val: 9, right: null, left: null },
  }),
);
