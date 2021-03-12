"""
# Definition for a Node.
class Node:
    def __init__(self, val=None, children=None):
        self.val = val
        self.children = children
"""


class Solution:
    # Time O(N)
    # Space O(N)
    def maxDepth(self, root: 'Node') -> int:
        if not root:
            return 0

        res = 1
        if root.children:
            for node in root.children:
                res = max(res, 1 + self.maxDepth(node))

        return res