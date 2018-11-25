/*
Given a binary tree, return the zigzag level order traversal of its nodes' values. (ie, from left to right, then right to left for the next level and alternate between).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7

return its zigzag level order traversal as:
[
  [3],
  [20,9],
  [15,7]
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
const { makeTreeNodes } = require('../../utils');

const zigzagLevelOrder = root => {
  let nodeQueue = [], depthQueue = [];
  let maxDepth = -1;
  let depthMap = new Map();
  nodeQueue.push(root);
  depthQueue.push(0);

  while (nodeQueue.length) {
    let node = nodeQueue.shift();
    let depth = depthQueue.shift();

    if (node !== null) {
      maxDepth = Math.max(maxDepth, depth);

      if (depthMap.has(depth)) {
        let val = depthMap.get(depth);
         depth % 2 === 0 ? val.push(node.val) :val.unshift(node.val)
        depthMap.set(depth, val);
      } else {
        depthMap.set(depth, [node.val]);
      }
      nodeQueue.push(node.left);
      nodeQueue.push(node.right);

      depthQueue.push(depth + 1);
      depthQueue.push(depth + 1);
    }
  }
  const res = []
  for(let i=0;i<=maxDepth;i++) {
    res.push(depthMap.get(i))
  }
  return res;
};


const arr = zigzagLevelOrder(makeTreeNodes([1,2,3,4,null,null,5]))


console.log('---', arr);



