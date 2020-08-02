class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}

const makeTestTreeNodes = (tests, name = 'root') => {
  makeTestNodes(makeTreeNodes, tests, name);
};

const makeTestNodes = (iterator, tests, name = 'root') => {
  tests.forEach(test => {
    const array = test[name];
    const root = iterator(array);
    test[name] = root;
    test[`_${name}`] = array;
  });
};

const makeTreeNodes = array => {
  const l = array.length;

  if (l === 0) {
    return null;
  }

  let i = 0;
  const root = new TreeNode(array[i++]);
  makeTree([root]);

  return root;

  function makeTree(parents) {
    if (i >= l) {
      return;
    }

    const children = [];

    parents.forEach(parent => {
      const left = array[i++];
      const right = array[i++];

      if (left !== null && left !== undefined) {
        const node = new TreeNode(left);
        parent.left = node;
        children.push(node);
      }

      if (right !== null && right !== undefined) {
        const node = new TreeNode(right);
        parent.right = node;
        children.push(node);
      }
    });

    makeTree(children);
  }
};

module.exports = {
  TreeNode,
  makeTreeNodes,
  makeTestTreeNodes,
};
