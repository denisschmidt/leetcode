// Time O(N)
// Space O(1)
const deleteDuplicates = head => {
  let a = head;

  while (a && a.next) {
    if (a.val == a.next.val) {
      a.next = a.next.next;
    } else {
      a = a.next;
    }
  }

  return head;
};
