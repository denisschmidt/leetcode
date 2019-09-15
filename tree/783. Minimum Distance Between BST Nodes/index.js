/*
Given a Binary Search Tree (BST) with the root node root, return the minimum difference between the values of any two different nodes in the tree.

Example :

Input: root = [4,2,6,1,3,null,null]
Output: 1
Explanation:
Note that root is a TreeNode object, not an array.

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

// Time O(NlogN)
// Space O(N)
var minDiffInBST2 = function(root) {
  let diff = Number.MAX_VALUE;
  const arr = [];

  dfs(root);

  let ans = Number.MAX_VALUE;

  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length - 1; ++i) ans = Math.min(ans, arr[i + 1] - arr[i]);

  return ans;

  function dfs(node) {
    if (node === null) return;

    arr.push(node.val);

    dfs(node.left);
    dfs(node.right);
  }
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Time O(N) - где N - количество узлов в дереве. Мы перебираем каждый узел один раз.
// Space O(H) - где H - высота дерева. Это пространство, используемое неявным стеком вызовов при вызове dfs.
var minDiffInBST = function(root) {
  let prev = null;
  let ans = Number.MAX_VALUE;
  dfs(root);
  return ans;

  function dfs(node) {
    if (node === null) return;

    dfs(node.left);

    if (prev !== null) ans = Math.min(ans, node.val - prev);

    prev = node.val;

    dfs(node.right);
  }
};
