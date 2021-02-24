/**
 * @param {TreeNode} root
 * @return {string[]}
 */
const binaryTreePaths = function (root) {
  let path = [];
  let paths = [];

  const treePaths = (node, path, paths) => {
    if (node === null) return;

    path.push(node.val);

    if (node.left === null && node.right === null) {
      let str = path.join('->');
      paths.push(str);
    }

    treePaths(node.left, path, paths);
    treePaths(node.right, path, paths);
    path.pop();
  };

  treePaths(root, path, paths);

  return paths;
};
