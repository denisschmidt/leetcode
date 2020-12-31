class Solution:
    # Time O(N*M)
    # Space O(N*M)
    def generateMatrix(self, n: int) -> List[List[int]]:
        startRow, endRow = 0, n - 1
        startCol, endCol = 0, n - 1
        num = 1
        matrix = [[None] * n for _ in range(n)]

        while startRow <= endRow and startCol <= endCol:
          # right
          i = startCol
          while i <= endCol:
            matrix[startRow][i] = num 
            i += 1
            num += 1
          startRow += 1

          # down
          i = startRow
          while i <= endRow:
            matrix[i][endCol] = num
            i += 1
            num += 1
          endCol -= 1

          # left
          if endRow >= startRow:
            i = endCol
            while i >= startCol:
              matrix[endRow][i] = num
              i -= 1
              num += 1
          endRow -= 1

          # top
          if endCol >= startCol:
            i = endRow
            while i >= startRow:
              matrix[i][startCol] = num
              i -= 1
              num += 1
          startCol += 1
          
        return matrix