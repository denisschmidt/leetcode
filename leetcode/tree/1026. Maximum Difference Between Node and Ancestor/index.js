/*

Given the root of a binary tree, find the maximum value V for which there exists different nodes A and B 
where V = |A.val - B.val| and A is an ancestor of B.

(A node A is an ancestor of B if either: any child of A is equal to B, or any child of A is an ancestor of B.)

 
Example 1:
  Input: [8,3,10,1,6,null,14,null,null,4,7,13]
  Output: 7
  Explanation: 
    We have various ancestor-node differences, some of which are given below :
    |8 - 3| = 5
    |3 - 7| = 4
    |8 - 1| = 7
    |10 - 13| = 3
    Among all possible differences, the maximum value of 7 is obtained by |8 - 1| = 7.
 

Note:
  The number of nodes in the tree is between 2 and 5000.
  Each node will have value between 0 and 100000.

*/

// Time O(N)
// Space O(N)
const maxAncestorDiff = function (root) {
  let result = -Number.MAX_VALUE;

  helper(root, 0);

  return result;

  function helper(node) {
    if (!node) return [Number.MAX_VALUE, -Number.MAX_VALUE];

    let [lmin, lmax] = helper(node.left);
    let [rmin, rmax] = helper(node.right);

    let min = Math.min(lmin, rmin, node.val);
    let max = Math.max(lmax, rmax, node.val);

    result = Math.max(result, Math.abs(min - node.val), Math.abs(max - node.val));

    return [min, max];
  }
};

// Time O(N)
// Space O(N)
const maxAncestorDiff_II = function (root, min = Number.MAX_VALUE, max = -Number.MAX_VALUE) {
  if (root === null) {
    return max - min;
  }

  max = Math.max(max, root.val);
  min = Math.min(min, root.val);

  return Math.max(helper(root.left, min, max), helper(root.right, min, max));
};
