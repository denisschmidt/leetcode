# Time O(N)
# Space O(1)
class Solution:
    # The same as 1721 problem
    def removeNthFromEnd(self, head, n):
        length = 0

        current_node = head
        end_node, prev_node = None, None

        while current_node:
            length += 1

            if end_node:
                prev_node = end_node
                end_node = end_node.next

            if length == n:
                end_node = head

            current_node = current_node.next

        if not prev_node and not end_node:
            return None

        if not prev_node and end_node:
            return end_node.next

        prev_node.next = end_node.next

        return head