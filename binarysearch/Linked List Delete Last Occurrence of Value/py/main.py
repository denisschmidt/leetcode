# class LLNode:
#     def __init__(self, val, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def solve(self, node, target):
        if not node:
            return node

        prev, curr, target_node = None, node, None

        while curr:
            if curr.val == target:
                target_node = prev
            prev = curr
            curr = curr.next

        if target_node:
            target_node.next = target_node.next.next
        elif node.val == target:
            return node.next

        return node