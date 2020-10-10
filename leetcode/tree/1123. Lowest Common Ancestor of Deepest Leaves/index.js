/*

Given a rooted binary tree, return the lowest common ancestor of its deepest leaves.

Recall that:
  The node of a binary tree is a leaf if and only if it has no children
  The depth of the root of the tree is 0, and if the depth of a node is d, the depth of each of its children is d+1.
  The lowest common ancestor of a set S of nodes is the node A with the largest depth such that every node in S is in the subtree with root A.
  
Example 1:
  Input: root = [1,2,3]
  Output: [1,2,3]
  Explanation: 
    The deepest leaves are the nodes with values 2 and 3.
    The lowest common ancestor of these leaves is the node with value 1.
    The answer returned is a TreeNode object (not an array) with serialization "[1,2,3]".

Example 2:
  Input: root = [1,2,3,4]
  Output: [4]

Example 3:
  Input: root = [1,2,3,4,5]
  Output: [2,4,5]
 
Constraints:
  The given tree will have between 1 and 1000 nodes.
  Each node of the tree will have a distinct value between 1 and 1000.

*/

// Time O(N)
// Space O(H)
const lcaDeepestLeaves = root => {
  let maxDepth = -1;
  let ans = null;

  helper(root, 0);

  return ans;

  function helper(node, depth) {
    maxDepth = Math.max(maxDepth, depth);

    if (node == null) return depth;

    let left = helper(node.left, depth + 1);
    let right = helper(node.right, depth + 1);

    if (left == maxDepth && right == maxDepth) {
      ans = node;
    }

    return Math.max(left, right);
  }
};

// Time O(N)
// Space O(N)
const lcaDeepestLeaves_II = root => {
  if (root == null) return null;

  let maxDepth = -1;
  let map = new Map();
  let queue = [];

  helper(root, null, 0);

  if (queue.length == 1) return new TreeNode(queue[0]);

  while (queue.length) {
    let copy = [];
    let s = queue.length;
    let first = null;
    let cnt = 0;

    for (let k = 0; k < s; k++) {
      let val = queue.shift();
      let parent = map.get(val);

      if (first == null) {
        first = parent;
        cnt = 1;
      } else if (first == parent) {
        cnt++;
      }

      copy.push(parent.val);
    }

    if (cnt == s) return first;

    queue = [...copy];
  }

  return null;

  function helper(node, parent, d) {
    if (node == null) return;

    if (d > maxDepth) {
      queue = [node.val];
      maxDepth = d;
    } else if (d == maxDepth) {
      queue.push(node.val);
    }

    map.set(node.val, parent);

    helper(node.left, node, d + 1);
    helper(node.right, node, d + 1);
  }
};
