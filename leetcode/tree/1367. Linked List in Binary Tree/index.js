/*

Given a binary tree root and a linked list with head as the first node. 

Return True if all the elements in the linked list starting from the head correspond to some downward path connected in the binary tree otherwise return False.

In this context downward path means a path that starts at some node and goes downwards.

Example 1:
  Input: head = [4,2,8], root = [1,4,4,null,2,2,null,1,null,6,8,null,null,null,null,1,3]
  Output: true
  Explanation: Nodes in blue form a subpath in the binary Tree.  

Example 2:
  Input: head = [1,4,2,6], root = [1,4,4,null,2,2,null,1,null,6,8,null,null,null,null,1,3]
  Output: true

Example 3:
  Input: head = [1,4,2,6,8], root = [1,4,4,null,2,2,null,1,null,6,8,null,null,null,null,1,3]
  Output: false
  Explanation: There is no path in the binary tree that contains all the elements of the linked list from head.
 

Constraints:
  1 <= node.val <= 100 for each node in the linked list and binary tree.
  The given linked list will contain between 1 and 100 nodes.
  The given binary tree will contain between 1 and 2500 nodes.

*/

// Time O(N * min(L,H))
// Space O(H)
// где N = размер дерева, H = высота дерева, L = длина списка
const isSubPath = (head, root) => {
  if (root == null) return false;
  if (head == null) return true;

  return dfs(root, head) || isSubPath(head, root.left) || isSubPath(head, root.right);

  function dfs(node, head) {
    if (head == null) return true;
    if (node == null) return false;

    return node.val == head.val && (dfs(node.left, head.next) || dfs(node.right, head.next));
  }
};

// KMP
// Time O(N)
// Space O(L + H)
// N - размер дерева, H = высота дерева, L = длина списка.
const isSubPath_II = (head, root) => {
  let nums = [head.val];
  let dp = [0];

  let i = 0;

  head = head.next;

  while (head != null) {
    while (i > 0 && head.val != nums[i]) {
      i = dp[i - 1];
    }

    if (head.val == nums[i]) {
      i++;
    }

    nums.push(head.val);
    dp.push(i);

    head = head.next;
  }

  return dfs(root, 0, nums, dp);

  function dfs(node, i, nums, dp) {
    if (node == null) return false;

    while (i > 0 && node.val != nums[i]) {
      i = dp[i - 1];
    }

    if (node.val == nums[i]) {
      i++;
    }

    return i == dp.length || dfs(node.left, i, nums, dp) || dfs(node.right, i, nums, dp);
  }
};

// Brute DFS
const isSubPath_III = (head, root) => {
  let nodes = [];

  find(root, head.val);

  for (let node of nodes) {
    if (dfs(node, head)) {
      return true;
    }
  }

  return false;

  function dfs(node, head) {
    if (node == null) return false;

    if (head == null || (node.val == head.val && head.next == null)) return true;
    if (node.val != head.val) return false;

    return dfs(node.left, head.next) || dfs(node.right, head.next);
  }

  function find(node, target) {
    if (node == null) return null;
    if (node.val == target) nodes.push(node);

    find(node.left, target);
    find(node.right, target);
  }
};
