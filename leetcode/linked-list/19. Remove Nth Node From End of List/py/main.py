# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

# Time O(N)
# Space O(1)
class Solution:
    def removeNthFromEnd(self, head, n):
        slow = head
        fast = head
        
        while n > 0:
            fast = fast.next
            n -= 1
            
        if not fast:
            return head.next
            
        while fast.next:
            fast = fast.next
            slow = slow.next
            
        slow.next = slow.next.next
        
        return head
        