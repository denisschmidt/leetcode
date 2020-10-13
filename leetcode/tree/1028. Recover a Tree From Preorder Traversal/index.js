/*

We run a preorder depth first search on the root of a binary tree.

At each node in this traversal, we output D dashes (where D is the depth of this node), then we output the value of this node.  
(If the depth of a node is D, the depth of its immediate child is D+1.  The depth of the root node is 0.)

If a node has only one child, that child is guaranteed to be the left child.

Given the output S of this traversal, recover the tree and return its root.

Example 1:
  Input: "1-2--3--4-5--6--7"
  Output: [1,2,5,3,4,6,7]

Example 2:
  Input: "1-2--3---4-5--6---7"
  Output: [1,2,5,3,null,6,null,4,null,7]
 

Example 3:
  Input: "1-401--349---90--88"
  Output: [1,401,null,349,88,90]
 

Note:
  The number of nodes in the original tree is between 1 and 1000.
  Each node will have a value between 1 and 10^9.

*/

// Time O(N)
// Space O(D)
const recoverFromPreorder = S => {
  let map = new Map();
  let size = S.length;

  let [num, newIndex] = getNum(0);

  let root = new TreeNode(num);

  map.set(0, root);

  helper(newIndex);

  return root;

  function helper(index) {
    if (index >= size - 1) return;

    let newLvl = 0;
    while (index < size && S[++index] == '-') {
      newLvl++;
    }

    let [num, newIndex] = getNum(index);

    let node = map.get(newLvl - 1) || null;

    if (node) {
      if (node.left == null) {
        let x = new TreeNode(Number.parseInt(num));
        node.left = x;
        map.set(newLvl, x);
      } else if (node.right == null) {
        let x = new TreeNode(Number.parseInt(num));
        node.right = x;
        map.set(newLvl, x);
      }
    }

    helper(newIndex);
  }

  function getNum(index) {
    let num = '';
    while (index < size && S[index] != '-') {
      num += S[index];
      index++;
    }
    return [num, index - 1];
  }
};