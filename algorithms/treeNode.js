const _ = require('lodash')

class TreeNode {
  constructor(val) {
    this.val = val
    this.left = this.right = null
  }
}

function makeTestTreeNodes(tests, name = 'root') {
  makeTestNodes(makeTreeNodes, tests, name)
}

function makeTestNodes(iterator, tests, name = 'root') {
  _.forEach(tests, test => {
    const array = test[name]
    const root = iterator(array)
    test[name] = root
    test[`_${name}`] = array
  })
}

function makeTreeNodes(array) {
  const l = array.length
  if (!l) {
    return null
  }
  let i = 0
  const root = new TreeNode(array[i++])
  makeTree([root])
  return root

  function makeTree(parents) {
    if (i >= l) {
      return
    }
    const children = []
    parents.forEach(parent => {
      const left = array[i++]
      const right = array[i++]
      if (left !== null && left !== undefined) {
        const node = new TreeNode(left)
        parent.left = node
        children.push(node)
      }
      if (right !== null && right !== undefined) {
        const node = new TreeNode(right)
        parent.right = node
        children.push(node)
      }
    })
    makeTree(children)
  }
}

module.exports = {
  TreeNode,
  makeTreeNodes,
  makeTestTreeNodes
}
