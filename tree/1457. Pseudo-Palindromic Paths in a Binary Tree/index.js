/*

Given a binary tree where node values are digits from 1 to 9. 

A path in the binary tree is said to be pseudo-palindromic if at least one permutation of the node values in the path is a palindrome.

Return the number of pseudo-palindromic paths going from the root node to leaf nodes.

Example 1:
  Input: root = [2,3,1,3,1,null,1]
  Output: 2 
  Explanation: The figure above represents the given binary tree. There are three paths going from the root node to leaf nodes: the red path [2,3,3], the green path [2,1,1], and the path [2,3,1]. Among these paths only red path and green path are pseudo-palindromic paths since the red path [2,3,3] can be rearranged in [3,2,3] (palindrome) and the green path [2,1,1] can be rearranged in [1,2,1] (palindrome).

Example 2:
  Input: root = [2,1,1,1,3,null,null,null,null,null,1]
  Output: 1 
  Explanation: The figure above represents the given binary tree. There are three paths going from the root node to leaf nodes: the green path [2,1,1], the path [2,1,3,1], and the path [2,1]. Among these paths only the green path is pseudo-palindromic since [2,1,1] can be rearranged in [1,2,1] (palindrome).

Example 3:
  Input: root = [9]
  Output: 1
 
Constraints:
  The given binary tree will have between 1 and 10^5 nodes.
  Node values are digits from 1 to 9.

*/

// Time O(N)
// Space O(N)
const pseudoPalindromicPaths = root => {
  let map = {};

  return dfs(root, 0, 0);

  function dfs(node, odds, res) {
    if (node == null) return res;

    map[node.val] = ~~map[node.val] + 1;

    odds += map[node.val] % 2 == 1 ? 1 : -1;

    if (isLeave(node) && odds <= 1) {
      res++;
    } else {
      res = dfs(node.left, odds, res) + dfs(node.right, odds, res);
    }

    map[node.val]--;

    odds += map[node.val] % 2 == 1 ? -1 : 1;

    return res;
  }

  function isLeave(node) {
    return !node.left && !node.right;
  }
};

// Time O(N*K) K = 9
// Space O(N + K)
const pseudoPalindromicPaths_II = root => {
  let ans = 0;
  let map = Array(10).fill(0);

  dfs(root, map);

  return ans;

  function dfs(node, map) {
    if (node == null) return;

    map[node.val]++;

    if (isLeave(node)) {
      if (isPalindrome(map)) {
        ans++;
      }
      map[node.val]--;
      return;
    }

    dfs(node.left, map);
    dfs(node.right, map);

    //backtrack
    map[node.val]--;
  }

  function isLeave(node) {
    return !node.left && !node.right;
  }

  function isPalindrome(map) {
    let cnt = 0;
    for (let i = 0; i <= 9; i++) {
      if (map[i] % 2 != 0) cnt++;
      if (cnt > 1) return false;
    }
    return true;
  }
};
