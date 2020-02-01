const { TreeNode, makeTreeNodes } = require('../algorithms/treeNode');

const insertIntoMaxTree = (root, val) => {
  let nums = [];

  inOrder(root);
  nums.push(val);

  return create(nums);

  function inOrder(node) {
    if (node === null) {
      return;
    }

    inOrder(node.left);
    nums.push(node.val);
    inOrder(node.right);
  }

  function create(nums) {
    if (nums.length === 0) {
      return null;
    }

    let max = 0;
    let maxIndex = 0;

    for (let i = 0; i < nums.length; i++) {
      if (nums[i] > max) {
        max = nums[i];
        maxIndex = i;
      }
    }

    let node = new TreeNode(max);

    node.left = create(nums.slice(0, maxIndex));
    node.right = create(nums.slice(maxIndex + 1));

    return node;
  }
};
