// У нас есть два листа один заканчивается быстрее второй медленнее
// Так как первый закончиться раньше второй будет равен slow.next = slow.next.next
// slow.next = slow.next.next - как раз наша замена

// Time O(N)
// Space O(N)
const removeNthFromEnd = (head, n) => {
  let fast = head;
  let slow = head;

  while (n > 0) {
    fast = fast.next;
    n--;
  }

  if (fast === null) {
    return head.next;
  }

  while (fast.next) {
    fast = fast.next;
    slow = slow.next;
  }

  slow.next = slow.next.next;

  return head;
};
