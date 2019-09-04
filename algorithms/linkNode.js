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
  return array
    .map(n => new ListNode(n))
    .reduce((acc, node) => {
      let target = acc;

      while (target.next) {
        target = target.next;
      }

      target.next = node;
      return acc;
    }, new LinkNode());
}

module.exports = {
  LinkNode,
  makeLinkNodes,
  makeTestLinkNodes,
};
