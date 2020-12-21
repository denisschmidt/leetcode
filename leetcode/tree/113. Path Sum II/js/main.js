/**
 * @param node
 * @param {number} sum
 * @return {number[][]}
 */
const pathSum = function (node, sum) {
  let path = [];
  let paths = [];

  function findPaths(root, sum, path, paths) {
    if (!root) {
      return;
    }

    path.push(root.val);

    if (root.left === null && root.right === null && sum === root.val) {
      paths.push([...path]);
      path.pop();
      return;
    }

    findPaths(root.left, sum - root.val, path, paths);
    findPaths(root.right, sum - root.val, path, paths);

    path.pop();
  }

  findPaths(node, sum, path, paths);

  return paths;
};
