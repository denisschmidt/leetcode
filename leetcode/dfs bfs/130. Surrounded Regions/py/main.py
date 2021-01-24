class Solution:
    # Time O(N*M)
    # Space O(N*M)
    def solve(self, board):
        if not board:
            return

        n, m = len(board), len(board[0])

        def neighbors(i, j):
            for x, y in [[i - 1, j], [i + 1, j], [i, j + 1], [i, j - 1]]:
                if 0 <= x < n and 0 <= y < m:
                    yield x, y

        def dfs(i, j):
            visited[i][j] = True

            for x, y in neighbors(i, j):
                if board[x][y] == 'O' and not visited[x][y]:
                    dfs(x, y)

        visited = [[False] * m for _ in range(n)]

        for i in range(n):
            for j in range(m):
                if i == 0 or j == 0 or i == n - 1 or j == m - 1:
                    if board[i][j] == 'O' and not visited[i][j]:
                        dfs(i, j)

        for i in range(n):
            for j in range(m):
                if board[i][j] == 'O' and not visited[i][j]:
                    board[i][j] = 'X'

        return board