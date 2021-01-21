# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    # Time O(N)
    # Space O()
    def swapNodes(self, head: ListNode, k: int) -> ListNode:
        list_length = 0
        current_node = head
        front_node, end_node = None, head

        while current_node:
          list_length += 1

          if end_node:
                end_node = end_node.next

          # If endNode is k positions behind a certain node currentNode
          # When currentNode reaches the end of linked list the endNode would be at the n - k  node.
          if list_length == k:
            front_node = current_node
            end_node = head
            
          current_node = current_node.next
        
        tmp = front_node.val
        front_node.val = end_node.val
        end_node.val = tmp

        return head
