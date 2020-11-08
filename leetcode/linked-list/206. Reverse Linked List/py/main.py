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
        if not head:
            return head
        
        def dfs(node):
            if node and node.next == None:
                return node
            
            p = dfs(node.next)
                        
            node.next.next = node
            node.next = None
            
            return p
            
        return dfs(head)
        

