// DoubleLinked List
// Time O(N)
// Space O(1)
const rotateRight = (head, k) => {
  if (head == null) return null;

  let p = head;
  let prev = null;

  while (p) {
    p.prev = prev;
    prev = p;
    p = p.next;
  }

  let last = prev;

  while (k--) {
    last.next = head;
    head.prev = last;

    prev = last.prev;

    head = last;

    // remove cylce
    last.prev.next = null;
    last.prev = null;

    // go to prev node
    last = prev;
  }

  return head;
};

// Time O(N)
// Space O(1)
const rotateRight = (head, k) => {
  if (head == null) return null;
  if (head.next == null) return head;

  let oldTail = head;
  let len = 1;
  while (oldTail.next !== null) {
    oldTail = oldTail.next;
    len++;
  }

  // k >= 1
  // сделали цикл
  oldTail.next = head;

  let newTail = head;
  for (let i = 0; i < len - (k % len) - 1; i++) {
    newTail = newTail.next;
  }

  // записали весь список в newHead
  let newHead = newTail.next;

  // удаляем цикл который создали
  newTail.next = null;

  return newHead;
};
