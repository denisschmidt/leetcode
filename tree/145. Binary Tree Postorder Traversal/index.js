const { makeTreeNodes } = require('../../algorithms/treeNode');

/*
Given a binary tree, return the postorder traversal of its nodes' values.

Example:

Input: [1,null,2,3]
   1
    \
     2
    /
   3

Output: [3,2,1]
Follow up: Recursive solution is trivial, could you do it iteratively?
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/*
  Solution using DFS

  Time complexity :
    we visit each node exactly once, thus the time complexity is O(N),
    where N is the number of nodes, i.e. the size of tree.

  Space complexity: depending on the tree structure, we could keep up to the entire tree,
    therefore, the space complexity is O(N).

 */

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const postorderTraversal = function(root) {
  let nodeQueue = [];
  let arr = [];
  nodeQueue.push(root);

  while (nodeQueue.length) {
    let node = nodeQueue.pop();
    if (node !== null) {
      arr.push(node.val);
      nodeQueue.push(node.left);
      nodeQueue.push(node.right);
    }
  }

  return arr.reverse();
};

const res = postorderTraversal(makeTreeNodes([1, null, 2, 3]));
console.log('---', res);

const postorderTraversal2 = function(root) {
  let nodeQueue = [];
  let arr = [];
  nodeQueue.push(root);

  while (nodeQueue.length) {
    let node = nodeQueue.pop();
    arr.unshift(node.val);
    if (node.left !== null) {
      nodeQueue.push(node.left);
    }
    if (node.right !== null) {
      nodeQueue.push(node.right);
    }
  }

  return arr;
};

const res2 = postorderTraversal2(makeTreeNodes([1, null, 2, 3]));
console.log('---', res2);
