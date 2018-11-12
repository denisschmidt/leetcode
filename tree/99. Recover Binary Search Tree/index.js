/*
Two elements of a binary search tree (BST) are swapped by mistake.

Recover the tree without changing its structure.

Example 1:

  Input: [1,3,null,null,2]

     1
    /
   3
    \
     2

  Output: [3,1,null,null,2]

     3
    /
   1
    \
     2

Example 2:

Input: [3,1,4,null,null,2]

    3
   / \
  1   4
     /
    2

  Output: [2,1,4,null,null,3]

    2
   / \
  1   4
     /
    3

Follow up:

A solution using O(n) space is pretty straight forward.

Could you devise a constant space solution?


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
 * @return {void} Do not return anything, modify root in-place instead.
 */
const { TreeNode, makeTreeNodes } = require('../../utils')

var recoverTree = function(root) {
  if (!root) return null;
  let newNode = new TreeNode(root.val)

  fn(root.left, newNode);
  fn(root.right, newNode);
  return newNode;
};


const res = recoverTree(makeTreeNodes([1, 3, null, null, 2]))
console.log('---', res);
