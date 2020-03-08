/*
Given a binary search tree and a node in it, find the in-order successor of that node in the BST.

The successor of a node p is the node with the smallest key greater than p.val.

Example 1:
  Input: root = [2,1,3], p = 1
  Output: 2
  Explanation: 1's in-order successor node is 2. Note that both p and the return value is of TreeNode type.

Example 2:
  Input: root = [5,3,6,2,4,null,null,1], p = 6
  Output: null
  Explanation: There is no in-order successor of the current node, so the answer is null.
 

Note:
  If the given node has no in-order successor in the tree, return null.
  It's guaranteed that the values of the tree are unique.

*/

// Time O(N)
// Space O(N)
const inorderSuccessor = (root, p) => {
  let ans = null;

  helper(root);

  return ans;

  function helper(node) {
    if (!node) return;

    helper(node.left);

    if (ans === null) {
      if (node.val > p.val) {
        ans = node;
      }
    }

    helper(node.right);
  }
};

// Уходим вправо для поиска successor или находим ближайшего предка
// Time O(N)
// Space O(N)
const inorderSuccessor_II = (root, p) => {
  let parent = null;

  if (p.right) return getSuccessor(p);

  find(root, p);

  if (parent && parent.val > p.val) return parent;

  return null;

  function find(node, target) {
    if (node === null) return null;

    if (node === target) return node;

    if (node.val > target.val) {
      parent = node;
      find(node.left, target);
    } else {
      find(node.right, target);
    }
  }

  function getSuccessor(node) {
    node = node.right;

    while (node.left !== null) {
      node = node.left;
    }

    return node;
  }
};
