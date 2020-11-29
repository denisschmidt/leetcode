# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

# Time O(N)
# Space O(N)
class Solution:
    def deleteDuplicates(self, head: ListNode) -> ListNode:
        if not head: return head

        dummy = ListNode()
        p = dummy

        while head and head.next:
          if head.val != head.next.val:
            p.next = head
            p = p.next
            head = head.next
          else:
            a = head.next

            while a and a.val == head.val:
              a = a.next    
            
            head = a
         
        p.next = head

        return dummy.next
