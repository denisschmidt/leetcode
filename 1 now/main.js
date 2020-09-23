const test = root => {
  dfs(root);

  function dfs(node) {
    if (node == null) {
      return null;
    }

    dfs(node.left);
    dfs(node.right);

    console.log(node.val);
  }
};

const { makeTreeNodes } = require('../utils/treeNode');

let tree = makeTreeNodes([7, 6, 3, 5, 2, 2, null, 1, 4, 1, null, 1]);

test(tree);
