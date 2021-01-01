class Solution:
    # Time O(N*M)
    # Space O(N*M)
    def findDiagonalOrder(self, matrix):
        if not matrix: return []
        n, m = len(matrix), len(matrix[0])
        ans = []
        x, y = 0, 0

        # helps us keep track of what direction we are
        # processing the current diaonal
        direction = 1

        def isValid(x, y):
            return x >= 0 and y >= 0 and x < n and y < m

        def dfs(i, j, direction):
            ans.append(matrix[i][j])
            
            if direction == 1:
              x, y = i - 1, j + 1
            else:
              x, y = i + 1, j - 1
              
            if isValid(x, y): 
                return dfs(x, y, direction)

            return i, j

        while isValid(x, y):
          x, y = dfs(x, y, direction)
          
          if direction == 1:
            if y + 1 < m:
              y = y + 1
            # if we reach the last cell, we can only go down 
            else:
              x = x + 1
          else:
            if x + 1 < n:
              x = x + 1
            # if we reach the last row, we can only go to right 
            else:
              y = y + 1

          # Flip the direction
          direction = 1 - direction

        return ans