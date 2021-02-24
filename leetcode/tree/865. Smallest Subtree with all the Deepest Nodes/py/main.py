import collections


class Solution:
    def __init__(self):
        self.ans = None

    def subtreeWithAllDeepest(self, root: TreeNode) -> TreeNode:
        if root == None or self.isLeaf(root):
            return root

        maxDepth = self.getMaxDepth(root)

        self.dfs(root, 1, maxDepth)

        return self.ans

    def dfs(self, root, depth, maxDepth):
        if root == None:
            return None

        if depth == maxDepth:
            self.ans = root
            return root

        L = self.dfs(root.left, depth + 1, maxDepth)
        R = self.dfs(root.right, depth + 1, maxDepth)

        if L and R:
            self.ans = root

        return L or R

    def getMaxDepth(self, root):
        if root == None:
            return 0

        l = self.getMaxDepth(root.left)
        r = self.getMaxDepth(root.right)

        return max(l, r) + 1

    def isLeaf(self, root):
        return root.left == None and root.right == None


class Solution_II:
    # Time O(N)
    # Space O(N)
    def subtreeWithAllDeepest(self, root: TreeNode) -> TreeNode:
        depths = collections.defaultdict(list)
        maxDepth = 0
        parent = {}

        def dfs(node, p, d):
            nonlocal maxDepth

            if node is None:
                return

            depths[d].append(node)
            maxDepth = max(maxDepth, d)

            parent[node] = p

            dfs(node.left, node, d + 1)
            dfs(node.right, node, d + 1)

        dfs(root, None, 0)

        queue = collections.deque()
        visited = {}

        for n in depths[maxDepth]:
            queue.append(n)

        target = len(queue)

        while queue:
            size = len(queue)

            for _ in range(size):
                n = queue.popleft()

                if n in parent and parent[n] != None:
                    queue.append(parent[n])
                    visited[n] = visited.get(n, 0) + 1

                    if visited[n] == target:
                        return n

        return root
