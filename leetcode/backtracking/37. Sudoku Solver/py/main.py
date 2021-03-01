class Solution:
    # Time O(9!)^9 - 9! possibilities for a just one row
    # Space O()
    def solveSudoku(self, board: List[List[str]]) -> None:
        """
        Do not return anything, modify board in-place instead.
        """
        SIZE = 9

        def isValid(board, row, col):
            for i in range(SIZE):
                if board[i][col] == board[row][col] and i != row:
                    return False

            for j in range(SIZE):
                if board[row][j] == board[row][col] and j != col:
                    return False

            start_row = (row // 3) * 3
            start_col = (col // 3) * 3

            for i in range(start_row, start_row + 3):
                for j in range(start_col, start_col + 3):
                    if i != row and j != col and board[i][j] == board[row][col]:
                        return False
            return True

        def dfs(board, row, col):
            if row == SIZE:
                return True

            if col == SIZE:
                return dfs(board, row + 1, 0)

            if board[row][col] != '.':
                return dfs(board, row, col + 1)

            for num in [str(i) for i in range(1, 10)]:
                board[row][col] = num
                if isValid(board, row, col) and dfs(board, row, col + 1):
                    return True
                board[row][col] = '.'

            return False

        dfs(board, 0, 0)
