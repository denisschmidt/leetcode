/*

Given a non-negative integer represented as non-empty a singly linked list of digits, plus one to the integer.

You may assume the integer do not contain any leading zero, except the number 0 itself.

The digits are stored such that the most significant digit is at the head of the list.

Example :
  Input: [1,2,3]
  Output: [1,2,4]

*/

// Time O(N)
// Space O(1)
const plusOne = head => {
  if (head == null) return null;

  if (head.next == null && head.val == 9) {
    head.val = 0;
    return new ListNode(1, head);
  }

  let tmp = head;

  helper(tmp);

  function helper(node) {
    if (node == null) return false;

    let setValue = helper(node.next);

    if (!setValue) {
      if (node.val == 9) node.val = 0;
      else {
        node.val++;
        return true;
      }
      return false;
    } else {
      return true;
    }
  }

  return head.val == 0 ? new ListNode(1, head) : head;
};
