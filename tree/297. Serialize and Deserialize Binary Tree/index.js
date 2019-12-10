/*

Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory
buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.

Design an algorithm to serialize and deserialize a binary tree.
There is no restriction on how your serialization/deserialization algorithm should work.
You just need to ensure that a binary tree can be serialized to a string
and this string can be deserialized to the original tree structure.

Example:
  You may serialize the following tree:

      1
     / \
    2   3
       / \
      4   5

  as "[1,2,3,null,null,4,5]"

Clarification:
  The above format is the same as how LeetCode serializes a binary tree.
  You do not necessarily need to follow this format, so please be creative and come up with different approaches yourself.

Note:
  Do not use class member/global/static variables to store states.
  Your serialize and deserialize algorithms should be stateless.

 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {}
 */
const serialize = root => {
  if (!root) return [];

  const queue = [root];
  const nums = [];

  while (queue.length) {
    const node = queue.shift();

    if (node) {
      nums.push(node.val);

      queue.push(node.left);
      queue.push(node.right);
    } else {
      nums.push(null);
    }
  }

  while (nums.length && nums[nums.length - 1] === null) {
    nums.pop();
  }

  return nums;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {} data
 * @return {TreeNode}
 */
const deserialize = data => {
  if (data.length === 0) return null;

  const root = new TreeNode(data.shift());
  const queue = [root];

  while (data.length) {
    const node = queue.shift();

    let left = data.shift();

    if (left !== null && left !== undefined) {
      node.left = new TreeNode(left);
      queue.push(node.left);
    }

    let right = data.shift();

    if (right !== null && right !== undefined) {
      node.right = new TreeNode(right);
      queue.push(node.right);
    }
  }

  return root;
};

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
