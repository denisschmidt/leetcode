class Solution:
    # Time O(N)
    # Space O(N)
    def isValidBST(self, root):
        if not root:
            return False

        def isLeaf(node):
            return not node.left and not node.right

        def dfs(node):
            left, right = None, None

            if isLeaf(node):
                return Node(node.val, node.val, True)

            if node.left:
                left = dfs(node.left)

            if node.right:
                right = dfs(node.right)

            if (right and not right.is_valid) or (left and not left.is_valid):
                return Node()

            if left and right:
                if node.val > left.max and node.val < right.min:
                    return Node(left.min, right.max, True)
                return Node()

            if left and node.val > left.max:
                return Node(left.min, node.val, True)

            if right and node.val < right.min:
                return Node(node.val, right.max, True)

            return Node()

        return dfs(root).is_valid


class Node:
    def __init__(self, min=-1, max=-1, is_valid=False):
        self.min = min
        self.max = max
        self.is_valid = is_valid