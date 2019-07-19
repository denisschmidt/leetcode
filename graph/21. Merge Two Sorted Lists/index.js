/*
Merge two sorted linked lists and return it as a new list. 
The new list should be made by splicing together the nodes of the first two lists.

Example:

Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
const { makeLinkNodes } = require('../../algorithms/linkNode');

const l1 = makeLinkNodes([1, 2, 4]);
const l2 = makeLinkNodes([1, 3, 4]);

// Time: O(m + n) (worst case) and O(min(m, n)) (best case)
// Space: O(m + n) (worst case) and O(min(m, n)) (best case) [ both from call stack]
const mergeTwoListsReqursion = (l1, l2) => {
  if (!l1) {
    return l2;
  }
  if (!l2) {
    return l1;
  }
  if (l1.value < l2.value) {
    l1.next = mergeTwoListsReqursion(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeTwoListsReqursion(l1, l2.next);
    return l2;
  }
};

const res = mergeTwoListsReqursion(l1, l2);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const mergeTwoListsIterative = (l1, l2) => {
  if (l1 == null) {
    return l2;
  } else if (l2 == null) {
    return l1;
  }

  let ans = { val: -1, next: null };
  let danny = ans;

  while (l1 !== null && l2 !== null) {
    if (l1.val <= l2.val) {
      ans.next = l1;
      l1 = l1.next;
    } else {
      ans.next = l2;
      l2 = l2.next;
    }
    ans = ans.next;
  }

  ans.next = l1 || l2;
  return danny.next;
};

const res2 = mergeTwoListsIterative(l1, l2);
console.log('---', res2);
