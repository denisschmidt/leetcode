// DFS
// Time O(N)
// Space O(N)
const cloneGraph = node => {
  let map = new Map();

  return dfs(node);

  function dfs(node) {
    if (node == null) {
      return null;
    }

    if (map.has(node.val)) {
      return map.get(node.val);
    }

    let newNode = new Node(node.val, []);

    // array is mutable
    map.set(node.val, newNode);

    for (let child of node.neighbors) {
      newNode.neighbors.push(dfs(child));
    }

    return newNode;
  }
};

// BFS
// Time O(N)
// Space O(N)
const cloneGraph_II = head => {
  let queue = [];
  let map = new Map();

  queue.push(head);
  map.set(head, new Node(head.val, []));

  while (queue.length > 0) {
    let node = queue.shift();

    node.neighbors.forEach(neighbor => {
      if (!map.has(neighbor)) {
        map.set(neighbor, new Node(neighbor.val, []));
        queue.push(neighbor);
      }

      map.get(node).neighbors.push(map.get(neighbor));
    });
  }

  return map.get(head);
};
