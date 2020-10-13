// Time O(NLogN)
// Space O(1)
const sortList = head => {
  if (head == null || head.next == null) {
    return head;
  }

  let slow = head;
  let fast = head;
  let prev = null;

  while (fast != null && fast.next != null) {
    prev = slow;
    slow = slow.next;
    fast = fast.next.next;
  }

  prev.next = null;

  let left = sortList(head);
  let right = sortList(slow);

  return merge(left, right);

  function merge(left, right) {
    let dummy = new ListNode(0);
    let p = dummy;

    while (left != null && right != null) {
      if (left.val < right.val) {
        p.next = left;
        left = left.next;
      } else {
        p.next = right;
        right = right.next;
      }
      p = p.next;
    }

    if (left != null) {
      p.next = left;
    } else {
      p.next = right;
    }

    return dummy.next;
  }
};
