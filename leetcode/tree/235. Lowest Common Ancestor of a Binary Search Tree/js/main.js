// Можно решить так же как 236 задачу

// Однако лучше воспользоваться свойством бинарного дерева поиска
// Time O(N)
// Space O(N)
const lowestCommonAncestor = (root, p, q) => {
  if (p.val > root.val && q.val > root.val) {
    return lowestCommonAncestor(root.right, p, q);
  }

  if (p.val < root.val && q.val < root.val) {
    return lowestCommonAncestor(root.left, p, q);
  }

  return root;
};

// Time O(N)
// Space O(1)
const lowestCommonAncestor2 = (root, p, q) => {
  while (root !== null) {
    if (p.val > root.val && q.val > root.val) {
      root = root.right;
    } else if (p.val < root.val && q.val < root.val) {
      root = root.left;
    } else {
      return root;
    }
  }
};
