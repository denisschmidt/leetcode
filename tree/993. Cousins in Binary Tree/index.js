/*
In a binary tree, the root node is at depth 0, and children of each depth k node are at depth k+1.

Two nodes of a binary tree are cousins if they have the same depth, but have different parents.

We are given the root of a binary tree with unique values, and the values x and y of two different nodes in the tree.

Return true if and only if the nodes corresponding to the values x and y are cousins.


Example 1:

  Input: root = [1,2,3,4], x = 4, y = 3
  Output: false

Example 2:
  Input: root = [1,2,3,null,4,null,5], x = 5, y = 4
  Output: true

Example 3:
  Input: root = [1,2,3,null,4], x = 2, y = 3
  Output: false
 

Note:
  The number of nodes in the tree will be between 2 and 100.
  Each node has a unique integer value from 1 to 100.

 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

// Time O(N)
// Space O(N)
const isCousins = (root, x, y) => {
  let path1 = getPath(root, x);
  let path2 = getPath(root, y);

  if (!path1.length || !path2.length) return false;

  if (path1.length !== path2.length) return false;

  return path1[1] !== path2[1];

  function getPath(root, x) {
    if (root === null) {
      return [];
    }

    if (root.val === x) {
      return [root.val];
    }

    let left = getPath(root.left, x);
    let right = getPath(root.right, x);

    if (left.length) {
      left.push(root.val);
    }

    if (right.length) {
      right.push(root.val);
    }

    return [...left, ...right];
  }
};

// Time O(N)
// Space O(N)
const isCousins_II = function (root, x, y) {
  let map = new Map();

  helper(root, null, 0);

  let [n1, d1] = map.get(x);
  let [n2, d2] = map.get(y);

  return d1 == d2 && n1 != n2;

  function helper(node, parent, depth) {
    if (node == null) return null;

    map.set(node.val, [parent, depth]);

    helper(node.left, node, depth + 1);
    helper(node.right, node, depth + 1);
  }
};
