/*
Given an array where elements are sorted in ascending order, convert it to a height balanced BST.

For this problem, a height-balanced binary tree is defined
as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.

Example:
  Given the sorted array: [-10,-3,0,5,9],
  One possible answer is: [0,-3,9,-10,null,5], which represents the following height balanced BST:

      0
     / \
   -3   9
   /   /
 -10  5
 */

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

// Time O(N)
// Space O(N)
const sortedArrayToBST = function(nums) {
  // left - root - right
  if (!nums.length) return null;

  return dfs(0, nums.length - 1);

  function dfs(l, r) {
    if (l > r) return null;
    let mid = l + Math.floor((r - l) / 2);

    let root = new TreeNode(nums[mid]);

    root.left = dfs(l, mid - 1);
    root.right = dfs(mid + 1, r);
    return root;
  }
};
