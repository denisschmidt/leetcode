/*
Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer,
or transmitted across a network connection link to be reconstructed later in the same or another computer environment.

Design an algorithm to serialize and deserialize a binary search tree.
There is no restriction on how your serialization/deserialization algorithm should work.
You just need to ensure that a binary search tree can be serialized to a string and this string can be deserialized to the original tree structure.

The encoded string should be as compact as possible.

Note: Do not use class member/global/static variables to store states. Your serialize and deserialize algorithms should be stateless.

 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
const serialize = root => {
  let queue = [root];
  let ans = '';

  if (root === null) return '';

  while (queue.length) {
    const node = queue.shift();

    if (node !== null) {
      ans += ans.length ? ` ${node.val}` : `${node.val}`;
      queue.push(node.left);
      queue.push(node.right);
    } else {
      ans += ` null`;
    }
  }

  return ans;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
const deserialize = data => {
  if (!data.length) return null;

  const arr = data.split(' ');
  const size = arr.length;
  let i = 0;

  if (size === 0) return null;

  const root = new TreeNode(arr[i++]);

  makeTree([root]);

  return root;

  function makeTree(parents) {
    if (i >= size) {
      return;
    }

    const children = [];

    parents.forEach(parent => {
      let left = arr[i++];
      let right = arr[i++];

      left = left === 'null' ? null : Number(left);
      right = right === 'null' ? null : Number(right);

      if (left !== null && left !== undefined) {
        const node = new TreeNode(left);
        parent.left = node;
        children.push(node);
      } else {
        parent.left = null;
      }

      if (right !== null && right !== undefined) {
        const node = new TreeNode(right);
        parent.right = node;
        children.push(node);
      } else {
        parent.right = null;
      }
    });

    makeTree(children);
  }
};

const { makeTreeNodes } = require('../../algorithms/treeNode');

const node = makeTreeNodes([]);

const res1 = serialize(node);

console.log('===', res1);

const res2 = deserialize(res1);

console.log('===', res2);
