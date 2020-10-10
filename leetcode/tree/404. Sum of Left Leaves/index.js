/*

Find the sum of all left leaves in a given binary tree.

  Example:

       3
     / \
    9  20
      /  \
    15   7

  There are two left leaves in the binary tree, with values 9 and 15 respectively. Return 24.

*/

// Time O(N)
// Space O(N)
const sumOfLeftLeaves = root => {
  return dfs(root, -1, 0);

  function dfs(node, dir, sum) {
    if (node == null) return dir === 1 ? sum : 0;

    if (dir === 1 && node.left == null && node.right == null) {
      sum += node.val;
    }

    return dfs(node.left, 1, sum) + dfs(node.right, 2, sum);
  }
};
