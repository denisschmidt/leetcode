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

  const dfs = root => {
    if (root === null) return 0;

    let left = dfs(root.left, ans);
    let right = dfs(root.right, ans);
    let x = 0;
    let y = 0;

    if (root.left && root.val === root.left.val) x = left + 1;
    if (root.right && root.val === root.right.val) y = right + 1;

    ans = Math.max(ans, x + y);
    return Math.max(x, y);
  };

  dfs(root);

  return ans;
};

longestUnivaluePath();
