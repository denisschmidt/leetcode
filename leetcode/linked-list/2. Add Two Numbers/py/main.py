# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
      self.val = val
      self.next = next

import math

# Time O(N)
# Space O(N)
class Solution:
    def addTwoNumbers(self, l1: ListNode, l2: ListNode) -> ListNode:
      dummy = ListNode()
      p = dummy
      add = 0

      while l1 or l2:
        sum_val = add

        if l1:
          sum_val += l1.val
          l1 = l1.next

        if l2:
          sum_val += l2.val
          l2 = l2.next

        is_big = sum_val >= 10

        val = sum_val % 10 if is_big else sum_val

        add = int((sum_val - val) / 10) if is_big else 0
      
        p.next = ListNode(add)
        p = p.next
  
      if add > 0:  
        p.next = ListNode(add)
  
      return dummy.next     

          
