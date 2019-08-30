const { makeTreeNodes } = require('../../algorithms/treeNode');

/*
Given a binary tree, return the postorder traversal of its nodes' values.

Example:

Input: [1,null,2,3]
   1
    \
     2
    /
   3

Output: [3,2,1]
Follow up: Recursive solution is trivial, could you do it iteratively?
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/*
  Solution using DFS

  Let's start from the root and then at each iteration pop the current node out of the stack
  and push its child nodes. In the implemented strategy we push nodes into stack
  following the order Top->Bottom and Left->Right.

  Since DFS postorder transversal is Bottom->Top and Left->Right the output list
  should be reverted after the end of loop.

  Time complexity :
    we visit each node exactly once, thus the time complexity is O(N),
    where N is the number of nodes, i.e. the size of tree.

  Space complexity: depending on the tree structure, we could keep up to the entire tree,
    therefore, the space complexity is O(N).

 */

// Solution using DFS
// Time O(N)
// Space O(N)
const postorderTraversal = function(root) {
  let stack = [];
  let arr = [];
  stack.push(root);

  while (stack.length) {
    let node = stack.pop();

    if (node !== null) {
      arr.push(node.val);
      stack.push(node.left);
      stack.push(node.right);
    }
  }

  return arr.reverse();
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Time O(N)
// Space O(N)
const postorderTraversal2 = function(root) {
  if (root === null) return [];

  const stack = [];
  const ans = [];
  stack.push(root);

  while (stack.length) {
    let node = stack.pop();

    ans.unshift(node.val);

    if (node.left !== null) stack.push(node.left);
    if (node.right !== null) stack.push(node.right);
  }

  return ans;
};
