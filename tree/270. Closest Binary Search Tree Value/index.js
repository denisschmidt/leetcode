/*
Given a non-empty binary search tree and a target value, find the value in the BST that is closest to the target.

Note:

Given target value is a floating point.
You are guaranteed to have only one unique value in the BST that is closest to the target.
Example:

Input: root = [4,2,5,1,3], target = 3.714286

    4
   / \
  2   5
 / \
1   3

Output: 4

 */

// Time O(N)
// Space O(N)
const closestValue = (root, target) => {
  let ans = -1;
  let minDiff = Number.MAX_VALUE;

  helper(root);

  return ans;

  function helper(node) {
    if (node === null) return;

    let diff = Math.abs(target - node.val);

    if (diff < minDiff) {
      minDiff = diff;
      ans = node.val;
    }

    helper(node.left);
    helper(node.right);
  }
};
