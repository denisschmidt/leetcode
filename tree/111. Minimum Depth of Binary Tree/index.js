/*
Given a binary tree, find its minimum depth.

The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

Note: A leaf is a node with no children.

Example:

Given binary tree [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
return its minimum depth = 2.

 */ /**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

const { makeTreeNodes } = require('../../algorithms/treeNode');

const minDepth = function(root) {
  if (!root) return 0;
  let nodeStack = [{ node: root, depth: 1 }];

  while (nodeStack.length) {
    let { node, depth } = nodeStack.shift();

    if (!node.left && !node.right) {
      return depth;
    }
    if (node.left) {
      nodeStack.push({ node: node.left, depth: depth + 1 });
    }
    if (node.right) {
      nodeStack.push({ node: node.right, depth: depth + 1 });
    }
  }
};

const entry = [3, 9, 20, null, null, 15, 7];
const res = minDepth(makeTreeNodes(entry));

console.log('===', res);
