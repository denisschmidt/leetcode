const { makeTreeNodes } = require('../algorithms/treeNode');
const { PriorityQueue } = require('../algorithms/priorityQueue');

const comparator = (p1, p2) => {
  if (p1.x < p2.x) return -1;
  if (p2.x < p1.x) return 1;
  if (p1.y > p2.y) return -1;
  if (p1.y < p2.y) return 1;
  return p1.val - p2.val;
};

var verticalTraversal = function(root) {
  let pq = new PriorityQueue({ comparator: comparator });

  helper(root, 0, 0);

  let result = [];
  let prev = null;
  let nums = [];

  while (!pq.isEmpty()) {
    let p = pq.poll();
    if (prev == null || p.x != prev.x) {
      if (prev != null) result.push(nums);
      nums = [];
    }
    nums.push(p.val);
    prev = p;
  }

  result.push(nums);

  return result;

  function helper(node, x, y) {
    if (node === null) {
      return;
    }

    pq.offer({ val: node.val, x, y });

    helper(node.left, x - 1, y - 1);
    helper(node.right, x + 1, y - 1);
  }
};
