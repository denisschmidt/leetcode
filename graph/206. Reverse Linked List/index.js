/*
206. Reverse Linked List

Reverse a singly linked list.

Example:

Input: 1->2->3->4->5->NULL
Output: 5->4->3->2->1->NULL
Follow up:

A linked list can be reversed either iteratively or recursively. Could you implement both?


 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

const { makeLinkNodes } = require('../../algorithms/linkNode');

const l1 = makeLinkNodes([1, 2, 3, 4, 5]);

// Time complexity : O(n). Assume that nn is the list's length, the time complexity is O(n)O(n).
//
// Space complexity : O(n). The extra space comes from implicit stack space due to recursion.
// The recursion could go up to n levels deep.

// initial:
// 1 -> 2 -> 3 -> 4 -> 5
//
// after reverseList(2):
// 1 -> 2 <- 3 <- 4 <- 5
//      |
//      v
//     null
//
// after operate on 1:
// null <- 1 <- 2 <- 3 <- 4 <- 5
const reverseListReq = function(root) {
  if (root === null || root.next === null) {
    return root;
  }

  let cur = reverseListReq(root.next);

  root.next.next = root;
  root.next = null;

  return cur;
};

const res = reverseListReq(l1);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Time complexity : O(n). Assume that nn is the list's length, the time complexity is O(n).
//
// Space complexity : O(1).
const reverseListIter = function(root) {
  let prev = null;
  let curr = root;

  while (curr !== null) {
    let nextTemp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = nextTemp;
  }

  return prev;
};

reverseListIter(l1);
