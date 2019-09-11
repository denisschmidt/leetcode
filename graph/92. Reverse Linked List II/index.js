/*
92. Reverse Linked List II

Reverse a linked list from position m to n. Do it in one-pass.

Note: 1 ≤ m ≤ n ≤ length of list.

Example:
  Input: 1->2->3->4->5->NULL, m = 2, n = 4
  Output: 1->4->3->2->5->NULL

 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

var reverseBetween = function(head, m, n) {
  if (head === null) return null;
  if (m === n) return head;

  let a = head;
  let b = head;
  let indexA = 1;
  let indexB = 1;

  while (m < n) {
    while (indexA !== m) {
      a = a.next;
      indexA++;
    }

    while (indexB !== n) {
      b = b.next;
      indexB++;
    }

    let tmp = a.val;
    a.val = b.val;
    b.val = tmp;

    b = a;

    indexA = m;
    indexB = m;
    m++;
    n--;
  }

  return head;
};
