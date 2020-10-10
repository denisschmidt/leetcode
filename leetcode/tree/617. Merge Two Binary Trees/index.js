/*

Given two binary trees and imagine that when you put one of them to cover the other, some nodes of the two trees are overlapped while the others are not.

You need to merge them into a new binary tree. The merge rule is that if two nodes overlap, then sum node values up as the new value of the merged node. Otherwise, the NOT null node will be used as the node of new tree.

Example 1:
  Input:
    Tree 1                     Tree 2
            1                         2
          / \                       / \
          3   2                     1   3
        /                           \   \
        5                             4   7
  Output:
  Merged tree:
        3
        / \
      4   5
      / \   \
    5   4   7

Note: The merging process must start from the root nodes of both trees.

*/

// Time O(N)
// Space O(N)
const mergeTrees = (t1, t2) => {
  return helper(t1, t2);

  // Создаем глубокую копию дерева
  function helper(t1, t2) {
    if (t1 == null) return copyTree(t2);
    if (t2 == null) return copyTree(t1);

    let root = new TreeNode(t1.val + t2.val);
    root.left = mergeTrees(t1.left, t2.left);
    root.right = mergeTrees(t1.right, t2.right);

    return root;
  }

  function copyTree(root) {
    if (root == null) return null;
    let node = new TreeNode(root.val);
    node.left = copyTree(root.left);
    node.right = copyTree(root.right);
    return node;
  }
};
