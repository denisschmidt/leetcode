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

// Time O(N^2)
// Space O(N^2)
const btreeGameWinningMove = (root, n, x) => {
  let parentMap = new Map();

  buildMap(root, null);

  for (let i = 1; i <= n; i++) {
    if (i == x) continue;

    let nodes = findNodes(root, i, x);

    if (isValid(nodes)) {
      return true;
    }
  }

  return false;

  function findNodes(root, x, y) {
    let queue = [root];
    let nodes = [];

    while (queue.length && nodes.length < 2) {
      let node = queue.shift();
      if (node) {
        if (node.val == x) nodes.push({ node, player: 0 });
        else if (node.val == y) nodes.push({ node, player: 1 });
        queue.push(node.left);
        queue.push(node.right);
      }
    }

    return nodes;
  }

  function buildMap(node, parent) {
    if (node == null) return;
    if (!parentMap.has(node.val)) parentMap.set(node.val, []);
    if (node.left !== null) parentMap.get(node.val).push(node.left);
    if (node.right !== null) parentMap.get(node.val).push(node.right);
    if (parent !== null) parentMap.get(node.val).push(parent);

    buildMap(node.left, node);
    buildMap(node.right, node);
  }

  function isValid(nodes) {
    let visited = new Set();
    let cnt = Array(2).fill(0);

    for (let i = 0; i < 2; i++) {
      let node = nodes[i].node;
      visited.add(node.val);
    }

    while (nodes.length > 0) {
      let size = nodes.length;

      for (let i = 0; i < size; i++) {
        let { node, player } = nodes.shift();

        parentMap.get(node.val).forEach(neighbor => {
          if (!visited.has(neighbor.val)) {
            nodes.push({ node: neighbor, player });
            visited.add(neighbor.val);
            cnt[player]++;
          }
        });
      }
    }

    return cnt[0] >= cnt[1];
  }
};
