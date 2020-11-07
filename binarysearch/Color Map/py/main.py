# Time O(N^2 * K)
# Space O(N^2 * K)
class Solution:
    def solve(self, matrix):
        if len(matrix) == 0:
            return 0
        
        vals = set()
        n, m = len(matrix), len(matrix[0])
        step_counts = {}
        visited = [[False] * m for _ in range(n)]

        def dfs(i, j, target):
            nonlocal n, m

            if visited[i][j]:
                return

            visited[i][j] = True

            for d in [[0, 1], [0, -1], [1, 0], [-1, 0]]:
                x = i + d[0]
                y = j + d[1]

                if x < 0 or y < 0 or x >= n or y >= m or matrix[x][y] != target:
                    continue

                dfs(x, y, target)

        for i in range(n):
            for j in range(m):
                step_counts[matrix[i][j]] = 0
                vals.add(matrix[i][j])

        max_cnt = 0
        max_val = None

        for target in vals:
            for i in range(n):
                for j in range(m):
                    if matrix[i][j] == target and not visited[i][j]:
                        dfs(i, j, target)
                        step_counts[target] += 1

                        if step_counts[target] > max_cnt:
                            max_cnt = step_counts[target]
                            max_val = target

        res = 0
        for k in step_counts.keys():
            if k != max_val:
                res += step_counts[k]

        return res

