const inorderSuccessor = (root, p) => {
  let parent = null;

  if (p.right) return getSuccessor(p);

  find(root, p);

  if (parent && parent.val > p.val) {
    return parent;
  }

  return null;

  function find(node, target) {
    if (node === null) return null;

    if (node === target) return node;

    if (node.val > target.val) {
      parent = node;
      find(node.left, target);
    } else {
      find(node.right, target);
    }
  }

  function getSuccessor(node) {
    node = node.right;

    while (node.left !== null) {
      node = node.left;
    }

    return node;
  }
};
