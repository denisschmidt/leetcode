import collections

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None


class Solution:
    def distanceK(self, root: TreeNode, target: TreeNode, K: int) -> List[int]:
        adj_list = collections.defaultdict(list)

        def dfs(node, parent):
            if not node:
                return

            if parent:
                adj_list[node.val].append(parent.val)

            if node.left:
                adj_list[node.val].append(node.left.val)

            if node.right:
                adj_list[node.val].append(node.right.val)

            dfs(node.left, node)
            dfs(node.right, node)

        dfs(root, None)

        queue = collections.deque()
        visited = set()
        ans = []

        queue.append(target.val)
        visited.add(target.val)

        while len(queue):
            size = len(queue)

            for _ in range(size):
                u = queue.popleft()

                if K == 0:
                    ans.append(u)

                if K < 0:
                    break

                for v in adj_list[u]:
                    if v in visited:
                        continue

                    visited.add(v)
                    queue.append(v)

            K -= 1

        return ans
