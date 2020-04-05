/*

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

// Time complexity : O(n). Assume that nn is the list's length, the time complexity is O(n).
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
const reverseList = function(head) {
  if (head === null) return null;
  if (head.next === null) return head;

  let dummy = reverseList(head.next);

  head.next.next = head;
  head.next = null;

  return dummy;
};

/*
  Пример: 

  1 -> 2 -> 3
  
  cur - 1
  prev - null
  ------------
  cur - 2
  prev - 1
  ------------
  cur - 3
  prev - 2 -> 1
  ------------
  cur - null
  prev - 3 -> 2 -> 1

*/

// Time complexity : O(N). где N длинна листа
// Space complexity : O(1).
const reverseList_II = function(root) {
  // prev будет содержать head reverse node
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
