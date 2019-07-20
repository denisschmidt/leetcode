/*
Given a binary tree, count the number of uni-value subtrees.

A Uni-value subtree means all nodes of the subtree have the same value.

Example:

  Input:  root = [5,1,5,5,5,null,5]

      5
     / \
    1   5
   / \   \
  5   5   5

  Output: 4
 */

const { makeTreeNodes } = require('../../algorithms/treeNode');

const countUnivalSubtrees = root => {
  const stack = [];
  let ans = 0;
  stack.push(root);

  while (stack.length) {
    const node = stack.pop();

    if (node.left) {
      stack.push(node.left);
    }

    if (node.right) {
      stack.push(node.right);
    }

    if (!node.left && !node.right) ans++;
    if (node.left && node.right && node.val === node.left.val && node.val === node.right.val) ans++;
    if (!node.left && node.right && node.right.val === node.val) ans++;
  }
  return ans;
};

const input = makeTreeNodes([5, 1, 5, 5, 5, null, 5]);

const res = countUnivalSubtrees(input);
console.log('===', res);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Time complexity : O(N). Same as the previous approach.
// Space complexity : O(H), with H being the height of the tree. Same as the previous approach.
const countUnivalSubtreesReqursion = root => {
  let count = 0;

  const checkUni = (node, val) => {
    if (node === null) {
      return true;
    }

    if (!checkUni(node.left, node.val) && !checkUni(node.right, node.val)) return false;

    count++;

    return node.val === val;
  };

  checkUni(root, 0);
  return count;
};

const res2 = countUnivalSubtreesReqursion(input);
console.log('===', res2);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Time complexity : O(n).
// Space complexity : O(H), with H being the height of the tree.
// Each recursive call of isUni requires stack space.
// Since we fully process is_uni(node.left) before calling is_uni(node.right), the recursive stack is bound by the longest path from the root
// to a leaf - in other words the height of the tree.

const countUnivalSubtreesReqursion2 = root => {
  if (root === null) return 0;
  let count = 0;

  const isUnival = node => {
    if (!node) {
      count++;
      return true;
    }

    let isValid = true;

    if (node.left !== null) {
      isValid = isUnival(node.left) && isValid && node.left.val === node.val;
    }

    if (node.right !== null) {
      isValid = isUnival(node.right) && isValid && node.right.val === node.val;
    }

    if (!isValid) return false;

    count++;
    return true;
  };

  isUnival(root);

  return count;
};

const res3 = countUnivalSubtreesReqursion2(input);
console.log('===', res3);
