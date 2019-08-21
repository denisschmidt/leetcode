/*
Write a program to find the node at which the intersection of two singly linked lists begins.

For example, the following two linked lists:


begin to intersect at node c1.


Example 1:

  Input: intersectVal = 8, listA = [4,1,8,4,5], listB = [5,0,1,8,4,5], skipA = 2, skipB = 3
  Output: Reference of the node with value = 8
  Input Explanation: The intersected node's value is 8 (note that this must not be 0 if the two lists intersect). 
  From the head of A, it reads as [4,1,8,4,5]. From the head of B, it reads as [5,0,1,8,4,5]. 
  There are 2 nodes before the intersected node in A; There are 3 nodes before the intersected node in B.
 

Example 2:
 
  Input: intersectVal = 2, listA = [0,9,1,2,4], listB = [3,2,4], skipA = 3, skipB = 1
  Output: Reference of the node with value = 2
  Input Explanation: The intersected node's value is 2 (note that this must not be 0 if the two lists intersect). 
  From the head of A, it reads as [0,9,1,2,4]. From the head of B, it reads as [3,2,4]. 
  There are 3 nodes before the intersected node in A; There are 1 node before the intersected node in B.
 

Example 3:

  Input: intersectVal = 0, listA = [2,6,4], listB = [1,5], skipA = 3, skipB = 2
  Output: null
  Input Explanation: From the head of A, it reads as [2,6,4]. 
  From the head of B, it reads as [1,5]. Since the two lists do not intersect, intersectVal must be 0, while skipA and skipB can be arbitrary values.
  Explanation: The two lists do not intersect, so return null.
 

Notes:
  If the two linked lists have no intersection at all, return null.
  The linked lists must retain their original structure after the function returns.
  You may assume there are no cycles anywhere in the entire linked structure.
  Your code should preferably run in O(n) time and use only O(1) memory.
 */

const { makeLinkNodes } = require('../../algorithms/linkNode');

const l1 = makeLinkNodes([4, 1, 8, 4, 5]);
const l2 = makeLinkNodes([5, 0, 1, 8, 4, 5]);

// Time O(N + M ) - length of links
// Space O(1)
const getLen = head => {
  if (head === null) return 0;
  return 1 + getLen(head.next);
};

const getIntersectionNode3 = (headA, headB) => {
  if (headA === null || headB === null) return null;

  let m = getLen(headA);
  let n = getLen(headB);

  let a = headA;
  let b = headB;

  if (m > n) {
    for (let i = 0; i < m - n; i++) {
      a = a.next;
    }
  }

  if (m < n) {
    for (let i = 0; i < n - m; i++) {
      b = b.next;
    }
  }

  while (a !== b) {
    a = a.next;
    b = a.next;
  }

  return a;
};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Time O(N) Space O(1)
const getIntersectionNode2 = (headA, headB) => {
  if (headA === null || headB === null) return null;

  let a = headA;
  let b = headB;

  while (a !== null && b !== null && a !== b) {
    a = a.next;
    b = b.next;

    if (a === b) return a;

    if (a === null) a = headB;
    if (b === null) b = headA;
  }

  return a;
};

getIntersectionNode2(l1, l2);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Time O(N) Space O(1)
const getIntersectionNode = (headA, headB) => {
  if (headA === null || headB === null) return null;

  let a = headA;
  let b = headB;

  while (a !== b) {
    a = a === null ? headB : a.next;
    b = b === null ? headA : b.next;
  }

  return a;
};

getIntersectionNode(l1, l2);
