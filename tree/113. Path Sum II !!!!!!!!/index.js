/*
Given a binary tree and a sum, find all root-to-leaf paths where each path's sum equals the given sum.

Note: A leaf is a node with no children.

Example:

Given the below binary tree and sum = 22,

      5
     / \
    4   8
   /   / \
  11  13  4
 /  \    / \
7    2  5   1
Return:

[
   [5,4,11,2],
   [5,8,4,5]
]
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

const { makeTreeNodes, TreeNode } = require('../../algorithms/treeNode');

/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
const pathSum = function(node, sum) {
  let path = [],
    paths = [];

  function findPaths(root, sum, path, paths) {
    if (!root) return;
    if (!root.left && !root.right && root.val === sum) {
      path.push(root.val);
      paths.push(path.concat([]));
      path.pop();
    }
    path.push(root.val);
    console.log('===', path);
    findPaths(root.left, sum - root.val, path, paths);
    findPaths(root.right, sum - root.val, path, paths);
    path.pop();
  }
  findPaths(node, sum, path, paths);
  return paths;
};

const res = pathSum(makeTreeNodes([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, 5, 1]), 22);

console.log('===', res);
