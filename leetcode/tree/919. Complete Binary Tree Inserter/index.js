/*

A complete binary tree is a binary tree in which every level, except possibly the last, is completely filled, and all nodes are as far left as possible.

Write a data structure CBTInserter that is initialized with a complete binary tree and supports the following operations:

CBTInserter(TreeNode root) initializes the data structure on a given tree with head node root;
CBTInserter.insert(int v) will insert a TreeNode into the tree with value node.val = v so that the tree remains complete, and returns the value of the parent of the inserted TreeNode;
CBTInserter.get_root() will return the head node of the tree.
 

Example 1:

Input: inputs = ["CBTInserter","insert","get_root"], inputs = [[[1]],[2],[]]
Output: [null,1,[1,2]]
Example 2:

Input: inputs = ["CBTInserter","insert","insert","get_root"], inputs = [[[1,2,3,4,5,6]],[7],[8],[]]
Output: [null,3,4,[1,2,3,4,5,6,7,8]]
 

Note:

The initial given tree is complete and contains between 1 and 1000 nodes.
CBTInserter.insert is called at most 10000 times per test case.
Every value of a given or inserted node is between 0 and 5000.
 

*/

class CBTInserter {
  constructor(root) {
    this.root = root;
    this.depth = this.computeDepth(root);
  }

  insert(v) {
    let t = this.root;
    let queue = [t];
    let depth = [0];

    while (queue.length) {
      let node = queue.shift();
      let d = depth.shift();

      if (node != null) {
        if (d >= this.depth - 1) {
          let insert = false;

          if (node.left == null) {
            node.left = new TreeNode(v);
            insert = true;
          } else if (node.right == null) {
            node.right = new TreeNode(v);
            insert = true;
          }

          if (d == this.depth) {
            this.depth++;
          }

          if (insert) {
            return node.val;
          }
        }

        queue.push(node.left);
        queue.push(node.right);

        depth.push(d + 1);
        depth.push(d + 1);
      }
    }
    return null;
  }

  computeDepth() {
    let node = this.root;
    let cnt = 0;

    while (node.left != null) {
      node = node.left;
      cnt++;
    }

    return cnt;
  }

  get_root() {
    return this.root;
  }
}
