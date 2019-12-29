/*
Given a binary tree, find the length of the longest consecutive sequence path.

The path refers to any sequence of nodes from some starting node to any node in the tree along the parent-child connections.
The longest consecutive path need to be from parent to child (cannot be the reverse).

Example 1:

Input:

   1
    \
     3
    / \
   2   4
        \
         5

Output: 3

Explanation: Longest consecutive sequence path is 3-4-5, so return 3.

Example 2:

Input:

   2
    \
     3
    / 
   2    
  / 
 1

Output: 2 

Explanation: Longest consecutive sequence path is 2-3, not 3-2-1, so return 2.

*/

/*
 
Алгоритм:
  Нужно вернуть максимальную длину с обеих сторон и сравнить максимум

*/

// Time O(N)
// Space O(N)
// Bottom - Up
const longestConsecutive = root => {
  if (!root) return 0;

  let result = 0;

  helper(root, root);

  return result + 1;

  function helper(node, prev) {
    if (!node) {
      return 0;
    }

    let l = helper(node.left, node);
    let r = helper(node.right, node);

    result = Math.max(result, l, r);

    if (node.val > prev.val && node.val - prev.val === 1) {
      if (l > 0 && r > 0) {
        return Math.max(l, r) + 1;
      }

      if (l > 0) {
        return l + 1;
      }

      if (r > 0) {
        return r + 1;
      }

      return 1;
    } else {
      return 0;
    }
  }
};

//  In-order traversal
// Time O(N)
// Space O()
const longestConsecutive_II = root => {
  let max = 0;

  dfs(root, null, 0);

  return max;

  function dfs(node, prev, length) {
    if (!node) return;

    length = prev !== null && node.val === prev.val + 1 ? length + 1 : 1;
    max = Math.max(max, length);

    dfs(node.left, node, length);
    dfs(node.right, node, length);
  }
};
