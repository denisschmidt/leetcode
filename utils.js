'use strict'

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class LinkNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

module.exports = {
  TreeNode,
  LinkNode
}
