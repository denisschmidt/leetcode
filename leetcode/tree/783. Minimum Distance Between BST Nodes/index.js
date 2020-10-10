/*

Given a Binary Search Tree (BST) with the root node root, 
return the minimum difference between the values of any two different nodes in the tree.

Example :
  Input: root = [4,2,6,1,3,null,null]
  Output: 1
  Explanation: Note that root is a TreeNode object, not an array.

The given tree [4,2,6,1,3,null,null] is represented by the following diagram:

          4
        /   \
      2      6
     / \    
    1   3  

while the minimum difference in this tree is 1, it occurs between node 1 and node 2, also between node 3 and node 2.

Note:
  The size of the BST will be between 2 and 100.  
  The BST is always valid, each node's value is an integer, and each node's value is different.

*/

// Так как у нас дерево является BST мы можем использовать InOrder обход и тогда массив будет отсортирован в порядке возрастания

// Time O(N)
// Space O(N)
const getMinimumDifference = root => {
  let min = Number.MAX_VALUE;
  let prev = null;

  helper(root);

  return min;

  function helper(node) {
    if (node === null) return;

    helper(node.left);

    if (prev !== null && min > node.val - prev) {
      min = node.val - prev;
    }

    prev = node.val;
    helper(node.right);
  }
};

// Time O(NlogN)
// Space O(N)
const minDiffInBST2 = root => {
  let arr = [];
  let ans = Number.MAX_VALUE;

  dfs(root);

  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length - 1; ++i) {
    ans = Math.min(ans, arr[i + 1] - arr[i]);
  }

  return ans;

  function dfs(node) {
    if (node === null) return;
    arr.push(node.val);
    dfs(node.left);
    dfs(node.right);
  }
};
