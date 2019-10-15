/*
Given a singly linked list, determine if it is a palindrome.

Example 1:
  Input: 1->2
  Output: false

Example 2:
  Input: 1->2->2->1
  Output: true

Follow up: Could you do it in O(n) time and O(1) space?

Алгоритм:

  1) Создаем два указателя один быстрый второй медленный

  2) Когда быстрый дойдет до конца медленный будет в середине

  3) Делаем реверс медленного указателя

  4) Быстрый становится головой

  5) Делаем сравнение

 */

const isPalindrome = function(head) {
  let fast = head;
  let slow = head;

  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    slow = slow.next;
  }

  if (fast !== null) {
    slow = slow.next;
  }

  slow = reverse(slow);
  fast = head;

  while (slow !== null) {
    if (fast.val !== slow.val) {
      return false;
    }

    fast = fast.next;
    slow = slow.next;
  }

  return true;

  function reverse(head) {
    let prev = null;

    while (head !== null) {
      let next = head.next;
      head.next = prev;

      prev = head;
      head = next;
    }

    return prev;
  }
};
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Time O(N)
// Space O(N)
const isPalindrome2 = function(head) {
  if (head === null) return true;

  const arr = [];

  while (head) {
    arr.push(head.val);
    head = head.next;
  }

  let l = 0;
  let r = arr.length - 1;

  while (l < r) {
    if (arr[l] !== arr[r]) return false;
    l++;
    r--;
  }
  return true;
};
