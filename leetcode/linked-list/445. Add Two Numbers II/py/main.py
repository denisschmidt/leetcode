# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

# Time O(N)
# Space O(N)
class Solution:
    def addTwoNumbers(self, l1: ListNode, l2: ListNode) -> ListNode:
      l1 = self.reverseList(l1)
      l2 = self.reverseList(l2)
      add = 0
      head = None
    
      while l1 or l2:
        x1 = l1.val if l1 else 0
        x2 = l2.val if l2 else 0
        
        total = add + x1 + x2 
        val = total % 10
        add = total // 10
        
        new_node = ListNode(val)
        new_node.next = head
        head = new_node
        
        l1 = l1.next if l1 else None
        l2 = l2.next if l2 else None
        
      if add > 0:
        new_node = ListNode(add)
        new_node.next = head
        head = new_node
        
      return head
      
        
      return dummy.next
        
    def reverseList(self, head: ListNode) -> ListNode:  
        dummy = None
        p = head
        
        while p:
            curr = ListNode(p.val)
            curr.next = dummy
            dummy = curr
            p = p.next
            
        return dummy
            
        