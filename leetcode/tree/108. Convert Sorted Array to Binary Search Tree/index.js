/*
Given an array where elements are sorted in ascending order, convert it to a height balanced BST.

For this problem, a height-balanced binary tree is defined
as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.

Example:
  Given the sorted array: [-10,-3,0,5,9],
  One possible answer is: [0,-3,9,-10,null,5], which represents the following height balanced BST:

      0
     / \
   -3   9
   /   /
 -10  5
 */

// Time O(N)
// Space O(N)
const sortedArrayToBST = nums => {
  return dfs(0, nums.length - 1);

  function dfs(left, right) {
    if (left > right) return null;
    let mid = left + Math.floor((right - left) / 2);

    let node = new TreeNode(nums[mid]);

    node.left = dfs(left, mid - 1);
    node.right = dfs(mid + 1, right);
    return node;
  }
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
