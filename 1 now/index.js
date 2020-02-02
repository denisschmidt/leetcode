/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var deepestLeavesSum = function(root) {
  let stack = [root];
  let depth = [0];
  let map = new Map();
  let maxDepth = 0;

  while (stack.length) {
    let node = stack.pop();
    let d = depth.pop();

    if (node !== null) {
      if (!map.has(d)) {
        map.set(d, []);
      }

      map.get(d).push(node.val);

      maxDepth = Math.max(maxDepth, d);

      stack.push(node.right);
      stack.push(node.left);

      depth.push(d + 1);
      depth.push(d + 1);
    }
  }

  let result = 0;

  for (let val of map.get(maxDepth).values()) {
    result += val;
  }

  return result;
};
