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
  const linkedList = array
    .map(n => new LinkNode(n))
    .reduce((acc, node) => {
      let target = acc;

      while (target.next) {
        target = target.next;
      }

      target.next = node;
      return acc;
    }, new LinkNode());

  return linkedList.next;
}

module.exports = {
  LinkNode,
  makeLinkNodes,
  makeTestLinkNodes,
};
