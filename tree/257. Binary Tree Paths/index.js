/*
Given a binary tree, return all root-to-leaf paths.

Note: A leaf is a node with no children.

Example:

Input:

   1
 /   \
2     3
 \
  5

Output: ["1->2->5", "1->3"]

Explanation: All root-to-leaf paths are: 1->2->5, 1->3
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
 * @param {TreeNode} root
 * @return {string[]}
 */
const binaryTreePaths = function(root) {
  let path = [];
  let paths = [];
  const treePaths = (node, path, paths) => {
    if (node === null) return;

    path.push(node.val);

    if (node.left === null && node.right === null) {
      let str = path.join('->');
      paths.push(str);
    }

    treePaths(node.left, path, paths);
    treePaths(node.right, path, paths);
    path.pop();
  };

  treePaths(root, path, paths);
  return paths;
};

const res = binaryTreePaths(makeTreeNodes([1, 2, 3, null, 5, null, null]));
console.log('---', res);
