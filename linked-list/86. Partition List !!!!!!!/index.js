/*
Given a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x.

You should preserve the original relative order of the nodes in each of the two partitions.

Example:

Input: head = 1->4->3->2->5->2, x = 3
Output: 1->2->2->4->3->5


 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

// Сложность времени: O (N) где N - количество узлов в исходном связанном списке, и мы повторяем исходный список.
// Сложность пространства: O (1), мы не использовали никакого дополнительного пространства, отметим,
// что мы реформируем исходный список, перемещая исходные узлы, мы не использовали никакого дополнительного пространства как такового.

const partition = function(head, x) {
  let l1 = new ListNode(0);
  let l2 = new ListNode(0);

  let min = l1;
  let max = l2;

  while (head !== null) {
    if (head.val < x) {
      min.next = head;
      min = min.next;
    } else {
      max.next = head;
      max = max.next;
    }

    head = head.next;
  }

  max.next = null;
  min.next = l2.next;

  return l1.next;
};
