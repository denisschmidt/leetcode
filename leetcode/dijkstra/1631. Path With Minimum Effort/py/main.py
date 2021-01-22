import heapq


class Solution(object):
    # Dijkstra's Algorithm
    # Time O((V + E) * Log(E))
    # In the matrix of size N * M, with N * M vertices and N * M edges. Total O(M*N + M*N) => O(V + E) * Log(E)
    # Space O(M * N)
    def minimumEffortPath(self, heights):
        n, m = len(heights), len(heights[0])
        heap = []
        grid_diff = [[float('inf')] * m for _ in range(n)]

        def neighbors(i, j):
            for x, y in ((i - 1, j), (i + 1, j), (i, j - 1), (i, j + 1)):
                if 0 <= x < n and 0 <= y < m:
                    yield x, y

        heapq.heappush(heap, (0, 0, 0, 0))  # (dist, x, y)
        grid_diff[0][0] = 0

        while heap:
            _, x, y, max_diff = heapq.heappop(heap)

            if x == n - 1 and y == m - 1:
                return max_diff

            for next_x, next_y in neighbors(x, y):
                new_diff = abs(heights[next_x][next_y] - heights[x][y])

                if grid_diff[next_x][next_y] > new_diff:
                    heapq.heappush(
                        heap,
                        (new_diff, next_x, next_y, max(new_diff, max_diff)))
                    grid_diff[next_x][next_y] = new_diff

        return -1

    # Binary Search + DFS
    # Time O(Log10^6 * (N * M))
    def minimumEffortPath_II(self, heights):
        lo, hi = 0, 10000000
        n, m = len(heights), len(heights[0])

        def neighbors(i, j):
            for x, y in [[i + 1, j], [i - 1, j], [i, j + 1], [i, j - 1]]:
                if 0 <= x < n and 0 <= y < m:
                    yield x, y

        def canReachDestinaton(x, y, limit, visited):
            if x == n - 1 and y == m - 1:
                return True

            visited[x][y] = True

            for nextX, nextY in neighbors(x, y):
                diff = abs(heights[x][y] - heights[nextX][nextY])

                if diff <= limit and not visited[nextX][nextY]:
                    if canReachDestinaton(nextX, nextY, limit, visited):
                        return True

            return False

        while lo < hi:
            mid = lo + ((hi - lo) // 2)

            visited = [[False] * m for _ in range(n)]

            if not canReachDestinaton(0, 0, mid, visited):
                lo = mid + 1
            else:
                hi = mid

        return lo