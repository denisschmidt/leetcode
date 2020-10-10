/*

Given a binary tree rooted at root, the depth of each node is the shortest distance to the root.

A node is deepest if it has the largest depth possible among any node in the entire tree.

The subtree of a node is that node, plus the set of all descendants of that node.

Return the node with the largest depth such that it contains all the deepest nodes in its subtree.

Example 1:
  Input: [3,5,1,6,2,0,8,null,null,7,4]
  Output: [2,7,4]

Explanation:
  We return the node with value 2, colored in yellow in the diagram.
  The nodes colored in blue are the deepest nodes of the tree.
  The input "[3, 5, 1, 6, 2, 0, 8, null, null, 7, 4]" is a serialization of the given tree.
  The output "[2, 7, 4]" is a serialization of the subtree rooted at the node with value 2.
  Both the input and output have TreeNode type.
  
Note:
  The number of nodes in the tree will be between 1 and 500.
  The values of each node are unique.

*/

// Time O(N)
// Space O(N)
const subtreeWithAllDeepest = root => {
  if (root == null || isLeaf(root)) return root;

  let ans = null;
  let maxDepth = getMaxDepth(root);

  dfs(root, 1);

  return ans;

  function dfs(node, d) {
    if (node == null) {
      return null;
    }

    if (d == maxDepth) {
      ans = node;
      return node;
    }

    if (isLeaf(node)) {
      return null;
    }

    let l = dfs(node.left, d + 1);
    let r = dfs(node.right, d + 1);

    if (l != null && r != null) {
      ans = node;
    }

    return l || r;
  }

  function isLeaf(node) {
    return node.left == null && node.right == null;
  }

  function getMaxDepth(node) {
    if (node == null) return 0;
    let l = getMaxDepth(node.left);
    let r = getMaxDepth(node.right);
    return Math.max(l, r) + 1;
  }
};
