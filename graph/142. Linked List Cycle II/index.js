/*
Given a linked list, return the node where the cycle begins.
If there is no cycle, return null.

To represent a cycle in the given linked list,
we use an integer pos which represents the position (0-indexed) in the linked list where tail connects to.

If pos is -1, then there is no cycle in the linked list.

Note: Do not modify the linked list.


Example 1:
  Input: head = [3,2,0,-4], pos = 1
  Output: tail connects to node index 1
  Explanation: There is a cycle in the linked list, where tail connects to the second node.


Example 2:
  Input: head = [1,2], pos = 0
  Output: tail connects to node index 0
  Explanation: There is a cycle in the linked list, where tail connects to the first node.

Example 3:
  Input: head = [1], pos = -1
  Output: no cycle
  Explanation: There is no cycle in the linked list.


 Follow-up: Can you solve it without using extra space?


 */

// Algo Floyd's Tortoise and Hare !!!!!
// Time O(N)
// Space O(1)
const detectCycle = head => {
  if (head === null || head.next === null) {
    return null;
  }

  let intersect = getIntersect(head);

  if (intersect === null) {
    return null;
  }

  let ptr1 = head;
  let ptr2 = intersect;

  // Чтобы найти вход в цикл, у нас есть два указателя
  // одинаковая скорость - одна с начала списка, а другая c точки пересечения.
  while (ptr1 !== ptr2) {
    ptr1 = ptr1.next;
    ptr2 = ptr2.next;
  }

  return ptr1;

  function getIntersect(head) {
    let fast = head;
    let slow = head;
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
      if (slow === fast) {
        return slow;
      }
    }
    return null;
  }
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Time O(N)
// Space O(N)
const detectCycle2 = head => {
  const set = new Set();

  while (head) {
    if (set.has(head)) {
      return head;
    } else {
      set.add(head);
    }
    head = head.next;
  }
  return null;
};
