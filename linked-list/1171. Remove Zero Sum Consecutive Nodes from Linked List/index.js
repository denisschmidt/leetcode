/*

Given the head of a linked list, we repeatedly delete consecutive sequences of nodes that sum to 0 until there are no such sequences.

After doing so, return the head of the final linked list.  

You may return any such answer.

(Note that in the examples below, all sequences are serializations of ListNode objects.)

Example 1:
  Input: head = [1,2,-3,3,1]
  Output: [3,1]
  Note: The answer [1,2,1] would also be accepted.

Example 2:
  Input: head = [1,2,3,-3,4]
  Output: [1,2,4]

Example 3:
  Input: head = [1,2,3,-3,-2]
  Output: [1]
  
Constraints:
  The given linked list will contain between 1 and 1000 nodes.
  Each node in the linked list has -1000 <= node.val <= 1000.

*/
// Time O(N)
// Space O(N)
const removeZeroSumSublists = head => {
  let nums = [];
  let p = head;
  let k = 0;

  while (p != null) {
    nums.push(p.val);
    p = p.next;
  }

  let isValid = false;

  while (!isValid) {
    isValid = true;
    let sum = 0;
    let map = new Map();

    for (let i = 0; i < nums.length; i++) {
      sum += nums[i];

      if (sum == k) {
        nums = nums.slice(i + 1);
        isValid = false;
        break;
      }

      if (map.has(sum - k)) {
        let j = map.get(sum - k);
        nums.splice(j + 1, i - j);
        isValid = false;
        break;
      }

      if (!map.has(sum)) {
        map.set(sum, i);
      }
    }
  }

  let dummy = new ListNode();
  p = dummy;

  for (let i = 0; i < nums.length; i++) {
    p.next = new ListNode(nums[i]);
    p = p.next;
  }

  return dummy.next;
};
