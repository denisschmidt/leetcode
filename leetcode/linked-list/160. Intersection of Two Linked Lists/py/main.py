# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    # Time O(N)
    # Space O(1)
    def getIntersectionNode(self, headA: ListNode, headB: ListNode) -> ListNode:
        def getLen(node):
          len = 0
          while node:
            node=node.next
            len += 1
          return len
        
        def intersect(headA, headB):
          while headA and headB:
            if headA == headB:
                return headA
            headA = headA.next
            headB = headB.next
          return None
        
        def makeEqualLen(node, d):
            while d > 0:
                node = node.next
                d -= 1
            return node

        len1 = getLen(headA)
        len2 = getLen(headB)
        
        if len1 > len2:
            headA = makeEqualLen(headA, len1 - len2)
            return intersect(headA, headB)

        elif len1 < len2:
            headB = makeEqualLen(headB, len2 - len1)
            return intersect(headA, headB)
          
        return intersect(headA, headB)
