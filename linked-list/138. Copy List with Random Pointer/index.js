/*
A linked list is given such that each node contains an additional random pointer which could point to any node in the list or null.

Return a deep copy of the list.

Example 1:
  Input:
  {"$id":"1","next":{"$id":"2","next":null,"random":{"$ref":"2"},"val":2},"random":{"$ref":"2"},"val":1}

Explanation:
  Node 1's value is 1, both of its next and random pointer points to Node 2.
  Node 2's value is 2, its next pointer points to null and its random pointer points to itself.
 

Note: You must return the copy of the given head as a reference to the cloned list.
 */

// Time O(N)
// Space O(1)
const copyRandomList = head => {
  let p = head;

  while (p != null) {
    let copy = new Node(p.val, p.next, p.random);
    copy.isNew = true;
    let next = p.next;

    p.next = copy;
    copy.next = next;
    p = next;
  }

  p = head;

  while (p != null) {
    p.next.random = p.random != null ? p.random.next : null;
    p = p.next.next;
  }

  p = head;
  let headCopy = p != null ? p.next : null;

  while (p != null) {
    let copy = p.next;
    p.next = copy.next;
    p = p.next;
    copy.next = p != null ? p.next : null;
  }

  p = head;

  while (p) {
    p = p.next;
  }

  return headCopy;
};

// Time O(N)
// Space O(N)
const copyRandomList_II = head => {
  let dummy = new Node();
  let cur = dummy;
  let p = head;
  let map = new Map();

  while (p != null) {
    let newNode = new Node(p.val, p.next, p.random);
    cur.next = newNode;

    if (!map.has(p)) map.set(p, newNode);

    p = p.next;
    cur = cur.next;
  }

  cur = dummy.next;

  while (cur != null) {
    if (cur.random && map.has(cur.random)) {
      cur.random = map.get(cur.random);
    }
    cur = cur.next;
  }

  return dummy.next;
};
