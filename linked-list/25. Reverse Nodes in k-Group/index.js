/*

Given a linked list, reverse the nodes of a linked list k at a time and return its modified list.

k is a positive integer and is less than or equal to the length of the linked list. 
If the number of nodes is not a multiple of k then left-out nodes in the end should remain as it is.

Example:
  Given this linked list: 1->2->3->4->5

  For k = 2, you should return: 2->1->4->3->5

  For k = 3, you should return: 3->2->1->4->5

Note:
  Only constant extra memory is allowed.
  You may not alter the values in the list's nodes, only nodes itself may be changed.

*/

// Time (N * K)
// Space O(K)
const reverseKGroup = (head, k) => {
  if (head == null) return null;
  if (k == 1) return head;

  let dummy = new ListNode();
  let newNode = dummy;

  let first = head;
  let second = head;
  let cnt = k;

  while (second != null) {
    if (cnt == 0) {
      newNode.next = helper(first, k - 1);

      while (newNode && newNode.next != null) {
        newNode = newNode.next;
      }

      cnt = k;
      first = second;
    }

    second = second.next;
    cnt--;
  }

  newNode.next = cnt == 0 ? helper(first, k - 1) : first;

  return dummy.next;

  function helper(node, k) {
    if (node == null) return null;
    if (node.next == null) return node;
    if (k == 0) return node;

    let dummy = helper(node.next, k - 1);

    node.next.next = node;
    node.next = null;

    return dummy;
  }
};
