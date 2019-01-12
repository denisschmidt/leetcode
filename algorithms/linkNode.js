const _ = require('lodash');

class LinkNode {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
    this.next = null;
  }
}

function makeTestLinkNodes(tests, name = 'root') {
  makeTestNodes(makeLinkNodes, tests, name);
}

function makeLinkNodes(array) {
  return _.chain(array)
    .map(n => new LinkNode(n))
    .reduce((result, node) => {
      let target = result;
      while (target.next) {
        target = target.next;
      }
      target.next = node;
      return result;
    })
    .value();
}

module.exports = {
  LinkNode,
  makeLinkNodes,
  makeTestLinkNodes,
};
