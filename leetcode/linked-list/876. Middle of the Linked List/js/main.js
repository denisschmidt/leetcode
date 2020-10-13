// Time O(N)
// Space O(1)
const middleNode = head => {
  if (head == null || head.next == null) {
    return head;
  }

  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
};
