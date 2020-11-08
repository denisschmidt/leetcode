/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

// Time O(N)
// Space O(N)

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = (l1, l2) => {
  let dummy = new ListNode();
  let p = dummy;
  let add = 0;

  while (l1 || l2) {
    let sum = add;

    if (l1) {
      sum += l1.val;
      l1 = l1.next;
    }

    if (l2) {
      sum += l2.val;
      l2 = l2.next;
    }

    [sum, add] = getNodeVal(sum);

    p.next = new ListNode(sum);
    p = p.next;
  }

  if (add > 0) {
    p.next = new ListNode(add);
  }

  return dummy.next;

  function getNodeVal(sum) {
    if (sum >= 10) {
      let d = sum % 10;
      let add = Math.floor((sum - d) / 10);
      return [d, add];
    }
    return [sum, 0];
  }
};
