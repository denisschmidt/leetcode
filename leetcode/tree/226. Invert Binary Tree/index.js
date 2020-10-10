/*

Invert a binary tree.

Example:
  Input:

        4
      /   \
      2     7
    / \   / \
   1   3 6   9
  
  Output:

       4
     /   \
    7     2
   / \   / \
  9   6 3   1

Trivia: 
  This problem was inspired by this original tweet by Max Howell:
  Google: 90% of our engineers use the software you wrote (Homebrew), but you can’t invert a binary tree on a whiteboard so f*** off.

 */

// Time O(N)
// Space O(N)
const invertTree = root => {
  let queue = [];

  queue.push(root);

  while (queue.length) {
    let node = queue.shift();

    if (node) {
      queue.push(node.left);
      queue.push(node.right);

      let tmp = node.right;
      node.right = node.left;
      node.left = tmp;
    }
  }

  return root;
};
