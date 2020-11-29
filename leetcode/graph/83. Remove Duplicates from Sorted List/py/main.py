# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

# Time O(N)
# Space O(1)
class Solution:
    def deleteDuplicates(self, head):
        p = head
        
        while p:
            a = p.next
            
            while a and p.val == a.val:
                a = a.next
                
            p.next = a
            p = p.next
        
        return head
            