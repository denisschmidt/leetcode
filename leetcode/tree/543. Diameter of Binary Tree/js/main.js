/*
Given a binary tree, you need to compute the length of the diameter of the tree. 
The diameter of a binary tree is the length of the longest path between any two nodes in a tree. 
This path may or may not pass through the root.

Example:
  Given a binary tree 
          1
         / \
        2   3
       / \     
      4   5    
  Return 3, which is the length of the path [4,2,1,3] or [5,2,1,3].

Note: The length of path between two nodes is represented by the number of edges between them.
*/

/*

       1
      / \
     2   3
    / \     
  4   5    

  node.val  left  right
  4          0      0
  5          0      0
  2          1      1
  3          0      0
  1          2      1
  
  Result: 2 + 1 = 3

  Обход postorderer left-right-root

*/

// Time O(N)
// Space O(N)
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
  if (root == null) return 0;

  let max = 0;

  dfs(root);

  return max;

  function dfs(node) {
    if (node == null) {
      return 0;
    }

    let l = dfs(node.left);
    let r = dfs(node.right);

    max = Math.max(max, l + r);

    return Math.max(l + 1, r + 1);
  }
};
