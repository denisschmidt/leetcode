# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def sortList(self, head):
        if head == None or head.next == None:
          return head
        
        slow = head
        fast = head

        while fast and fast.next:
          prev = slow
          slow = slow.next
          fast = fast.next.next

        prev.next = None

        # Split the original list into two halves

        left = self.sortList(head) # left havle
        right = self.sortList(slow) # right havle

        return self.merge(left, right)

    def merge(self, list1, list2):
      dummy = ListNode(0)
      p = dummy

      while list1 and list2:
        if list1.val < list2.val:
          p.next = list1
          list1 = list1.next
        else:
          p.next = list2
          list2 = list2.next
        p = p.next
      
      if list1:
        p.next = list1
      else:
        p.next = list2
  
      return dummy.next