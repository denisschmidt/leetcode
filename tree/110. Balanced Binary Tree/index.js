/*
Given a binary tree, determine if it is height-balanced.

For this problem, a height-balanced binary tree is defined as:

a binary tree in which the depth of the two subtrees of every node never differ by more than 1.

Example 1:

Given the following tree [3,9,20,null,null,15,7]:

    3
   / \
  9  20
    /  \
   15   7
Return true.

Example 2:

Given the following tree [1,2,2,3,3,null,null,4,4]:

       1
      / \
     2   2
    / \
   3   3
  / \
 4   4
Return false
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

const { makeTreeNodes } = require('../../utils');


/**
 * @param {TreeNode} root
 * @return {boolean}
 */

const dfsHeight = (root) => {
  if (root === null) {
    return 0;
  }

  let leftHeight = dfsHeight(root.left)
  if (leftHeight === -1) return -1;
k
  let rightHeight = dfsHeight(root.right)
  if (rightHeight === -1) return -1;

  if (Math.abs(leftHeight - rightHeight) > 1) return -1;
  return Math.max(leftHeight, rightHeight) + 1;
}

const isBalanced = function(root) {
  return dfsHeight(root) !== -1;
};

const res = isBalanced(makeTreeNodes([3,9,20,null,null,15,7]));

console.log('---', res);


