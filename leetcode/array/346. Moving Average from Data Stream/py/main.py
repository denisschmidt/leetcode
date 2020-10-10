# Circular Queue
# Time O(1)
# Space O(size)
class MovingAverage:

    def __init__(self, size: int):
        """
        Initialize your data structure here.
        """
        self.queue = [0] * size
        self.maxLen = size
        self.head = self.sum = 0
        self.cnt = 0

    def next(self, val: int) -> float:
        self.cnt += 1

        # calculate the new sum by shifting the window
        tail = (self.head + 1) % self.maxLen
        self.sum = self.sum - self.queue[tail] + val

        # move on to the next head
        self.queue[tail] = val
        self.head = tail
        
        return self.sum / min(self.maxLen, self.cnt)


from collections import deque

class MovingAverage_II:

    def __init__(self, size: int):
        """
        Initialize your data structure here.
        """
        self.size = size
        self.queue = deque()
        self.sum = self.cnt = 0
        
    def next(self, val: int) -> float:
      self.cnt += 1

      self.queue.append(val)
      tail = self.queue.popleft() if self.cnt > self.size else 0

      self.sum = self.sum - tail + val

      return self.sum / min(self.size, self.cnt)

