/*
You are given two non-empty linked lists representing two non-negative integers.

The digits are stored in reverse order and each of their nodes contain a single digit.

Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example:

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8

Explanation: 342 + 465 = 807.

 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}

const { makeLinkNodes } = require('../../algorithms/linkNode');

const l1 = makeLinkNodes([9]);
const l2 = makeLinkNodes([9]);

// Time O(N)
// Space O(N)
var addTwoNumbers = function(l1, l2) {
  let c1 = l1;
  let c2 = l2;
  let sentinel = new ListNode(0);
  let d = sentinel;
  let sum = 0;

  while (c1 !== null || c2 !== null) {
    sum = Math.floor(sum / 10);

    if (c1 !== null) {
      sum += c1.val;
      c1 = c1.next;
    }

    if (c2 !== null) {
      sum += c2.val;
      c2 = c2.next;
    }

    d.next = new ListNode(sum % 10);
    d = d.next;
  }

  if (Math.floor(sum / 10) === 1) {
    d.next = new ListNode(Math.floor(1));
  }

  return sentinel.next;
};

const res = addTwoNumbers(l1, l2);
console.log('--', res);
