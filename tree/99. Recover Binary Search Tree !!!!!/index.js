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

let first = null, second = null, pre = null;

const inOrder = function (root) {
  if (root === null) return;
  else {
    inOrder(root.left);
    if (pre === null) pre = root;
    else {
      if (pre.val > root.val) {
        if (first === null) first = pre;
        second = root;
      }
      pre = root;
    }
    inOrder(root.right);
  }
}

const recoverTree = function(root) {
  if (!root) return null;
  pre = null;
  first = null;
  second = null;
  inOrder(root);
  let temp = first.val;
  first.val = second.val;
  second.val = temp;
  return root;
};


const res = recoverTree(makeTreeNodes([3, 1, 4, null, null, 2]))
console.log('---', res);
