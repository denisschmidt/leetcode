// Time O(N)
// Space O(N)
const reverseList = head => {
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
const reverseList_II = root => {
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
