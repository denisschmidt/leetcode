import collections


class Solution:
    # BFS
    # Time O(N * M)
    # Space O(N * M)
    def updateMatrix(self, matrix):
        queue = collections.deque()
        n, m = len(matrix), len(matrix[0])
        visited = [[False] * m for _ in range(n)]

        def neighbors(i, j):
            for x, y in [[i + 1, j], [i - 1, j], [i, j + 1], [i, j - 1]]:
                if 0 <= x < n and 0 <= y < m:
                    yield x, y

        for i in range(n):
            for j in range(m):
                if matrix[i][j] == 1:
                    for x, y in neighbors(i, j):
                        if matrix[x][y] == 0:
                            queue.append([i, j, 1])
                            visited[i][j] = True
                            break

        while queue:
            i, j, dist = queue.popleft()

            matrix[i][j] = dist

            for x, y in neighbors(i, j):
                if not visited[x][y] and matrix[x][y] == 1:
                    queue.append([x, y, dist + 1])
                    visited[x][y] = True

        return matrix
