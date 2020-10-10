/*
Given a singly linked list where elements are sorted in ascending order, convert it to a height balanced BST.

For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees
of every node never differ by more than 1.

Example:
  Given the sorted linked list: [-10,-3,0,5,9],
  One possible answer is: [0,-3,9,-10,null,5], which represents the following height balanced BST:

      0
     / \
   -3   9
   /   /
 -10  5
 
 */

// Time O(N) - так как нам все еще нужно обработать каждый из узлов в связанном списке один раз и сформировать соответствующие узлы BST.

// Space O(LogN) - поскольку теперь рекурсивным стеком используется только дополнительное пространство,
// а поскольку мы создаем BST с балансировкой по высоте, высота ограничена logN
const sortedListToBST = head => {
  let d = get_depth(head);

  return dfs(0, d - 1);

  function get_depth(node) {
    if (node == null) return 0;
    return 1 + get_depth(node.next);
  }

  function dfs(l, r) {
    if (l > r) return null;

    let mid = l + Math.floor((r - l) / 2);

    let leftNode = dfs(l, mid - 1);

    // Инвариантность, которую мы поддерживаем в этом алгоритме, заключается в том, что всякий раз,
    // когда мы завершаем построение левой половины BST,
    // указатель заголовка в связанном списке будет указывать на корневой узел или средний узел (который становится корневым).

    // Таким образом, мы просто используем текущее значение, на которое указывает head, в качестве корневого узла
    // и идем дальше то есть head = head.next.

    let node = new TreeNode(head.val);

    node.left = leftNode;

    head = head.next;

    node.right = dfs(mid + 1, r);

    return node;
  }
};

// Time O(N)
// Space O(N)
const sortedListToBST_II = head => {
  let nums = [];

  while (head) {
    nums.push(head.val);
    head = head.next;
  }

  return dfs(0, nums.length - 1);

  function dfs(l, r) {
    if (l > r) return null;
    let mid = l + Math.floor((r - l) / 2);

    let root = new TreeNode(nums[mid]);

    root.left = dfs(l, mid - 1);
    root.right = dfs(mid + 1, r);
    return root;
  }
};
