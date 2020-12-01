import heapq

# Time O(LogN)
# Space O(N)
class MedianFinder:

    def __init__(self):
        """
        initialize your data structure here.
        """
        self.q1 = [] # max heap
        self.q2 = [] # min heap
        self.size = 0

    def addNum(self, num: int) -> None:
        self.size += 1

        x = heapq.heappushpop(self.q2, num)
        heapq.heappush(self.q1, x * -1)

        if len(self.q1) - len(self.q2) > 1:
          x = heapq.heappop(self.q1)
          heapq.heappush(self.q2, -1 * x)
    
    def findMedian(self) -> float:
      if self.size % 2 != 0:
        return self.q1[0] * -1
        
      return ((self.q1[0] * -1) + self.q2[0] ) / 2
        
# Insertion Sort
# Time O(N) + O(LogN)
# Space O(N)        
class MedianFinder_II:

    def __init__(self):
        self.nums = []

    def addNum(self, num):
        if not self.nums:
          self.nums.append(num)
          return

        lo, hi = 0, len(self.nums) - 1

        while lo < hi:
          mid = lo + ((hi - lo) // 2)

          if self.nums[mid] < num:
            lo = mid + 1
          else:
            hi = mid

        if self.nums[lo] <= num:
          self.nums.insert(lo + 1, num)
        else:
          self.nums.insert(lo, num)

    def findMedian(self):
      size = len(self.nums)  
      mid = size // 2
      return self.nums[mid] if size % 2 != 0 else (self.nums[mid - 1] + self.nums[mid]) / 2
