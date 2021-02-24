class Solution(object):
    def __init__(self):
        self.mapping = {}

    # Time O(N)
    # Space O(N)
    def cloneGraph(self, node):
        if not node:
            return None

        if node in self.mapping:
            return self.mapping[node]

        cloneNode = Node(node.val, [])

        self.mapping[node] = cloneNode

        if node.neighbors:
            cloneNode.neighbors = [self.cloneGraph(n) for n in node.neighbors]

        return cloneNode