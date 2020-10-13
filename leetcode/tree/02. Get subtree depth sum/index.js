/*
  Medium:

  Given binary tree find depth sum all subtrees

    Input:

            1 (5, 6)
          /   \
  (3, 2) 2     3 (1, 0)
        /  \   
(1, 0) 4    5 (1, 0) 

    Output: 8 
      tree with root 1 have the next depth => 1 + 1 + 2 + 2 = 6
      tree with root 2 have the next depth => 1 + 1 = 2
      total => 6 + 2 = 8  


    Input:
            1
          /   \
         2     3
        / \   / \
       4   5 6   7
      / \
     8  9

    Output: 26 

*/

const { makeTreeNodes } = require('../../../utils/treeNode');

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // 26
let tree = makeTreeNodes(nums);

// Time O(N)
// Space O(N)
const getSumDepth = node => {
  let ans = 0;

  dfs(root);

  return ans;

  function dfs(node) {
    if (node == null) return new Node(0, 0);

    let left = dfs(node.left);
    let right = dfs(node.right);

    let cntNodes = left.cntNodes + right.cntNodes + 1;
    let subTreeSum = left.cntNodes + right.cntNodes + left.subTreeSum + right.subTreeSum;

    ans += subTreeSum;

    return new Node(cntNodes, subTreeSumu);
  }
};

class Node {
  constructor(cntNodes, subTreeSum) {
    // cntNodes - number of nodes in subtree
    // subTreeSum - subtree sum
    this.cntNodes = cntNodes;
    this.subTreeSum = subTreeSum;
  }
}

// Time O(N^2)
// Space O(N^2)
const getSumDepth_II = node => {
  let stack = [node];
  let ans = 0;

  while (stack.length) {
    let node = stack.pop();

    dfs(node, 0);

    if (node.left) stack.push(node.left);
    if (node.right) stack.push(node.right);
  }

  return ans;

  function dfs(node, depth) {
    if (node == null) return 0;

    ans += depth;

    dfs(node.left, depth + 1);
    dfs(node.right, depth + 1);
  }
};

let x = getSumDepth(tree);

console.log(x);

let x_II = getSumDepth_II(tree);

console.log(x, x_II);
