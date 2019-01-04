/*
For a binary tree T, we can define a flip operation as follows:
choose any node, and swap the left and right child subtrees.

A binary tree X is flip equivalent to a binary tree Y
if and only if we can make X equal to Y after some number of flip operations.

Write a function that determines whether two binary trees are flip equivalent.
The trees are given by root nodes root1 and root2.

Example 1:
  Input: root1 = [1,2,3,4,5,6,null,null,null,7,8], root2 = [1,3,2,null,6,4,5,null,null,null,null,8,7]
  Output: true

  Explanation: We flipped at nodes with values 1, 3, and 5.

 */
const { makeTreeNodes } = require('../../utils')

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
const flipEquiv = function(root1, root2) {
  if (root1 === root2) {
    return true;
  }
  if (root1 === null || root2 === null || root1.val !== root2.val) {
    return false;
  }
  return  (flipEquiv(root1.left, root2.left) && flipEquiv(root1.right, root2.right) ||
    flipEquiv(root1.left, root2.right) && flipEquiv(root1.right, root2.left));
};

let root1 = [1,2,3,4,5,6,null,null,null,7,8], root2 = [1,3,2,null,6,4,5,null,null,null,null,8,7]
// let root1 = [1, 2, 3], root2 = [1, 3, 2];
// let root1 = [0,3,1,null,null,null,2], root2 = [0,3,1,2]; // false

const res = flipEquiv(makeTreeNodes(root1), makeTreeNodes(root2));

console.log('--', res);
