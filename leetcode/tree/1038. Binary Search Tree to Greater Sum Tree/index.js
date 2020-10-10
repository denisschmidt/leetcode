/*
Given the root of a binary search tree with distinct values,
modify it so that every node has a new value equal to the sum of the values of the original
tree that are greater than or equal to node.val.

As a reminder, a binary search tree is a tree that satisfies these constraints:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.


Example 1:
  Input: [4,1,6,0,2,5,7,null,null,null,3,null,null,null,8]
  Output: [30,36,21,36,35,26,15,null,null,null,33,null,null,null,8]


Note:
  The number of nodes in the tree is between 1 and 100.
  Each node will have value between 0 and 100.
  The given tree is a binary search tree.

 */

// Time O(N)
// Space O(1)
const bstToGst = root => {
  let sum = 0;

  dfs(root);

  return root;

  // left-root-right обход
  // Нам нужно сделать обход от самого большого значения до самого маленького, справа налево.
  // pre запишет предыдущее значение, которое мы получим - это общая сумма больших значений.
  function dfs(node) {
    if (node == null) return;

    dfs(node.right);

    sum += node.val;

    node.val = sum;

    dfs(node.left);
  }
};

// Time O(N)
// Space O(N)
const bstToGst2 = root => {
  const nums = [];
  const stack = [root];
  helper(root);

  while (stack.length) {
    const node = stack.pop();

    const index = nums.indexOf(node.val);
    let sum = nums[index];
    for (let i = index + 1; i < nums.length; i++) sum += nums[i];

    node.val = sum;

    if (node.left) stack.push(node.left);
    if (node.right) stack.push(node.right);
  }

  return root;

  function helper(node) {
    if (!node) return;
    helper(node.left);
    nums.push(node.val);
    helper(node.right);
  }
};

const { makeTreeNodes } = require('../../algorithms/treeNode');

const res = bstToGst(makeTreeNodes([4, 1, 6, 0, 2, 5, 7, null, null, null, 3, null, null, null, 8]));
console.log(res);
