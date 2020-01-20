/*
Given a singly linked list L: L0→L1→…→Ln-1→Ln,
reorder it to: L0→Ln→L1→Ln-1→L2→Ln-2→…

You may not modify the values in the list's nodes, only nodes itself may be changed.

Example 1:
  Given 1->2->3->4, reorder it to 1->4->2->3.

Example 2:
  Given 1->2->3->4->5, reorder it to 1->5->2->4->3.
*/

// Time O(N^2)
// Space O(N)
const reorderList = head => {
  let a = head;

  while (a !== null) {
    // получаем последнюю ноду и отрезаем ее от списка
    let last = getLastNode(a, null);

    let b = a.next;

    a.next = last;
    a = a.next;
    a.next = b;
    a = a.next;
  }

  return head;

  function getLastNode(head, parent) {
    if (head && head.next === null) {
      if (parent === null) {
        return head;
      } else {
        let a = parent.next;
        parent.next = null;
        return a;
      }
    }

    return getLastNode(head.next, head);
  }
};
