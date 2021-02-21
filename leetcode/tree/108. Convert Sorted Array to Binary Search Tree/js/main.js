// Time O(N)
// Space O(N)
const sortedArrayToBST = nums => {
  function dfs(left, right) {
    if (left > right) {
      return null;
    }

    let mid = left + Math.floor((right - left) / 2);

    let node = new TreeNode(nums[mid]);

    node.left = dfs(left, mid - 1);
    node.right = dfs(mid + 1, right);

    return node;
  }

  return dfs(0, nums.length - 1);
};

// Time O(N)
// Space O(N)
const sortedArrayToBST_II = nums => {
  if (nums.left == 0) return null;

  const head = new TreeNode(0);

  let nodeStack = [];
  let leftIndexStack = [];
  let rightIndexStack = [];

  nodeStack.push(head);
  leftIndexStack.push(0);
  rightIndexStack.push(n - 1);

  while (nodeStack.length) {
    let node = nodeStack.pop();
    let left = leftIndexStack.pop();
    let right = rightIndexStack.pop();

    let mid = left + Math.floor((right - left) / 2);

    node.val = nums[mid];

    if (left <= mid - 1) {
      node.left = new TreeNode(0);
      nodeStack.push(node.left);
      leftIndexStack.push(left);
      rightIndexStack.push(mid - 1);
    }

    if (mid + 1 <= right) {
      node.right = new TreeNode(0);
      nodeStack.push(node.right);
      leftIndexStack.push(mid + 1);
      rightIndexStack.push(right);
    }
  }

  return head;
};
