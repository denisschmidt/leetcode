class CBTInserter {
  constructor(root) {
    this.root = root;
    this.depth = this.computeDepth(root);
  }

  insert(v) {
    let t = this.root;
    let queue = [t];
    let depth = [0];

    while (queue.length) {
      let node = queue.shift();
      let d = depth.shift();

      if (node != null) {
        if (d >= this.depth - 1) {
          let insert = false;

          if (node.left == null) {
            node.left = new TreeNode(v);
            insert = true;
          } else if (node.right == null) {
            node.right = new TreeNode(v);
            insert = true;
          }

          if (insert && d == this.depth) {
            this.depth++;
          }
        }

        queue.push(node.left);
        queue.push(node.right);

        depth.push(d + 1);
        depth.push(d + 1);
      }
    }
  }

  computeDepth() {
    let node = this.root;
    let cnt = 0;

    while (node.left != null) {
      node = node.left;
      cnt++;
    }

    return cnt;
  }

  get_root() {
    return this.root;
  }
}
