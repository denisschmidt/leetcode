/*
Merge two sorted linked lists and return it as a new list. 
The new list should be made by splicing together the nodes of the first two lists.

Example:

Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4
 */

// Time: O(M + N) (worst case) and O(min(m, n)) (best case)
// Space: O(1)
const mergeTwoLists = function (l1, l2) {
  let dummy = new ListNode(-1);
  let last = dummy;

  while (l1 !== null && l2 !== null) {
    if (l1.val >= l2.val) {
      last.next = l2;
      l2 = l2.next;
      last = last.next;
    } else {
      last.next = l1;
      l1 = l1.next;
      last = last.next;
    }
  }

  if (l1 !== null) {
    last.next = l1;
  }

  if (l2 !== null) {
    last.next = l2;
  }

  return dummy.next;
};

function ListNode(val) {
  this.val = val;
  this.next = null;
}
