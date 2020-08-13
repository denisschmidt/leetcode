/*
Given a non-empty binary search tree and a target value, find the value in the BST that is closest to the target.

Note:

Given target value is a floating point.
You are guaranteed to have only one unique value in the BST that is closest to the target.
Example:

Input: root = [4,2,5,1,3], target = 3.714286

    4
   / \
  2   5
 / \
1   3

Output: 4

 */

// Time O(H) since here one goes from root down to a leaf.
// Space O(H)
const closestValue = (root, target) => {
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
