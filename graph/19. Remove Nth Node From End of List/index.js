/*
Given a linked list, remove the n-th node from the end of list and return its head.

Example:

Given linked list: 1->2->3->4->5, and n = 2.

After removing the second node from the end, the linked list becomes 1->2->3->5.
Note:

Given n will always be valid.

Follow up:

Could you do this in one pass?

 */

const { makeLinkNodes } = require('../../algorithms/linkNode');

const l1 = makeLinkNodes([1, 2, 3, 4, 5]);

// Time O(N)
// Space O(N)
var removeNthFromEnd = function(head, n) {
  let max = 0;
  const abc = head => {
    if (head === null) {
      return { cur: head, count: 0 };
    }
    max++;
    let { cur, count } = abc(head.next);

    if (max === count + 1) {
      return { cur, count };
    }

    if (count === n) {
      head.next = cur.next;
    }

    return { cur: head, count: count + 1 };
  };

  const res = abc(head);

  return res.cur;
};

removeNthFromEnd(l1, 5);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// У нас есть два листа один заканчивается быстрее второй медленнее
// так как первый закончиться раньше второй будет равен slow.next = slow.next.next
//  slow.next = slow.next.next - как раз наша замена
var removeNthFromEnd2 = function(head, n) {
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

const res2 = removeNthFromEnd2(l1, 1);
console.log('--', res2);
