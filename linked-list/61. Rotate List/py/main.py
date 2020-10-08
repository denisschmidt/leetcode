# Time O(N)
# Space O(1)
class Solution:
    def rotateRight(self, head, k):
      if head == None:
        return None

      if head.next == None:
        return head
      
      p = head
      len = 1
      
      while p.next:
        p = p.next
        len += 1
      
      p.next = head
      
      tail = head
      
      for _ in range(len - (k % len) - 1):
        tail = tail.next
          
      newHead = tail.next
      
      tail.next = None
      
      return newHead
