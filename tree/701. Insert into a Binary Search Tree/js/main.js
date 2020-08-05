/*

Given the root node of a binary search tree (BST) and a value to be inserted into the tree,
insert the value into the BST.
Return the root node of the BST after the insertion.
It is guaranteed that the new value does not exist in the original BST.

Note that there may exist multiple valid ways for the insertion,
as long as the tree remains a BST after insertion.
You can return any of them.

For example,

Given the tree:
      4
     / \
    2   7
   / \
  1   3
And the value to insert: 5


You can return this binary search tree:
      4
     /   \
    2      7
   / \    /
  1   3  5

*/

/*

  Алгоритм:

  Реализация рекурсии очень проста:     
    1) Если node равен null - вернуть new TreeNode(val). 
    2) Если val > root.val - перейти к вставке в нужное поддерево. 
    3) Если val < root.val - перейти к вставке в левое поддерево. 

*/

// Time O(H) - Average case Time O(LogN) - Worst case O(N)
// Space O(H) - Average case Time O(LogN) - Worst case O(N)
const insertIntoBST = (node, target) => {
  if (node == null) return new TreeNode(target);

  if (target > node.val) node.right = insertIntoBST(node.right);

  if (target < node.val) node.left = insertIntoBST(node.left);

  return node;
};
