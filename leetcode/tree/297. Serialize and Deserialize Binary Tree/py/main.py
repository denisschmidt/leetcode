import collections


class Codec:
    def serialize(self, root):
        """Encodes a tree to a single string.
        
        :type root: TreeNode
        :rtype: str
        """
        if not root:
            return []

        res = []
        queue = collections.deque()

        queue.append(root)

        while queue:
            node = queue.popleft()

            res.append(node.val if node else None)

            if node:
                queue.append(node.left)
                queue.append(node.right)

        while res[-1] == None:
            res.pop()

        return res

    def deserialize(self, data):
        """Decodes your encoded data to tree.
        
        :type data: str
        :rtype: TreeNode
        """
        if not data:
            return None

        queue = collections.deque()
        node = TreeNode(data[0])
        index, n = 1, len(data)

        queue.append(node)

        while index < n:
            current = queue.popleft()

            # If value == None, skip it
            if index < n and data[index] != None:
                current.left = TreeNode(data[index])
                queue.append(current.left)

            index += 1

            if index < n and data[index] != None:
                current.right = TreeNode(data[index])
                queue.append(current.right)

            index += 1

        return node
