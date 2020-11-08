/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

// Time O(N)
// Space O(N)

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = (l1, l2) => {
  l1 = reverse(l1);
  l2 = reverse(l2);
  let add = 0;
  let head = null;

  while (l1 || l2) {
    let x1 = l1 ? l1.val : 0;
    let x2 = l2 ? l2.val : 0;

    let total = x1 + x2 + add;
    let val = total % 10;
    add = Math.floor((total - val) / 10);

    let newNode = new ListNode(val);
    newNode.next = head;
    head = newNode;

    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
  }

  if (add > 0) {
    let newNode = new ListNode(add);
    newNode.next = head;
    head = newNode;
  }

  return head;

  function reverse(node) {
    let head = null;

    while (node) {
      let newNode = new ListNode(node.val);
      newNode.next = head;

      head = newNode;

      node = node.next;
    }

    return head;
  }
};

// Time O(N)
// Space O(N)
const addTwoNumbers_II = (l1, l2) => {
  let s1 = [];
  let s2 = [];
  let headA = l1;
  let headB = l2;

  while (headA !== null) {
    s1.push(headA.val);
    headA = headA.next;
  }

  while (headB !== null) {
    s2.push(headB.val);
    headB = headB.next;
  }

  let sum = 0;
  let list = new ListNode(0);

  while (s1.length || s2.length) {
    if (s1.length) sum += s1.pop();

    if (s2.length) sum += s2.pop();

    list.val = sum % 10;
    let head = new ListNode(sum / 10);

    head.next = list;
    list = head;

    sum /= 10;
  }

  return list.val === 0 ? list.next : list;
};
