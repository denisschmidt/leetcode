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
// Space O(N)
const copyRandomList = head => {
  if (head === null) return null;

  let map = new Map();
  let dummy = new Node();

  let node = head;
  let cur = dummy;

  map.set(null, null);

  while (node != null) {
    // Создаем новую ноду и записываем ее в мапу
    let newNode = new Node(node.val, node.next, node.random);
    cur.next = newNode;

    if (!map.has(node)) {
      map.set(node, newNode);
    }

    cur = cur.next;
    node = node.next;
  }

  node = head;
  cur = dummy.next;

  while (node != null) {
    if (node.random) {
      cur.random = map.get(node.random);
    }
    node = node.next;
    cur = cur.next;
  }

  return dummy.next;
};
