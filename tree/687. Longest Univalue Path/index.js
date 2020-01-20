/*
Given a binary tree, find the length of the longest path where each node in the path has the same value.
This path may or may not pass through the root.

The length of path between two nodes is represented by the number of edges between them.

Example 1:
  Input:
      5
     / \
    4   5
   / \   \
  1   1   5
  Output: 2

 

Example 2:
  Input:
              1
             / \
            4   5
           / \   \
          4   4   5
  Output: 2


Note: The given binary tree has not more than 10000 nodes. The height of the tree is not more than 1000.

 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

// Time O(N)
// Space O(H) H - высота дерева

const longestUnivaluePath = root => {
  let ans = 0;

  helper(root);

  return ans;

  function helper(node) {
    if (node === null) {
      return 0;
    }

    let left = helper(node.left);
    let right = helper(node.right);

    let x = 0;
    let y = 0;

    if (node.left && node.val === node.left.val) {
      y = left + 1;
    }

    if (node.right && node.val === node.right.val) {
      x = right + 1;
    }

    ans = Math.max(ans, y + x);

    return Math.max(x, y);
  }
};
