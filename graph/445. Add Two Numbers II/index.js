/*

You are given two non-empty linked lists representing two non-negative integers. 

The most significant digit comes first and each of their nodes contain a single digit. 

Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Follow up:
What if you cannot modify the input lists? In other words, reversing the lists is not allowed.

Example:

Input: (7 -> 2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 8 -> 0 -> 7

 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}

const { makeLinkNodes } = require('../../algorithms/linkNode');

const l1 = makeLinkNodes([2, 4, 3]);
const l2 = makeLinkNodes([5, 6, 4]);

const getLen = head => {
  if (head === null) return 0;
  return 1 + getLen(head.next);
};

const makeLinkNodes2 = (count, root) => {
  const arr = Array(count).fill(0);

  const res = arr.reduce((acc, val, index) => {
    let node = acc;

    while (node.next) {
      node = node.next;
    }

    if (index + 1 === count) {
      node.next = root;
    } else {
      node.next = new ListNode(val);
    }

    return acc;
  }, new ListNode(0));

  return res;
};
// Time O(N)
// Space O(N)
var addTwoNumbers = function(l1, l2) {
  let m = getLen(l1);
  let n = getLen(l2);

  let headA;
  let headB;

  if (m > n) {
    headA = l1;
    headB = makeLinkNodes2(m - n, l2);
  } else if (n > m) {
    headB = l2;
    headA = makeLinkNodes2(n - m, l1);
  } else {
    headA = l1;
    headB = l2;
  }

  const merge = (l1, l2) => {
    if (l1.next === null && l2.next === null) {
      let node = new ListNode(l1.val + l2.val);
      return node;
    }

    const node = merge(l1.next, l2.next);

    let isBig = node.val >= 10;
    let val = isBig ? node.val % 10 : node.val;
    let prefix = isBig ? Math.floor(node.val / 10) : 0;
    node.val = val;

    let newNode = new ListNode(l1.val + l2.val + prefix);
    newNode.next = node;

    return newNode;
  };

  const node = merge(headA, headB);

  let newNode;
  if (node.val >= 10) {
    let prefix = Math.floor(node.val / 10);
    node.val = node.val % 10;
    newNode = new ListNode(prefix);
    newNode.next = node;
  } else {
    newNode = node;
  }

  return newNode;
};

const res = addTwoNumbers(l1, l2);
console.log('---', res);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const addTwoNumbers2 = (l1, l2) => {
  let s1 = [];
  let s2 = [];
  let headA = l1;
  let headB = l2;

  while (headA !== null) {
    s1.push(headA.val);
    headA = headA.next;
  }

  while (headB !== null) {
    s2.push(headB.val);
    headB = headB.next;
  }

  let sum = 0;
  let list = new ListNode(0);

  while (s1.length || s2.length) {
    if (s1.length) sum += s1.pop();

    if (s2.length) sum += s2.pop();

    list.val = sum % 10;
    let head = new ListNode(sum / 10);

    head.next = list;
    list = head;

    sum /= 10;
  }

  return list.val === 0 ? list.next : list;
};
