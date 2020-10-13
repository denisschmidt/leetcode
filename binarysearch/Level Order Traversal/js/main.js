/**
 * class Tree {
 *   constructor(val, left=null, right=null) {
 *     this.val = val
 *     this.left = left
 *     this.right = right
 *   }
 * }
 */
class Solution {
  solve(root) {
    if (root == null) return [];

    let queue = [];
    let ans = [];

    queue.push(root);

    while (queue.length) {
      let node = queue.shift();

      ans.push(node.val);

      if (node.left) {
        queue.push(node.left);
      }

      if (node.right) {
        queue.push(node.right);
      }
    }

    return ans;
  }
}
