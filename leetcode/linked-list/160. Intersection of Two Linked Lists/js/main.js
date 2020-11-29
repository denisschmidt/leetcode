// Two pointers
// Time O(N) Space O(1)
const getIntersectionNode = (headA, headB) => {
  if (headA === null || headB === null) return null;

  let a = headA;
  let b = headB;

  while (a != b) {
    a = a == null ? headB : a.next;
    b = b == null ? headA : b.next;
  }

  return a;
};
