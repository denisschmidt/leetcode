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

// Time O(H) average case Time O(LogN) worst case O(N)
// Space O(H) average case Time O(LogN) worst case O(N)
const insertIntoBST = function(root, val) {
  if (root == null) return new TreeNode(val);

  if (val > root.val) {
    root.right = insertIntoBST(root.right, val);
  } else if (val < root.val) {
    root.left = insertIntoBST(root.left, val);
  }
  return root;
};
