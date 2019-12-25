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

// Time O(N)
// Space O(1)
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

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var reverseBetween2 = function(head, m, n) {
  let successor = null;

  if (m <= 1) {
    return reverseN(head, n - m + 1);
  }

  // уменьшаем пока не дойдем до нужного элемента с которого начинается разворот
  head.next = reverseBetween(head.next, m - 1, n - 1);
  return head;

  // что если нам надо развернуть первые N элементов
  function reverseN(head, n) {
    if (n === 1) {
      successor = head.next;
      return head;
    }

    let last = reverseN(head.next, n - 1);
    head.next.next = head;
    // в обычной функции из 206 задаче мы разворачиваем список и для head ставим next = null
    // здесь next будет список после n === 1
    head.next = successor;
    return last;
  }
};
