/*
Given an integer n, generate all structurally unique BST's (binary search trees) that store values 1 ... n.

Example:

Input: 3
Output:
[
  [1,null,3,2],
  [3,2,null,1],
  [3,1,null,null,2],
  [2,1,3],
  [1,null,2,null,3]
]
Explanation:
The above output corresponds to the 5 unique BST's shown below:

   1         3     3      2      1
    \       /     /      / \      \
     3     2     1      1   3      2
    /     /       \                 \
   2     1         2                 3



Complexity analysis -> https://leetcode.com/problems/unique-binary-search-trees-ii/solution/

 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
const { TreeNode } = require('../../algorithms/treeNode');

const dfn = (start, end) => {
  let allTrees = [];
  if (start > end) {
    allTrees.push(null);
    return allTrees;
  }

  for (let i = start; i <= end; i++) {
    // all possible left subtrees if i is choosen to be a root
    let leftTrees = dfn(start, i - 1);

    // all possible right subtrees if i is choosen to be a root
    let rightTrees = dfn(i + 1, end);

    // connect left and right trees to the root i
    for (let li = 0; li < leftTrees.length; li++) {
      for (let ri = 0; ri < rightTrees.length; ri++) {
        let node = new TreeNode(i);
        node.left = leftTrees[li];
        node.right = rightTrees[ri];
        allTrees.push(node);
      }
    }
  }
  return allTrees;
};

const generateTrees = function(n) {
  if (n === 0) {
    return [];
  }
  return dfn(1, n);
};

generateTrees(19);
