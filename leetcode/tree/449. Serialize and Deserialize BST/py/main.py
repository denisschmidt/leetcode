# Definition for a binary tree node.
class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

class Codec:

    def serialize(self, root: TreeNode) -> str:
        """Encodes a tree to a single string.
        """
        if root == None:
            return ''

        res = []

        def dfs(node):
            if node == None:
                return
            dfs(node.left)
            dfs(node.right)
            res.append(node.val)
        
        dfs(root)

        return ' '.join(map(str, res))
        


    def deserialize(self, data: str) -> TreeNode:
        """Decodes your encoded data to tree.
        """
        if not data:
            return None
        
        def dfs(lower = -float('inf'), upper = float('inf')):
            if not data or data[-1] < lower or data[-1] > upper:
                return None

            val = data.pop()
            node = TreeNode(val)

            node.right = dfs(val, upper)
            node.left = dfs(lower, val)

            return node 
        
        data = [int(x) for x in data.split(' ') if x]
        
        return dfs(0, len(data))
