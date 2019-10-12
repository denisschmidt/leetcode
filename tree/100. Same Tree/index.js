/*
Given two binary trees, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical and the nodes have the same value.

 */

// Time O(N)
// Space O(LogN)
const isSameTree = function(q, p) {
  if (p === null && q === null) return true;
  if (p === null || q === null) return false;

  if (p.val !== q.val) return false;

  return isSameTree(q.left, p.left) && isSameTree(q.right, p.right);
};
