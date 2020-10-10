class Solution:
    def maxDistance(self, position: List[int], m: int) -> int:
      position.sort()
      n = len(position)
      l, r = 1, position[-1] - position[0]

      while l <= r:
        mid = r - (r - l) // 2
        
        cntBalls = 1
        curr = position[0]

        for i in range(1, n):
          if position[i] - curr >= mid:
            cntBalls += 1
            curr = position[i]

        if cntBalls >= m:
          l = mid + 1
        else:
          r = mid - 1

      return r