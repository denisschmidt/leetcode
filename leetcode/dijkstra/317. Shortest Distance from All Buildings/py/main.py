class Solution:
    def shortestDistance(self, grid: List[List[int]]) -> int:
      n = len(grid)
      m = len(grid[0])
      buildings = []
      land = []

      for i in range(n):
        for j in range(m):
          if grid[i][j] == 1:
            buildings.append([i, j])
          elif grid[i][j] == 0:
            land.append([i, j])  

      minDist = float('inf')

      for l in land:
        cnt = 0
        sum = 0
        for b in buildings:
          d = self.shortestPath(l[0], l[1], b[0], b[1], grid);
          if d == -1:
            break;
          sum += d
          cnt += 1

        if cnt == len(buildings):
          minDist = min(minDist, sum)
        
        
      return -1 if minDist == float('inf') else minDist;

    def shortestPath(self, startX, startY, endX, endY, grid):
      heap = []
      costMap = {(startX, startY): 0}
      n = len(grid)
      m = len(grid[0])

      heapq.heappush(heap, (0, 0, startX, startY))
      
      while heap:
        _, cost, i, j = heapq.heappop(heap)

        if (i, j) == (endX, endY):
          return cost

        for x,y in [(0,1),(0,-1),(1,0),(-1,0)]:
          newX = x + i
          newY = y + j

          if newX < 0 or newX >= n or newY < 0 or newY >= m or grid[newX][newY] == 2:
            continue
        
          if grid[newX][newY] == 1:
            if (newX, newY) == (endX, endY):
              return cost + 1
            continue  

          newCost = cost + 1 + self.getDist(newX, newY, endX, endY);

          if newCost < costMap.get((newX, newY), 9999):
            heapq.heappush(heap, (newCost, cost + 1, newX, newY))
            costMap[newX, newY] = newCost
      return -1      

    def getDist(self, x, y, u, z):
      return abs(x - u) + abs(y - z);