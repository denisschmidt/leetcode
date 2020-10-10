/*
Sort a linked list in O(n log n) time using constant space complexity.

Example 1:

Input: 4->2->1->3
Output: 1->2->3->4
Example 2:

Input: -1->5->3->4->0
Output: -1->0->3->4->5
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}

function createLinkedList(nums) {
  return nums
    .map(val => new ListNode(val))
    .reduce((acc, node) => {
      let target = acc;

      while (target.next) {
        target = target.next;
      }

      target.next = node;

      return acc;
    });
}

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// Time O(NlogN) + O(N)
// Space O(N)
var sortList = function (head) {
  let arr = [];

  while (head) {
    arr.push(head.val);
    head = head.next;
  }

  arr.sort((a, b) => a - b);

  return createLinkedList(arr);
};
const input = [4, 2, 1, 3];
const node = createLinkedList(input);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
