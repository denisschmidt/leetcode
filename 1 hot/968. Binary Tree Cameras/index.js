/*
Given a binary tree, we install cameras on the nodes of the tree.

Each camera at a node can monitor its parent, itself, and its immediate children.

Calculate the minimum number of cameras needed to monitor all nodes of the tree.

Example 1:
  Input: [0,0,null,0,0]
  Output: 1
  Explanation: One camera is enough to monitor all nodes if placed as shown.

Example 2:
  Input: [0,0,null,0,null,0,null,null,0]
  Output: 2
  Explanation:
    At least two cameras are needed to monitor all nodes of the tree.
    The above image shows one of the valid configurations of camera placement.

Note:
  The number of nodes in the given tree will be in the range [1, 1000].
  Every node has value 0.

 */

const minCameraCover = root => {
  if (!root || (root && !root.left && !root.right)) return 1;

  let comb = [];
  let cnt = 0;

  reCalc(root);
  dfs(root, null);

  let result = 0;
  let visited = new Set();

  console.log(comb);

  while (visited.size < cnt) {
    let maxLen = -Number.MAX_VALUE;
    let maxIndex = 0;
    for (let j = 0; j < comb.length; j++) {
      let f = comb[j].filter(n => !visited.has(n));
      if (f.length > maxLen) {
        maxIndex = j;
        maxLen = f.length;
      }
    }

    if (maxLen !== -Number.MAX_VALUE) {
      result++;
      comb[maxIndex].forEach(n => visited.add(n));
    }
  }

  return result;

  function dfs(node, parent) {
    if (!node) return;

    if (!parent && !node.left && node.right) {
      comb.push([node.val, node.right.val]);
    } else if (!parent && node.left && !node.right) {
      comb.push([node.val, node.left.val]);
    } else if (!parent && node.left && node.right) {
      comb.push([node.val, node.left.val, node.right.val]);
    } else if (parent && !node.left && !node.right) {
      comb.push([parent.val, node.val]);
    } else if (parent && !node.left && node.right) {
      comb.push([parent.val, node.val, node.right.val]);
    } else if (parent && node.left && !node.right) {
      comb.push([parent.val, node.val, node.left.val]);
    } else if (parent && node.left && node.right) {
      comb.push([parent.val, node.val, node.left.val, node.right.val]);
    }

    dfs(node.left, node);
    dfs(node.right, node);
  }

  function reCalc(node) {
    if (!node) return;
    node.val = ++cnt;
    reCalc(node.left);
    reCalc(node.right);
  }
};

const { makeTreeNodes } = require('../../algorithms/treeNode');

const res = minCameraCover(makeTreeNodes([0, 0, 0, 0, null, null, null, 0, 0, null, 0, null, 0]));
console.log(res);
