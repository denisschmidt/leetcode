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
