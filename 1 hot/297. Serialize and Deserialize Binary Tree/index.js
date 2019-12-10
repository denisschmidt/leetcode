/*
Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer,
or transmitted across a network connection link to be reconstructed later in the same or another computer environment.

Design an algorithm to serialize and deserialize a binary tree.
There is no restriction on how your serialization/deserialization algorithm should work.
You just need to ensure that a binary tree can be serialized to a string and this string can be deserialized to the original tree structure.

Example:

You may serialize the following tree:

    1
   / \
  2   3
     / \
    4   5

as "[1,2,3,null,null,4,5]"

Clarification: The above format is the same as how LeetCode serializes a binary tree.
You do not necessarily need to follow this format, so please be creative and come up with different approaches yourself.

Note:
  Do not use class member/global/static variables to store states.
  Your serialize and deserialize algorithms should be stateless.

 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
const serialize = root => {
  const queue = [root];
  const depthQueue = [0];
  const nums = [];
  const map = new Map();
  let maxDepth = -1;

  while (queue.length) {
    const node = queue.shift();
    const depth = depthQueue.shift();
    const val = node ? node.val : null;
    maxDepth = Math.max(maxDepth, depth);
    depthQueue.push(depth + 1);
    depthQueue.push(depth + 1);
    map.set(depth, map.get(depth) ? [...map.get(depth), val] : [val]);

    if (node) {
      nums.push(node.val);
      queue.push(node.left);
      queue.push(node.right);
    } else {
      nums.push(null);
    }
  }

  for (let i = 0; i <= maxDepth; i++) {
    const arr = map.get(i);
    console.log(arr);
  }

  return nums;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
const deserialize = data => {};

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const { makeTreeNodes } = require('../../algorithms/treeNode');

const node = makeTreeNodes([1, 2, 3, null, null, 4, 5]);

const res1 = serialize(node);

console.log('===', res1);

const res2 = deserialize(res1);

console.log('===', res2);
