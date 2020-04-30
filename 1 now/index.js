/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number[]} arr
 * @return {boolean}
 */
var isValidSequence = function(root, arr) {
  let idx = arr.length - 1;

  return helper(root);

  function helper(node) {
    if (node == null) return false;

    let left = helper(node.left);
    let right = helper(node.right);

    let isValid = false;

    if (idx == arr.length - 1) {
      if (node.val == arr[idx]) {
        isValid = true;
      }
    } else {
      if ((left == true || right == true) && node.val == arr[idx]) {
        isValid = true;
      }
    }

    return isValid;
  }
};
