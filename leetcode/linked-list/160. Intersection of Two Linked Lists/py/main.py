# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def getIntersectionNode(self, headA: ListNode, headB: ListNode) -> ListNode:
        map_set = set()
        pA = headA
        
        while pA:
            map_set.add(pA)
            pA = pA.next
            
        if not len(map_set):
            return None
        
        pB = headB
        
        while pB:
            if pB in map_set:
                return pB
            pB = pB.next
        
        return None