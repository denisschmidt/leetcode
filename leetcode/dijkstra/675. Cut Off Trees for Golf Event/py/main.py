class Solution:
  def cutOffTree(self, forest: List[List[int]]) -> int:
    def getDist(startX, startY, endX, endY):
      heap = []
      visited = set()

      heapq.heappush(heap, (0, startX, startY))

      while heap:
        cost, i, j = heapq.heappop(heap)

        if (i, j) == (endX, endY):
          return cost

        for x,y in [(0,1),(0,-1),(1,0),(-1,0)]:
          x = x + i
          y = y + j

          if x < 0 or y < 0 or x >= n or y >= m or forest[x][y] == 0 or (x,y) in visited:
            continue

          visited.add((x, y))
          heapq.heappush(heap, (cost + 1, x, y))
      return - 1

    heap = []
    n = len(forest)
    m = len(forest[0])

    for i in range(n):
      for j in range(m):
        if forest[i][j] > 1:
          heapq.heappush(heap, (forest[i][j], i, j))

    res = 0
    startX = 0
    startY = 0

    while heap:
      _, x, y = heapq.heappop(heap)
      dist = getDist(startX, startY, x, y)

      if dist == -1:
        return -1

      res += dist;

      startX, startY = x, y

    return res  

  
