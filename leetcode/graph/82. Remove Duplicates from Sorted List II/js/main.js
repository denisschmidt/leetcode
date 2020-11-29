// Time O(N)
// Space O(N)
const deleteDuplicates = head => {
  if (head === null) return null;

  if (head && !head.next) return new ListNode(head.val);

  let dummy = new ListNode(0);
  let a = dummy;

  while (head && head.next) {
    if (head.val !== head.next.val) {
      a.next = new ListNode(head.val);
      a = a.next;
      head = head.next;
    } else {
      let val = head.val;
      head = head.next;

      while (head && head.next && head.val === val) {
        head = head.next;
      }

      if (head.val === val) {
        head = null;
      }
    }
  }

  if (head) {
    a.next = new ListNode(head.val);
  }

  return dummy.next;
};
