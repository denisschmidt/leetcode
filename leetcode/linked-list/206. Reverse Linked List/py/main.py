# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next


# Time O(N)
# Space O(N)
class Solution:
    def reverseList(self, node):
        head = None
        current = node
        
        while current:
            new_node = ListNode(current.val)
            new_node.next = head
            
            head = new_node
            current = current.next

        return head

# Time O(N)
# Space O(N)
class Solution_II:
    def reverseList(self, head):  
        def dfs(head):
            if head == None:
                return None
            
            if head.next == None:
                return head
            
            prev = dfs(head.next)
            
            head.next.next = head
            head.next = None
            
            return prev
        
        return dfs(head)
