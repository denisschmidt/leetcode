/*
Given a singly linked list, return a random node's value from the linked list. Each node must have the same probability of being chosen.

Follow up:
  What if the linked list is extremely large and its length is unknown to you? 
  Could you solve this efficiently without using extra space?

Example:
  // Init a singly linked list [1,2,3].
  ListNode head = new ListNode(1);
  head.next = new ListNode(2);
  head.next.next = new ListNode(3);
  Solution solution = new Solution(head);
  
  // getRandom() should return either 1, 2, or 3 randomly. Each element should have equal probability of returning.
  solution.getRandom();

 */

// Решение без использования дополнительной памяти

const randomValue = (min, max) => min + Math.floor(Math.random() * (max - min));

class Solution {
  constructor(head) {
    this.head = head;
  }

  getRandom() {
    let node = this.head;
    let count = 0;
    let ans = null;

    while (node) {
      count++;
      const rand = randomValue(0, count);

      if (rand === count - 1) {
        ans = node.val;
      }
      node = node.next;
    }

    return ans;
  }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Решение с использованием дополнительной памяти
class Solution2 {
  constructor(head) {
    this.head = head;

    const getLen = node => {
      let count = 0;
      while (node !== null) {
        node = node.next;
        count++;
      }
      return count;
    };

    this.count = getLen(head);
  }

  getRandom() {
    let rand = Math.floor(Math.random() * this.count);
    let count = 0;
    let node = this.head;
    while (node.next !== null && count < rand) {
      node = node.next;
      count++;
    }
    return node.val;
  }
}
