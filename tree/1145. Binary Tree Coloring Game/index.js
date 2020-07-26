/*

Two players play a turn based game on a binary tree.  
We are given the root of this binary tree, and the number of nodes n in the tree.  n is odd, and each node has a distinct value from 1 to n.

Initially, the first player names a value x with 1 <= x <= n, and the second player names a value y with 1 <= y <= n and y != x.  
The first player colors the node with value x red, and the second player colors the node with value y blue.

Then, the players take turns starting with the first player.  
In each turn, that player chooses a node of their color (red if player 1, blue if player 2) 
and colors an uncolored neighbor of the chosen node (either the left child, right child, or parent of the chosen node.)

If (and only if) a player cannot choose such a node in this way, they must pass their turn.  
If both players pass their turn, the game ends, and the winner is the player that colored more nodes.

You are the second player.  

If it is possible to choose such a y to ensure you win the game, return true. 
If it is not possible, return false.


Example 1:
  Input: root = [1,2,3,4,5,6,7,8,9,10,11], n = 11, x = 3
  Output: true
  Explanation: The second player can choose the node with value 2.
 

Constraints:
  root is the root of a binary tree with n nodes and distinct node values from 1 to n.
  n is odd.
  1 <= x <= n <= 100

*/

// Time O(N)
// Space O(N)
const btreeGameWinningMove = (root, n, x) => {
  let cntNodes = new Map();
  let l = null;
  let r = null;

  dfs(root, null);

  // select paretn node as y
  if (n - cntNodes.get(x) > cntNodes.get(x)) return true;

  // select left node as y
  if (l && n - cntNodes.get(l) < cntNodes.get(l)) return true;

  // select right node as y
  if (r && n - cntNodes.get(r) < cntNodes.get(r)) return true;

  return false;

  function dfs(node, parent) {
    if (node == null) return 0;

    if (node.val == x) {
      // find left and right nodes
      if (node.left) l = node.left.val;
      if (node.right) r = node.right.val;
    }

    let left = dfs(node.left, node);
    let right = dfs(node.right, node);

    let cnt = left + right + 1;
    cntNodes.set(node.val, cnt);

    return cnt;
  }
};
