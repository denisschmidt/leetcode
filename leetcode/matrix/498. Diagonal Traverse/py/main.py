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

        while True:
          x, y = dfs(x, y, direction)
          
          if direction == 1:
            if isValid(x, y + 1):
              y = y + 1
            elif isValid(x + 1, y):
              x = x + 1
            else:
              break
          else:
            if isValid(x + 1, y):
              x = x + 1
            elif isValid(x, y + 1):
              y = y + 1
            else:
              break

          # Flip the direction
          direction = 1 - direction
          
        return ans