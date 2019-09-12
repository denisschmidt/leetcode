/*

24. Swap Nodes in Pairs


Given a linked list, swap every two adjacent nodes and return its head.

You may not modify the values in the list's nodes, only nodes itself may be changed.



Example:

Given 1->2->3->4, you should return the list as 2->1->4->3.
 */

// Time O(n)
// Space O(1)
var swapPairs = function(head) {
  let dummy = new ListNode(0);
  let current = dummy;
  current.next = head;

  while (current.next && current.next.next) {
    let first = current.next;
    let second = current.next.next;

    first.next = second.next;
    second.next = first;

    current.next = second;
    current = first;
  }

  return dummy.next;
};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Time O(N)
// Space O(N)
var swapPairs2 = function(head) {
  if (head === null || head.next === null) {
    return head;
  }
  let prev = head.next;
  head.next = swapPairs(head.next.next);
  prev.next = head;
  return prev;
};
