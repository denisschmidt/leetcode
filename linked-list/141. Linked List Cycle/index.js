/*
Given a linked list, determine if it has a cycle in it.

To represent a cycle in the given linked list, we use an integer pos which represents the position (0-indexed)
in the linked list where tail connects to. If pos is -1, then there is no cycle in the linked list.


Example 1:

Input: head = [3,2,0,-4], pos = 1
Output: true
Explanation: There is a cycle in the linked list, where tail connects to the second node.


Example 2:

Input: head = [1,2], pos = 0
Output: true
Explanation: There is a cycle in the linked list, where tail connects to the first node.


Example 3:

Input: head = [1], pos = -1
Output: false
Explanation: There is no cycle in the linked list.




Follow up:

Can you solve it using O(1) (i.e. constant) memory?
 */

const { makeLinkNodes } = require('../../algorithms/linkNode');
const l1 = makeLinkNodes([3, 2, 0]);

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

// Time O(N)
// Space O(N)
const hasCycle = function(head) {
  const map = new Set();

  while (head) {
    if (map.has(head)) {
      return true;
    } else {
      map.add(head);
    }
    head = head.next;
  }

  return false;
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Создаем два указателя slow и fast
// slow указатель перемещается на один шаг за раз, тогда как fast указатель перемещается на два шага за раз.

// Если в списке нет цикла, быстрый указатель в конце концов достигнет конца, и в этом случае мы можем вернуть false.

// Поскольку разница в скорости 1

// Необходимо  (дистанция между бегунами / разницу в скорости ) кругов чтобы более быстрый бегун догнал медленного

// Time O(N)
// Worst Time O(N + K )
// Space O(1)
const hasCycle2 = function(head) {
  if (head == null || head.next == null) {
    return false;
  }
  let slow = head;
  let fast = head.next;

  while (slow !== fast) {
    if (fast == null || fast.next == null) {
      return false;
    }
    slow = slow.next;
    fast = fast.next.next;
  }

  return true;
};

hasCycle(l1, 2);
