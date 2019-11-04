/*
Given inorder and postorder traversal of a tree, construct the binary tree.

Note: You may assume that duplicates do not exist in the tree.

For example, given

inorder = [9,3,15,20,7]
postorder = [9,15,7,20,3]
Return the following binary tree:

    3
   / \
  9  20
    /  \
   15   7

 */

const buildTree = (inorder, postorder) => {
  // inorder - left-root-right
  // postorder - left-right-root

  const map = new Map();
  let index = postorder.length - 1;

  inorder.forEach((v, i) => map.set(v, i));

  return helper(0, postorder.length - 1);

  function helper(start, end) {
    if (start > end) {
      return null;
    }
    const val = postorder[index];
    const rootIndex = map.get(val);
    index--;

    const node = new TreeNode(val);

    node.right = helper(rootIndex + 1, end);
    node.left = helper(start, rootIndex - 1);
    return node;
  }
};
