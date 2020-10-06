/*

  Алгоритм:

  Реализация рекурсии очень проста:     
    1) Если node равен null - вернуть new TreeNode(val). 
    2) Если val > root.val - перейти к вставке в нужное поддерево. 
    3) Если val < root.val - перейти к вставке в левое поддерево. 

*/

// Time O(H) - Average case Time O(LogN) - Worst case O(N)
// Space O(H) - Average case Time O(LogN) - Worst case O(N)
const insertIntoBST = (root, val) => {
  if (root == null) {
    return new TreeNode(val);
  }

  if (root.val > val) {
    root.left = insertIntoBST(root.left, val);
  } else {
    root.right = insertIntoBST(root.right, val);
  }

  return root;
};
