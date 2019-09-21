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

// Time O(N)
// Space O(N)
const sortedListToBST = function(head) {
  const nums = [];

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

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Time O(N) - так как нам все еще нужно обработать каждый из узлов в связанном списке один раз и сформировать соответствующие узлы BST.

// Space O(LogN) - поскольку теперь рекурсивным стеком используется только дополнительное пространство,
// а поскольку мы создаем BST с балансировкой по высоте, высота ограничена logN
const sortedListToBST2 = function(head) {
  const size = findSize(head);

  return convertListToBST(0, size - 1);

  function convertListToBST(l, r) {
    if (l > r) return null;

    let mid = l + Math.floor((r - l) / 2);

    let left = convertListToBST(l, mid - 1);

    // Инвариантность, которую мы поддерживаем в этом алгоритме, заключается в том, что всякий раз,
    // когда мы завершаем построение левой половины BST,
    // указатель заголовка в связанном списке будет указывать на корневой узел или средний узел (который становится корневым).

    // Таким образом, мы просто используем текущее значение, на которое указывает head, в качестве корневого узла
    // и идем дальше то есть head = head.next.

    let node = new TreeNode(head.val);
    node.left = left;

    head = head.next;

    node.right = convertListToBST(mid + 1, r);

    return node;
  }

  function findSize(head) {
    let c = 0;
    while (head) {
      head = head.next;
      c++;
    }
    return c;
  }
};
