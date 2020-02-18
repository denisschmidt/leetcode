/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} root
 * @param {number} k
 * @return {ListNode[]}
 */
var splitListToParts = function(root, k) {
  let paths = [];

  let size = getLen(root);

  function getLen(node, len = 0) {
    if (node === null) return len;
    getLen(node.next, len + 1);
  }
};
