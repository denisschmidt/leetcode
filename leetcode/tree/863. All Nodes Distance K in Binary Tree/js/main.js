/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/*
  Алгоритм:
    1) Для каждого узла создаем мапу {node.val, [массив смежных узлов]}
    2) Потом с помощью очереди постепенно посещаем ВСЕ смежные ноды в цикле и уменьшаем счетчик K
    3) В конце в очереди у нас останутся только нам необходимые ноды на расстоянии K

*/

// Time O(N)
// Space O(N)
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} K
 * @return {number[]}
 */
const distanceK = (root, target, K) => {
  let map = new Map();

  dfs(root, null);

  let queue = [];
  let visited = new Set();
  let ans = [];

  visited.add(target.val);
  queue.push(target.val);

  while (queue.length) {
    let s = queue.length;

    for (let i = 0; i < s; i++) {
      let u = queue.shift();

      if (K < 0) {
        break;
      }

      if (K == 0) {
        ans.push(u);
      }

      for (let v of map.get(u)) {
        if (visited.has(v)) {
          continue;
        }

        visited.add(v);
        queue.push(v);
      }
    }

    K--;
  }

  return ans;

  function dfs(node, parent) {
    if (node == null) {
      return;
    }

    if (!map.has(node.val)) {
      map.set(node.val, []);
    }

    if (parent) {
      map.get(node.val).push(parent.val);
    }

    if (node.left) {
      map.get(node.val).push(node.left.val);
    }

    if (node.right) {
      map.get(node.val).push(node.right.val);
    }

    dfs(node.left, node);
    dfs(node.right, node);
  }
};
