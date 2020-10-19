# class Tree:
#     def __init__(self, val, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def solve(self, root, k, distance):
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

        visited.add(k)
        queue.append(k)

        while len(queue):
            size = len(queue)

            for _ in range(size):
                u = queue.popleft()

                if distance < 0:
                    break

                if distance == 0:
                    ans.append(u)

                for v in adj_list[u]:
                    if v in visited:
                        continue
                    queue.append(v)
                    visited.add(v)

            distance -= 1

        ans.sort()

        return ans
