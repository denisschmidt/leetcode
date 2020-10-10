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

/*
 Создаем два указателя slow и fast
 slow указатель перемещается на один шаг за раз, тогда как fast указатель перемещается на два шага за раз.

 Если в списке нет цикла, быстрый указатель в конце концов достигнет конца, и в этом случае мы можем вернуть false.

 Поскольку разница в скорости 1

 Необходимо  (дистанция между бегунами / разницу в скорости ) кругов чтобы более быстрый бегун догнал медленного
*/

// Floyd Cycle detection algorithm
// Time O(N)
// Worst Time O(N + K )
// Space O(1)
const hasCycle = head => {
  if (head == null) return false;
  let slow = head;
  let fast = head.next;

  while (fast && fast.next && slow != fast) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return fast == slow;
};
