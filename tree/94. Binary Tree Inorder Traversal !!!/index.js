/*
Given a binary tree, return the inorder traversal of its nodes' values.

Example:

Input: [1,null,2,3]
   1
    \
     2
    /
   3

Output: [1,3,2]
Follow up: Recursive solution is trivial, could you do it iteratively?


Iterating method using Stack:

Complexity Analysis

Time complexity : O(n)O(n).

Space complexity : O(n)O(n).


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
 * @return {number[]}
 */

const { makeTreeNodes, TreeNode } = require('../../algorithms/treeNode');

const inorderTraversal = function(root) {
  let nodeStack = [], node = root;
  const resArr = [];

  while(nodeStack.length > 0 || node !== null) {
    while(node !== null) {
      nodeStack.push(node);
      node = node.left;
    }
    node = nodeStack.pop();
    resArr.push(node.val);
    node = node.right;
  }
  return resArr;
};

const res = inorderTraversal(makeTreeNodes([1, null, 2, 3]));
console.log('===', res);


