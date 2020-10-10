/*

  Given binary tree find depth sum from target node 
    Input: 
            1
          /   \
         2     3
        / \   / \
       4   5 6   7
      / \
     8  9

     target = 4
    
    Output: 18 =>  1 + 1 + 1 + 2 + 2 + 3 + 4 + 4 

*/

const { makeTreeNodes } = require('../../algorithms/treeNode');

function sumOfDistancesInTree(root, target) {
  let ans = 0;
  let n = 0;

  // получаем кол-во узлов для каждой ноды и сумму рутового поддерева
  let { cntNodes, subTreeSum } = dfs(root);

  n = cntNodes;

  dfs2(root, subTreeSum, target);

  return ans;

  function dfs(node) {
    if (node == null) return new Node(0, 0);

    let left = dfs(node.left);
    let right = dfs(node.right);

    let cntNodes = left.cntNodes + right.cntNodes + 1;
    let sum = left.cntNodes + right.cntNodes + left.subTreeSum + right.subTreeSum;

    // кол-во узлов которые содержит узел
    node.cntNodes = cntNodes;

    return new Node(cntNodes, sum);
  }

  // sumDist(5) = sumDist(2) - (number of nodes in subtree 5) + (number of nodes outside subtree 5)
  // sumDist(2) = sumDist(1) - (number of nodes in subtree 2) + (number of nodes outside subtree 2)
  // sumDist(n) = sumDist(parent) - (number of nodes in subtree n) + (number of nodes outside subtree n)
  function dfs2(node, subTreeSum, target) {
    if (node.val == target) {
      ans = subTreeSum;
    }

    if (node.left) {
      let newSubTreeSum = subTreeSum - node.left.cntNodes + (n - node.left.cntNodes);
      dfs2(node.left, newSubTreeSum, target);
    }

    if (node.right) {
      let newSubTreeSum = subTreeSum - node.right.cntNodes + (n - node.right.cntNodes);
      dfs2(node.right, newSubTreeSum, target);
    }
  }
}

class Node {
  constructor(cntNodes, subTreeSum) {
    this.cntNodes = cntNodes;
    this.subTreeSum = subTreeSum;
  }
}

// target = 18
let x = sumOfDistancesInTree(makeTreeNodes([1, 2, 3, 4, 5, 6, 7, 8, 9]), 4);
console.log(x);
