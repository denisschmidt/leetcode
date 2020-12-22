/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

// Time O(N)
// Space O(N)
const inorderTraversal = function (root) {
  let nodeStack = [];
  let node = root;
  const resArr = [];

  while (nodeStack.length > 0 || node !== null) {
    while (node !== null) {
      nodeStack.push(node);
      node = node.left;
    }

    node = nodeStack.pop();
    resArr.push(node.val);
    node = node.right;
  }
  return resArr;
};
