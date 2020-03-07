/*

Given a Binary Search Tree and a target number, 
return true if there exist two elements in the BST such that their sum is equal to the given target.

Example 1:
  Input: 
      5
     / \
    3   6
   / \   \
  2   4   7

  Target = 9

  Output: True
  

Example 2:
  Input: 
      5
     / \
    3   6
   / \   \
  2   4   7

  Target = 28

  Output: False

*/

// Time O(N)
// Space O(N)
function findTarget(root, k) {
  let set = new Set();

  return helper(root);

  function helper(node) {
    if (node === null) return false;

    let target = k - node.val;

    if (set.has(target)) return true;

    set.add(node.val);

    return helper(node.left) || helper(node.right);
  }
}
