/*

24. Swap Nodes in Pairs


Given a linked list, swap every two adjacent nodes and return its head.

You may not modify the values in the list's nodes, only nodes itself may be changed.



Example:

Given 1->2->3->4, you should return the list as 2->1->4->3.
 */

/*

  1 -> 2 -> 3 -> 4

  Алгоритм:

  1) Мы перебираем связанный список с переходами в два шага.
  
  2) Поменять местами пару узлов, прежде чем перейти к следующей паре. 
     Давайте представим два узла, которые должны быть заменены firstNode и secondNode.

  3) firstNode.next = secondNode.next
     secondNode.next = firstNode
  
  4) Нам также нужно установить для prevNode.next head свапнутой пары. 
     Этот шаг обеспечит правильное связывание текущей пары с концом ранее поменянного списка.

     prevNode.next = secondNode

  Это итеративный шаг, поэтому узлы меняются на ходу и присоединяются к ранее поменянному списку. 
  И в конце мы получаем окончательный список.

*/

// Time O(n)
// Space O(1)
const swapPairs = head => {
  let dummy = new ListNode(0);
  let current = dummy;
  current.next = head;

  while (current.next && current.next.next) {
    let first = current.next;
    let second = current.next.next;

    first.next = second.next;
    second.next = first;

    current.next = second;
    current = first;
  }

  return dummy.next;
};
