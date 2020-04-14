/*

Given the root of a binary tree, each node in the tree has a distinct value.

After deleting all nodes with a value in to_delete, we are left with a forest (a disjoint union of trees).

Return the roots of the trees in the remaining forest.  

You may return the result in any order.

 

Example 1:
  Input: root = [1,2,3,4,5,6,7], to_delete = [3,5]
  Output: [[1,2,null,4],[6],[7]]
 

Constraints:
  The number of nodes in the given tree is at most 1000.
  Each node has a distinct value between 1 and 1000.
  to_delete.length <= 1000
  to_delete contains distinct values between 1 and 1000.

*/

// Time O(K * N) K - to_delete
// Space O(N)
const delNodes = (root, to_delete) => {
  let set = new Set(to_delete);
  let nodes = [];
  let ans = [];

  for (let x of to_delete) {
    find(root, x);
  }

  let newRoot = dfs(root, true);
  if (newRoot) ans.push(newRoot);

  for (let node of nodes) {
    let n1 = dfs(node.left);
    let n2 = dfs(node.right);

    if (n1) ans.push(n1);
    if (n2) ans.push(n2);
  }

  return ans;

  function dfs(node) {
    if (node == null) return null;
    if (set.has(node.val)) return null;

    node.left = dfs(node.left);
    node.right = dfs(node.right);

    return node;
  }

  function find(node, x) {
    if (node == null) return null;

    if (node.val == x) {
      nodes.push(node);
      return;
    }

    find(node.left, x);
    find(node.right, x);
  }
};
