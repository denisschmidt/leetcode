/*

Sort a linked list using insertion sort.


A graphical example of insertion sort. 
The partial sorted list (black) initially contains only the first element in the list.
With each iteration one element (red) is removed from the input data and inserted in-place into the sorted list
 

Algorithm of Insertion Sort:
Insertion sort iterates, consuming one input element each repetition, and growing a sorted output list.
At each iteration, insertion sort removes one element from the input data, finds the location it belongs within the sorted list, and inserts it there.
  
It repeats until no input elements remain.

Example 1:
  Input: 4->2->1->3
  Output: 1->2->3->4

Example 2:
  Input: -1->5->3->4->0
  Output: -1->0->3->4->5

*/

// Time O(N)
// Space O(1)
const insertionSortList = function (head) {
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

      // Пример: 1, 2, [5], 4, 6, 10, 12 -> текущая нода 5 и в 5.next = 4.next
      // для текущей ноды в next записываем весь остальной еще не пройденный список
      head.next = insert.next;
      insert.next = start.next;
      start.next = insert;
    }
  }

  return dummyHead.next;
};
