import heapq

# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def mergeKLists(self, lists):
        queue = []

        dummy = ListNode()
        p = dummy 
        
        ListNode.__lt__ = lambda x, y: True if x.val < y.val else False # key statement

        for node in lists:
            if node:
                heapq.heappush(queue, (node.val, node))
        
        while queue:
          val, pointer = heapq.heappop(queue)
        
          p.next = ListNode(val)
          p = p.next

          if pointer.next:
            heapq.heappush(queue, (pointer.next.val, pointer.next))

        return dummy.next 

         