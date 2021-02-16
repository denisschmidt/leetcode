"""

https://docs.google.com/document/d/1-O62kU53h3-U8C2ABhvhcjeaAGFrU4meY1Lr0Djo1Xg/edit

isDead(grid, 4, 3) # expect True

isDead(grid, 5, 5) # expect False

"""

import collections


class Solution:
    def getNeighbors(self, i, j, n, m):
        for x, y in [[i + 1, j], [i - 1, j], [i, j + 1], [i, j - 1]]:
            if 0 <= x < n and 0 <= y < m:
                yield x, y

        # Time O(N * M)
        # Space O(N * M)
    def isDead(self, grid, startX, startY):
        if not grid:
            return False

        n, m = len(grid), len(grid[0])

        if not (0 <= startX < n and 0 <= startY < m):
            return False

        target = grid[startX][startY]

        if target == 0:
            return False

        # 0 - empty, 1 - black, 2 - white
        queue = collections.deque()
        visited = [[False] * m for _ in range(n)]

        visited[startX][startY] = True
        queue.append([startX, startY])

        while queue:
            i, j = queue.popleft()

        for x, y in self.getNeighbors(i, j, n, m):
            if grid[x][y] == 0:
                return False

            if grid[x][y] == target and not visited[x][y]:
                queue.append([x, y])
                visited[x][y] = True

        return True
