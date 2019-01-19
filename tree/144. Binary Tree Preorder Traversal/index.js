/*
Given a binary tree, return the preorder traversal of its nodes' values.

Example:

Input: [1,null,2,3]
   1
    \
     2
    /
   3

Output: [1,2,3]
Follow up: Recursive solution is trivial, could you do it iteratively?

 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
const { makeTreeNodes } = require('../../algorithms/treeNode');

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const preorderTraversal = function(root) {
  let nodeStack = [];
  let arr = [];
  nodeStack.push(root);

  while (nodeStack.length) {
    let node = nodeStack.pop();

    if (node !== null) {
      arr.push(node.val);
      nodeStack.push(node.right);
      nodeStack.push(node.left);
    }
  }
  return arr;
};

const res = preorderTraversal(makeTreeNodes([1, null, 2, 3]));

console.log('--1--', res);

/*
 Solution only right children are stored to stack.

 */

function preorderTraversal2(node) {
  let rights = [];
  let arr = [];

  while (node !== null) {
    arr.push(node.val);
    if (node.right !== null) {
      rights.push(node.right);
    }
    node = node.left;
    if (node === null && rights.length) {
      node = rights.pop();
    }
  }
  return arr;
}

const res2 = preorderTraversal(makeTreeNodes([1, null, 2, 3]));

console.log('--2--', res2);
