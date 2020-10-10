/*
Given a binary tree, imagine yourself standing on the right side of it,
return the values of the nodes you can see ordered from top to bottom.

Example:

Input: [1,2,3,null,5,null,4]
Output: [1, 3, 4]
Explanation:

   1            <---
 /   \
2     3         <---
 \     \
  5     4       <---

 */

// DFS
// Time O(N)
// Space O(N)
const rightSideView = function (root) {
  let nodeStack = [];
  let depthStack = [];
  let maxDepth = -1;
  let rightmostValueAtDepth = new Map();
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
      nodeStack.push(node.left);
      nodeStack.push(node.right);
      depthStack.push(depth + 1);
      depthStack.push(depth + 1);
    }
  }
  const arr = [];
  for (let i = 0; i <= maxDepth; i++) {
    arr.push(rightmostValueAtDepth.get(i));
  }
  return arr;
};

// BFS
// Time O(N)
// Space O(N)
const rightSideView2 = function (root) {
  let nodeQueue = [];
  let depthQueue = [];
  let maxDepth = -1;

  let rightmostValueAtDepth = new Map();
  nodeQueue.push(root);
  depthQueue.push(0);

  while (nodeQueue.length) {
    let node = nodeQueue.shift();
    let depth = depthQueue.shift();

    if (node !== null) {
      maxDepth = Math.max(maxDepth, depth);
      rightmostValueAtDepth.set(depth, node.val);

      nodeQueue.push(node.left);
      nodeQueue.push(node.right);
      depthQueue.push(depth + 1);
      depthQueue.push(depth + 1);
    }
  }

  const res = [];
  for (let i = 0; i <= maxDepth; i++) {
    res.push(rightmostValueAtDepth.get(i));
  }
  return res;
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function (root) {
  if (root == null) return [];
  let map = new Map();
  let max = 0;

  dfs(root, 0);

  let res = [];
  for (let i = 0; i <= max; i++) {
    res.push(map.get(i));
  }
  return res;

  function dfs(node, lvl) {
    if (node == null) return;

    if (!map.has(lvl)) {
      map.set(lvl, node.val);
    }

    max = Math.max(max, lvl);

    dfs(node.right, lvl + 1);
    dfs(node.left, lvl + 1);
  }
};

const { makeTreeNodes } = require('../utils/treeNode');

let tree = makeTreeNodes([1, 2, 3, null, 5, null, 4]);

let x = rightSideView(tree);
console.log(x);
