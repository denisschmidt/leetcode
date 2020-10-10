/*

Given a Binary Search Tree (BST), convert it to a Greater Tree such that every key of the original BST is changed to the original key plus sum of all keys greater than the original key in BST.

Example:
  Input: The root of a Binary Search Tree like this:
                5
              /   \
            2     13

  Output: The root of a Greater Tree like this:
              18
              /   \
            20     13

Note: This question is the same as 1038: https://leetcode.com/problems/binary-search-tree-to-greater-sum-tree/

*/

// Time O(N)
// Space O(N)
const convertBST = root => {
  let sum = 0;

  dfs(root, '');

  return root;

  function dfs(node, dir) {
    if (node == null) return 0;

    dfs(node.right);

    sum += node.val;

    node.val = sum;

    dfs(node.left);
  }
};
