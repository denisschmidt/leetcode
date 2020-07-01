/*

  Given tree find depth sum all subtrees

    Input:

          1
        /  \
       2    3
      / \   
     4   5 

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

const { makeTreeNodes } = require('../algorithms/treeNode');

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // 26
let tree = makeTreeNodes(nums);

// Time O(N)
// Space O(N)
const getSumDepth = node => {
  let ans = 0;

  dfs(node);

  return ans;

  function dfs(node) {
    // 1 - number of nodes in subtree
    // 0 - sum of depth in subtree
    let p = [1, 0];

    if (node.left) {
      let pChild = dfs(node.left);

      p[1] += pChild[0] + pChild[1];
      p[0] += pChild[0];
    }

    if (node.right) {
      let pChild = dfs(node.right);

      p[1] += pChild[0] + pChild[1];
      p[0] += pChild[0];
    }

    ans += p[1];

    return p;
  }
};

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
