import heapq

# Time O(LogN)
# Space O(N)
class MedianFinder:

    def __init__(self):
        self.maxHeap = [] # max heap
        self.minHeap = [] # min heap
        self.size = 0

    def addNum(self, num: int) -> None:
        self.size += 1

        x = heapq.heappushpop(self.minHeap, num)
        heapq.heappush(self.maxHeap, x * -1)

        if len(self.maxHeap) - len(self.minHeap) > 1:
          x = heapq.heappop(self.maxHeap)
          heapq.heappush(self.minHeap, -1 * x)
    
    def findMedian(self) -> float:
      if self.size % 2 != 0:
        return self.maxHeap[0] * -1
        
      return ((self.maxHeap[0] * -1) + self.minHeap[0] ) / 2
        
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
