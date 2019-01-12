/*
Given two binary trees, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical and the nodes have the same value.

 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
const { makeTreeNodes } = require('../../algorithms/treeNode');

var isSameTree = function(node1, node2) {
  let isEqual = true;
  const fn = (p, q) => {
    if ((p && !q) || (!p && q)) {
      isEqual = false
      return null;
    }
    if (!p && !q) {
      return null;
    }
    if (p.val !== q.val) {
      isEqual = false
    }
    fn(p.left, q.left);
    fn(p.right, q.right);
  }
  fn(node1, node2);
  return isEqual;
};

const res = isSameTree(makeTreeNodes([1, 2, 3]), makeTreeNodes([1, 2, 3]));

console.log('---', res);
