/*

Given the root node of a binary search tree,
  return the sum of values of all nodes with value between L and R (inclusive).

The binary search tree is guaranteed to have unique values.

Example 1:
  Input: root = [10,5,15,3,7,null,18], L = 7, R = 15
  Output: 32

Example 2:
  Input: root = [10,5,15,3,7,13,18,1,null,6], L = 6, R = 10
  Output: 23

*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

const { makeTreeNodes } = require('../../algorithms/treeNode');

/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
const rangeSumBST = function (root, L, R) {
  let nodeStack = [],
    valuesArr = [];
  nodeStack.push(root);

  while (nodeStack.length) {
    let node = nodeStack.pop();

    if (node !== null) {
      nodeStack.push(node.left);
      nodeStack.push(node.right);
      if (node.val >= L && node.val <= R) {
        valuesArr.push(node.val);
      }
    }
  }
  // console.log('---', valuesArr);
  return valuesArr.reduce((acc, item) => acc + item, 0);
};

const res = rangeSumBST(makeTreeNodes([10, 5, 15, 3, 7, 13, 18, 1, null, 6]), 6, 10);

console.log('--First solution--', res);

//====================DFS Recursive Implementation=======================================

const rangeSumBST2 = (root, L, R) => {
  let res = 0;
  const dfs = (node, L, R) => {
    if (node !== null) {
      if (L <= node.val && node.val <= R) {
        res += node.val;
      }
      if (L < node.val) {
        dfs(node.left, L, R);
      }
      if (node.val < R) {
        dfs(node.right, L, R);
      }
    }
  };

  dfs(root, L, R);

  console.log('--Second solution--', res);

  return res;
};

rangeSumBST2(makeTreeNodes([10, 5, 15, 3, 7, 13, 18, 1, null, 6]), 6, 10);
