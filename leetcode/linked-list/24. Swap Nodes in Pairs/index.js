/*

24. Swap Nodes in Pairs


Given a linked list, swap every two adjacent nodes and return its head.

You may not modify the values in the list's nodes, only nodes itself may be changed.



Example:

Given 1->2->3->4, you should return the list as 2->1->4->3.
 */

/*
  
  Алгоритм:

  1) Решение становится интуитивным 
     Если мы понимаем что изначально текущий узел - это узел с пустой нодой, который мы только создали
     null  -> 1 -> 2 -> 3 -> 4
     cur      f    s
    
    cur.next -> s
    f.next = s.next
    s.next = f
    cur = f

https://leetcode.com/problems/swap-nodes-in-pairs/discuss/11046/My-simple-JAVA-solution-for-share

*/

// Time O(n)
// Space O(1)
const swapPairs = head => {
  let dummy = new ListNode();

  dummy.next = head;

  let current = dummy;

  while (current.next && current.next.next) {
    let second = current.next.next;
    let first = current.next;

    current.next = second;

    first.next = second.next;

    second.next = first;

    current = first;
  }

  return dummy.next;
};
