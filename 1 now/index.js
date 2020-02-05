var insert = function(head, insertVal) {
  if (!head) {
    let node = new Node(insertVal);
    node.next = node;
    return node;
  }

  let cnt = 1;
  let a = head.next;
  while (a !== head) {
    cnt++;
    a = a.next;
  }

  if (cnt === 1) {
    swap(a, insertVal);
    return head;
  }

  let prev = head;
  let next = head.next;
  let i = 0;
  let min = head.val;

  a = head;
  let b = null;

  while (i < cnt) {
    if (min > next.val) {
      min = next.val;
      a = next;
      b = prev;
    }
    prev = next;
    next = next.next;
    i++;
  }

  if (a.val > insertVal) {
    if (b == null) {
      b = head;
      i = 1;
      while (i < cnt) {
        b = b.next;
        i++;
      }
      swap(b, insertVal);
    } else {
      swap(b, insertVal);
    }

    return head;
  }

  prev = a;
  next = a.next;

  while (next !== a) {
    if (next.val >= insertVal && prev.val <= insertVal) {
      swap(prev, insertVal);
      return head;
    }
    prev = next;
    next = next.next;
  }

  return head;
};

function swap(a, v) {
  let node = new Node(v);
  let t = a.next;
  a.next = node;
  node.next = t;
}
