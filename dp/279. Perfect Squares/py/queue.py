from collections import deque

class Solution:
    def numSquares(self, n):
      squareNums = [i * i for i in range(1, int(n**0.5)+1)]
      
      cnt = 0
      queue = deque()
      seen = set()

      queue.append(n)

      while len(queue):
        s = len(queue)

        for _ in range(s):
          num = queue.popleft()

          if num == 0:
            return cnt

          for square in squareNums:
            if square > num:
              break

            remainder = num - square
            if remainder >= 0 and remainder not in seen:
              seen.add(remainder)
              queue.append(remainder)
        cnt += 1
      return -1
