/*
Given a sorted linked list, delete all duplicates such that each element appear only once.

Example 1:

Input: 1->1->2
Output: 1->2
Example 2:

Input: 1->1->2->3->3
Output: 1->2->3

 */
// Time O(N)
// Space O(1)
const deleteDuplicates = function(head) {
  let a = head;

  while (a && a.next) {
    if (a.val === a.next.val) {
      a.next = a.next.next;
    } else {
      a = a.next;
    }
  }

  return head;
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Time O(N)
// Space O(N)
const deleteDuplicates2 = function(head) {
  let dummy = new ListNode(0);
  let a = dummy;
  let prev = null;

  while (head) {
    if (prev === head.val) {
      head = head.next;
    } else {
      a.next = new ListNode(head.val);
      a = a.next;
      prev = head.val;
      head = head.next;
    }
  }

  return dummy.next;
};

function ListNode(val) {
  this.val = val;
  this.next = null;
}
