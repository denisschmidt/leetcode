class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
const serialize = root => {
  if (root == null) return [];

  let nums = [];
  let queue = [];

  queue.push(root);

  while (queue.length) {
    let node = queue.shift();

    if (node) {
      nums.push(node.val);
      queue.push(node.left);
      queue.push(node.right);
    } else {
      nums.push(null);
    }
  }

  while (nums.length && nums[nums.length - 1] == null) {
    nums.pop();
  }

  return nums;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {[]} data
 * @return {TreeNode}
 */
const deserialize = data => {
  if (data.length == 0) return null;

  let queue = [];
  let index = 0;

  let root = new TreeNode(data[index++]);
  queue.push(root);

  while (queue.length) {
    let node = queue.shift();

    let left = data[index++];

    if (left != null && left != undefined) {
      node.left = new TreeNode(left);
      queue.push(node.left);
    }

    let right = data[index++];

    if (right != null && right != undefined) {
      node.right = new TreeNode(right);
      queue.push(node.right);
    }
  }

  return root;
};
