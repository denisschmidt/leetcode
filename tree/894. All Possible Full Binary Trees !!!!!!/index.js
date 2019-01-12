/*
A full binary tree is a binary tree where each node has exactly 0 or 2 children.

Return a list of all possible full binary trees with N nodes.
Each element of the answer is the root node of one possible tree.

Each node of each tree in the answer must have node.val = 0.

You may return the final list of trees in any ord

Also, by a simple counting argument, there are no full binary trees with a positive, even number of nodes.

 */
const { TreeNode } = require('../../algorithms/treeNode')
const map = new Map()

const allPossibleFBT = N => {
  if (!map.has(N)) {
    const ans = []
    if (N === 1) {
      ans.push(new TreeNode(0))
    } else if (N % 2 === 1) {
      for(let x = 0; x < N; ++x) {
        let y = N - 1 - x
        let leftChildNodes = allPossibleFBT(x)
        let rightChildNodes = allPossibleFBT(y)
        for(let i = 0; i < leftChildNodes.length; i++){
          let left = leftChildNodes[i]
          for(let j = 0; j < rightChildNodes.length; j++){
            let right = rightChildNodes[j]
            let bns = new TreeNode(0)
            bns.left = left
            bns.right = right
            ans.push(bns)
          }
        }
      }
    }
    map.set(N, ans)
  }
  return map.get(N)
}

const res = allPossibleFBT(3)

console.log('---', res)
