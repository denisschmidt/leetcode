/*
Given a binary tree, return the bottom-up level order traversal of its nodes' values.
(ie, from left to right, level by level from leaf to root).

For example:
Given binary tree [3,9,20,null,null,15,7],


    3
   / \
  9  20
    /  \
   15   7

return its bottom-up level order traversal as:

[
  [15,7],
  [9,20],
  [3]
]

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
 * @return {number[][]}
 */
const { makeTreeNodes } = require('../../algorithms/treeNode');

const levelOrderBottom = function(root) {
  let nodeQueue = [],
    depthQueue = [],
    maxDepth = -1;
  let map = new Map();

  nodeQueue.push(root);
  depthQueue.push(0);

  while (nodeQueue.length) {
    let node = nodeQueue.shift();
    let depth = depthQueue.shift();

    if (node !== null) {
      maxDepth = Math.max(maxDepth, depth);

      if (map.has(depth)) {
        let val = map.get(depth);
        val.push(node.val);
        map.set(depth, val);
      } else {
        map.set(depth, [node.val]);
      }

      nodeQueue.push(node.left);
      nodeQueue.push(node.right);
      depthQueue.push(depth + 1);
      depthQueue.push(depth + 1);
    }
  }

  const res = [];
  for (let i = maxDepth; i >= 0; i--) {
    res.push(map.get(i));
  }
  return res;
};

const res = levelOrderBottom(makeTreeNodes([3, 9, 20, null, null, 15, 7]));

console.log('---', res);
