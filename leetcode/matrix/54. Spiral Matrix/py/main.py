class Solution:
    # Time O(N*M)
    # Space O(N*M)
    def spiralOrder(self, matrix):
        n, m = len(matrix), len(matrix[0])
        startRow, endRow = 0, n - 1
        startCol, endCol = 0, m - 1

        ans = []
        
        while startRow <= endRow and startCol <= endCol:
          # right
          i = startCol
          while i <= endCol:
            ans.append(matrix[startRow][i])
            i += 1
          startRow += 1

          # down
          i = startRow 
          while i <= endRow:
            ans.append(matrix[i][endCol])
            i += 1
          endCol -= 1

          # left
          if endRow >= startRow:
            i = endCol
            while i >= startCol:
                ans.append(matrix[endRow][i])
                i -= 1
          endRow -= 1

          # top
          if endCol >= startCol:
            i = endRow
            while i >= startRow:
                ans.append(matrix[i][startCol])
                i -= 1
          startCol += 1

        return ans