/*

Given a non-empty special binary tree consisting of nodes with the non-negative value, where each node in this tree has exactly two or zero sub-node. 

If the node has two sub-nodes, then this node's value is the smaller value among its two sub-nodes. 

More formally, the property root.val = min(root.left.val, root.right.val) always holds.

Given such a binary tree, you need to output the second minimum value in the set made of all the nodes' value in the whole tree.

If no such second minimum value exists, output -1 instead.

Example 1:
  Input: 
      2
    / \
    2   5
      / \
      5   7

  Output: 5
  Explanation: The smallest value is 2, the second smallest value is 5.
  

Example 2:
  Input: 
      2
    / \
    2   2

  Output: -1
  Explanation: The smallest value is 2, but there isn't any second smallest value.

*/

// Time O(N)
// Space O(1)
const findSecondMinimumValue = root => {
  let first = Number.MAX_VALUE;
  let second = Number.MAX_VALUE;

  dfs(root);

  if (second == Number.MAX_VALUE) {
    return -1;
  }

  return second;

  function dfs(node) {
    if (node == null) {
      return;
    }

    let val = null;

    if (isLeaf(node)) {
      val = node.val;
    }

    if (node.left && node.right) {
      val = Math.min(node.left.val, node.right.val);
    }

    if (val < first) {
      second = first;
      first = val;
    } else if (val < second && val != first) {
      second = val;
    }

    dfs(node.left);
    dfs(node.right);
  }

  function isLeaf(node) {
    return node.left == null && node.right == null;
  }
};
