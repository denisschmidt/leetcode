# Time O(N*M)
# Space O(N*M)
class Solution:
  def minTotalDistance(self, grid):
    ans = float('inf')
    n, m = len(grid), len(grid[0])
    rows = []
    cols = []
    
    for row in range(n):
      for col in range(m):
        if grid[row][col] == 1:
          rows.append(row)
          cols.append(col)
                
    rows.sort()
    cols.sort()
    
    mid_row = rows[len(rows) // 2]
    mid_col = cols[len(cols) // 2]
    
    return self.get_dist(rows, mid_row) + self.get_dist(cols, mid_col)
    
    
  def get_dist(self, points, origin):
    dist = 0
    for point in points:
        dist += abs(point - origin)
    return dist
    


