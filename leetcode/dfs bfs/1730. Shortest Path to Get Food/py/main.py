import collections


class Solution:
    # Time O(N*M)
    # Space O(N*M)
    def getFood(self, grid):
        n, m = len(grid), len(grid[0])
        queue = collections.deque()
        res = 0

        for i in range(n):
            for j in range(m):
                if grid[i][j] == '*':
                    queue.append([i, j])
                    grid[i][j] = 'X'
                    break
            if queue:
                break

        while queue:
            size = len(queue)

            for _ in range(size):
                i, j = queue.popleft()

                for x, y in [[i + 1, j], [i - 1, j], [i, j + 1], [i, j - 1]]:
                    if 0 <= x < n and 0 <= y < m:
                        if grid[x][y] == '#':
                            return res + 1
                        if grid[x][y] != 'X':
                            queue.append([x, y])
                            grid[x][y] = 'X'

            res += 1

        return -1
