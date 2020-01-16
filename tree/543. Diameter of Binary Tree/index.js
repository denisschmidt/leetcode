/*
Given a binary tree, you need to compute the length of the diameter of the tree. 
The diameter of a binary tree is the length of the longest path between any two nodes in a tree. 
This path may or may not pass through the root.

Example:
  Given a binary tree 
          1
         / \
        2   3
       / \     
      4   5    
  Return 3, which is the length of the path [4,2,1,3] or [5,2,1,3].

Note: The length of path between two nodes is represented by the number of edges between them.
*/

/*

       1
      / \
     2   3
    / \     
  4   5    

  node.val  left  right
  4          0      0
  5          0      0
  2          1      1
  3          0      0
  1          2      1
  
  Result: 2 + 1 = 3

  Обход postorderer left-right-root

*/

// Time O(N)
// Space O(N)
const diameterOfBinaryTree = root => {
  let ans = 0;

  helper(root);

  return ans;

  function helper(node) {
    if (!node) return 0;

    let left = helper(node.left); // максимальная длинная левого поддерева
    let right = helper(node.right); // максимальная длинна правого поддерева

    ans = Math.max(ans, left + right);

    return Math.max(left, right) + 1;
  }
};
