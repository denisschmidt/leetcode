/*
Given a node from a Circular Linked List which is sorted in ascending order, write a function to insert a value insertVal 
into the list such that it remains a sorted circular list. 

The given node can be a reference to any single node in the list, and may not be necessarily the smallest value in the circular list.

If there are multiple suitable places for insertion, you may choose any place to insert the new value. 
After the insertion, the circular list should remain sorted.

If the list is empty (i.e., given node is null), you should create a new single circular list and return the reference to that single node.
Otherwise, you should return the original given node.

Example 1:
  Input: head = [3,4,1], insertVal = 2
  Output: [3,4,1,2]
  Explanation: 
    In the figure above, there is a sorted circular list of three elements. 
    You are given a reference to the node with value 3, and we need to insert 2 into the list. The new node should be inserted between node 1 and node 3. After the insertion, the list should look like this, and we should still return node 3.

Example 2:
  Input: head = [], insertVal = 1
  Output: [1]
  Explanation: 
    The list is empty (given head is null). We create a new single circular list and return the reference to that single node.

Example 3:
  Input: head = [1], insertVal = 0
  Output: [1,0]
 

Constraints:
  0 <= Number of Nodes <= 5 * 10^4
  -10^6 <= Node.val <= 10^6
  -10^6 <= insertVal <= 10^6

*/

// Time O(N)
// Space O(N)
const insert_II = (head, insertVal) => {
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
