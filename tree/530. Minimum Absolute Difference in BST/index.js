/*

Given a binary search tree with non-negative values, find the minimum absolute difference between values of any two nodes.

Example:
  Input:

    1
      \
      3
      /
    2

  Output:
  1

Explanation: The minimum absolute difference is 1, which is the difference between 2 and 1 (or between 2 and 3).
 

Note:
  There are at least two nodes in this BST.
  This question is the same as 783: https://leetcode.com/problems/minimum-distance-between-bst-nodes/


*/

// Так как у нас дерево является BST мы можем использовать InOrder обход так как массив будет отсортирован в порядке возрастания

// Time O(N)
// Space O(N)
const getMinimumDifference = root => {
  let min = Number.MAX_VALUE;
  let prev = null;

  helper(root);

  return min;

  function helper(node) {
    if (node === null) return;

    helper(node.left);

    if (prev !== null && min > node.val - prev) {
      min = node.val - prev;
    }

    prev = node.val;
    helper(node.right);
  }
};

// Time O(N ^ 2)
// Space O(N)
const getMinimumDifference_II = root => {
  let INF = Number.MAX_VALUE;
  let ans = INF;

  helper(root);

  return ans;

  function helper(node) {
    if (!node) return;
    dfs(node.left, node.val);
    dfs(node.right, node.val);

    helper(node.left);
    helper(node.right);
  }

  function dfs(node, target) {
    if (!node) return;

    ans = Math.min(ans, Math.abs(target - node.val));

    dfs(node.left, target);
    dfs(node.right, target);
  }
};
