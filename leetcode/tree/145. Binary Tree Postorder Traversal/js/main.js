// Postorder Traversal
// left - right - root

// Мы максимально уходим по левой ветке
// Если у нас нету левой ветки поднимается по стеку и пытаемся уйти в правую ветку
// Если нету ни левой, ни правой ветки, то добавляем знаение в ответ

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
 * @return {number[]}
 */

// Time O(N)
// Space O(N)
var postorderTraversal = function (root) {
  let stack = [];
  let ans = [];

  while (root != null || stack.length) {
    while (root != null) {
      if (root.right) {
        stack.push(root.right);
      }
      stack.push(root);
      root = root.left;
    }

    root = stack.pop();

    if (stack.length && root.right == stack[stack.length - 1]) {
      stack[stack.length - 1] = root;
      root = root.right;
    } else {
      ans.push(root.val);
      root = null;
    }
  }

  return ans;
};
