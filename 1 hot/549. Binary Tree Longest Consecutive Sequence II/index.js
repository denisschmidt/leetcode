/*
Given a binary tree, you need to find the length of Longest Consecutive Path in Binary Tree.

Especially, this path can be either increasing or decreasing. 
For example, [1,2,3,4] and [4,3,2,1] are both considered valid, but the path [1,2,4,3] is not valid. 

On the other hand, the path can be in the child-Parent-child order, where not necessarily be parent-child order.

Example 1:
  Input:
        1
       / \
      2   3
  Output: 2
  Explanation: The longest consecutive path is [1, 2] or [2, 1].
 

Example 2:
  Input:
        2
       / \
      1   3
  Output: 3
  Explanation: The longest consecutive path is [1, 2, 3] or [3, 2, 1].
 

Note: All the values of tree nodes are in the range of [-1e7, 1e7].


https://leetcode.com/problems/binary-tree-longest-consecutive-sequence-ii/solution/

*/

const { makeTreeNodes } = require('../../algorithms/treeNode');

var longestConsecutive = function(root) {
  let max = 0;
  helper(root);
  return max;

  function helper(node) {
    if (!node) return [0, 0];

    let l = helper(node.left);
    let r = helper(node.right);

    let inc = 1;
    let dec = 1;

    if (node.left) {
      if (node.val - node.left.val === 1) {
        inc = l[0] + 1;
      } else if (node.left.val - node.val === 1) {
        dec = l[1] + 1;
      }
    }

    if (node.right) {
      if (node.val - node.right.val === 1) {
        inc = Math.max(inc, r[0] + 1);
      } else if (node.right.val - node.val === 1) {
        dec = Math.max(dec, r[1] + 1);
      }
    }

    max = Math.max(max, inc + dec - 1);
    return [inc, dec];
  }
};
