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
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  let tmp = head
  let arr = []

  while(tmp) {
    arr.push(tmp.val)
    tmp = tmp.next
  }
  return arr.reverse()
};

const l1 = {
  val: 1,
  next: { 
    val: 2, 
    next: { 
      val: 3, 
      next: null 
    } 
  } 
}

console.log(reverseList(l1))