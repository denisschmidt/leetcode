/*

Given a binary tree root, a ZigZag path for a binary tree is defined as follow:

Choose any node in the binary tree and a direction (right or left).
If the current direction is right then move to the right child of the current node otherwise move to the left child.
Change the direction from right to left or right to left.
Repeat the second and third step until you can't move in the tree.
Zigzag length is defined as the number of nodes visited - 1. (A single node has a length of 0).

Return the longest ZigZag path contained in that tree.

Example 1:
  Input: root = [1,null,1,1,1,null,null,1,1,null,1,null,null,null,1,null,1]
  Output: 3
  Explanation: Longest ZigZag path in blue nodes (right -> left -> right).

Example 2:
  Input: root = [1,1,1,null,1,null,null,1,1,null,1]
  Output: 4
  Explanation: Longest ZigZag path in blue nodes (left -> right -> left -> right).

Example 3:
  Input: root = [1]
  Output: 0
 

Constraints:
  Each tree has at most 50000 nodes..
  Each node's value is between [1, 100].

*/

// Time O(N)
// Space O(N)
const longestZigZag = root => {
  let max = 0;

  maxZigZag(root);

  return max;

  function maxZigZag(node, isLeft, cnt) {
    if (node == null) return 0;

    let l = maxZigZag(node.left, true, 0);
    let r = maxZigZag(node.right, false, 0);

    max = Math.max(max, l, r);

    return isLeft ? r + 1 : l + 1;
  }
};

// Time O(N^2)
// Space O(N^2)
const longestZigZag_II = root => {
  let res = 0;

  dfs(root);

  return res;

  function dfs(node) {
    if (node == null) return;

    res = Math.max(res, maxZigZag(node.left, 'LEFT', 0), maxZigZag(node.right, 'RIGHT', 0));

    dfs(node.left);
    dfs(node.right);
  }

  function maxZigZag(node, dir, cnt) {
    if (node == null) return cnt;

    let l = 0;
    let r = 0;
    if (dir == 'LEFT') {
      l = maxZigZag(node.right, 'RIGHT', cnt + 1);
    } else {
      r = maxZigZag(node.left, 'LEFT', cnt + 1);
    }

    return Math.max(l, r);
  }
};
