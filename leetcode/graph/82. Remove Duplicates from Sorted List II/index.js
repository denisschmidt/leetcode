/*
Given a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list.

Example 1:

Input: 1->2->3->3->4->4->5
Output: 1->2->5
Example 2:

Input: 1->1->1->2->3
Output: 2->3

 */

// Time O(N)
// Space O(N)
const deleteDuplicates = function (head) {
  if (head === null) return null;
  if (head && !head.next) return new ListNode(head.val);

  let dummy = new ListNode(0);
  let a = dummy;

  while (head && head.next) {
    if (head.val !== head.next.val) {
      a.next = new ListNode(head.val);
      a = a.next;
      head = head.next;
    } else {
      let val = head.val;
      head = head.next;
      while (head && head.next && head.val === val) {
        head = head.next;
      }

      if (head.val === val) {
        head = null;
      }
    }
  }

  if (head) {
    a.next = new ListNode(head.val);
  }

  return dummy.next;
};

function ListNode(val) {
  this.val = val;
  this.next = null;
}
