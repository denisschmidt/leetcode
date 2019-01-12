/*
Given a binary tree, find the leftmost value in the last row of the tree.

Example 1:
  Input:
      2
     / \
    1   3
  Output:
    1

Example 2:
  Input:
          1
         / \
        2   3
       /   / \
      4   5   6
         /
        7
  Output:
    7

Note: You may assume the tree (i.e., the given root node) is not NULL.

 */

const { makeTreeNodes, TreeNode } = require('../../algorithms/treeNode');
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 *
 * DFS
 *
 * @param {TreeNode} root
 * @return {number}
 */

const findBottomLeftValue = function(root) {
  let nodeStack = [],
    depthStack = [],
    rightmostValueAtDepth = new Map(),
    maxDepth = -1;
  nodeStack.push(root);
  depthStack.push(0);
  while (nodeStack.length) {
    let node = nodeStack.pop();
    let depth = depthStack.pop();
    if (node !== null) {
      maxDepth = Math.max(maxDepth, depth);
      if (!rightmostValueAtDepth.has(depth)) {
        rightmostValueAtDepth.set(depth, node.val);
      }
      nodeStack.push(node.right);
      nodeStack.push(node.left);
      depthStack.push(depth + 1);
      depthStack.push(depth + 1);
    }
  }
  return rightmostValueAtDepth.get(maxDepth);
};

const res = findBottomLeftValue(makeTreeNodes([1, 2, 3, 4, 5, 6, null, null, null, 7, 8])); // 1

console.log('---', res);

const findBottomLeftValue2 = function(root) {
  let node,
    queue = [];
  queue.push(root);
  while (queue.length) {
    node = queue.shift();
    if (node.right !== null) {
      queue.push(node.right);
    }
    if (node.left !== null) {
      queue.push(node.left);
    }
  }
  return node.val;
};

const res2 = findBottomLeftValue2(makeTreeNodes([1, 2, 3, 4, 5, 6, null, null, null, 7, 8]));
console.log('---', res2);
