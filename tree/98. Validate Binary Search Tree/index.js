/*

Given a binary tree, determine if it is a valid binary search tree (BST).

Assume a BST is defined as follows:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.
 

Example 1:

    2
   / \
  1   3

Input: [2,1,3]
Output: true
Example 2:

    5
   / \
  1   4
     / \
    3   6

Input: [5,1,4,null,null,3,6]
Output: false
Explanation: The root node's value is 5 but its right child's value is 4.
 */

// Time O(N)
// Space O(N)
// Inorder Traversal
const isValidBST = function(root) {
  const stack = [];
  let inorder = -Number.MAX_VALUE;

  while (stack.length || root !== null) {
    while (root) {
      stack.push(root);
      root = root.left;
    }
    let node = stack.pop();

    if (inorder >= node.val) return false;

    inorder = node.val;
    root = node.right;
  }

  return true;
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Time O(N)
// Space O(N)
const isValidBST2 = function(root) {
  return helper(root, null, null);

  function helper(node, lower, upper) {
    if (node === null) return true;

    let val = node.val;

    if (lower !== null && val <= lower) return false;
    if (upper !== null && val >= upper) return false;

    if (!helper(node.right, val, upper)) return false;
    if (helper(node.left, lower, val)) return false;

    return true;
  }
};
