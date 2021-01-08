
class Solution:
    # Time O(NLogN)
    # Space O(LogN)
    def sortList(self, head):
        if head == None or head.next == None:
            return head 

        fast = head
        slow = head
        prev = None

        while fast and fast.next:
            prev = slow
            slow = slow.next
            fast = fast.next.next
        
        prev.next = None # split linked list into two halves
        
        # Recursively split the original list into two halves. 
        left = self.sortList(head) # left half
        right = self.sortList(slow) # right half

        # merge two linked list
        return self.merge(left, right)

    def merge(self, left, right):
        dummy = ListNode()
        p = dummy

        while left and right:
            if left.val < right.val:
                p.next = left
                left = left.next
            else:
                p.next = right
                right = right.next
            p = p.next
        
        if left:
            p.next = left
        
        if right:
            p.next = right

        return dummy.next
