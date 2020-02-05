/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertionSortList = function(head) {
  if (head == null || head.next == null) return head;

  let dummyHead = new ListNode(0);
  dummyHead.next = head;

  while (head !== null && head.next !== null) {
    if (head.val <= head.next.val) {
      head = head.next;
    } else {
      let insert = head.next;
      let start = dummyHead;

      while (start.next.val < insert.val) {
        start = start.next;
      }

      head.next = insert.next;
      insert.next = start.next;
      start.next = insert;
    }
  }

  return dummyHead.next;
};
