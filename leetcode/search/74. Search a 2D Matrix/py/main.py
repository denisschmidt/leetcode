class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        if len(matrix) == 0:
          return False

        n = len(matrix)
        m = len(matrix[0])
        
        lo = 0
        hi = m * n - 1

        while lo <= hi:
          mid = lo + ((hi - lo) >> 1)
          row = int(mid / m)
          col = mid % m  

          val = matrix[row][col]

          if val == target:
            return True 

          if target > matrix[row][col]:
            lo = mid + 1
          else:
            hi = mid - 1

        return False