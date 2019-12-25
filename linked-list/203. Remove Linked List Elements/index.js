/*
Remove all elements from a linked list of integers that have value val.

Example:
  Input:  1->2->6->3->4->5->6, val = 6
  Output: 1->2->3->4->5
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

// Time O(N)
// Space O(N)
const removeElements = (head, val) => {
  let dummy = new ListNode();
  dummy.next = head;

  helper(head, dummy);

  return dummy.next;

  function helper(node, prev) {
    if (!node) return;

    helper(node.next, node);

    if (node.val === val) {
      prev.next = node.next;
    }
  }
};

// Time O(N)
// Space O(1)
const removeElements_II = (head, val) => {
  let dummy = new ListNode();
  dummy.next = head;
  let cur = dummy;

  while (cur.next !== null) {
    if (cur.next.val === val) {
      cur.next = cur.next.next;
    } else {
      cur = cur.next;
    }
  }

  return dummy.next;
};
