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

const { makeTreeNodes } = require('../../algorithms/treeNode');
const node = makeTreeNodes([2, 1, 3]);

// Time O(N)
// Space O(N)
// Inorder Traversal
var isValidBST = function(root) {
  let stack = [];
  let node = root;
  let arr = [];

  while (stack.length || node !== null) {
    while (node !== null) {
      stack.push(node);
      node = node.left;
    }
    node = stack.pop();
    arr.push(node.val);
    node = node.right;
  }

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] >= arr[i + 1]) {
      return false;
    }
  }

  return true;
};

const res = isValidBST(node);
console.log('---', res);
