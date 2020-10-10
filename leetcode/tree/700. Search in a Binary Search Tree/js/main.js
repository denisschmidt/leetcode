/*

Given the root node of a binary search tree (BST) and a value.

You need to find the node in the BST that the node's value equals the given value.

Return the subtree rooted with that node.
If such node doesn't exist, you should return NULL.

For example,

Given the tree:
        4
       / \
      2   7
     / \
    1   3

And the value to search: 2

You should return this subtree:

      2
     / \
    1   3

In the example above, if we want to search the value 5,
since there is no node with value 5, we should return NULL.


Time complexity : O(n)
A total of n nodes need to be traversed.
Here, n represents the minimum number of nodes from the two given trees.

Auxiliary Space : O(n)
The depth of the recursion tree can go upto n in case of a skewed tree.
In average case, depth will be O(logn).

*/

// Time O(H) where H is a tree height. Average Time O(LogN). O(N) - worst case
// Space O(H) - average O(LogN) - worst case O(N)
const searchBST = (root, target) => {
  if (root === null || root.val === target) return root;

  let ans = null;

  dfs();

  return ans;

  function dfs(node) {
    if (node == null) return;

    if (node.val == target) {
      ans = node;
      return;
    }

    if (val > node.val) dfs(node.right);
    if (val < node.val) dfs(node.left);
  }
};
