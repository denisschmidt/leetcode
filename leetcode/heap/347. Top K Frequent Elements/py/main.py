import heapq
import collections

class Solution:
    # Heap
    # Time O(NLogK)
    # Space O(N + K)
    def topKFrequent(self, nums, k):
      if k == len(nums):
          return nums
    
      count = collections.Counter(nums)
        
      return heapq.nlargest(k, count.keys(), key = count.get)

    # Bucket sort
    # Time O(N)
    # Space O(N)
    def topKFrequent_II(self, nums, k):
      if k == len(nums):
          return nums
      
      bucket = [[] for _ in nums]

      for val, freq in collections.Counter(nums).items():
        bucket[-freq].append(val)

      res = []

      for freq in range(len(bucket)):
        if not bucket[freq]: continue
        
        while bucket[freq] and k > 0:
          res.append(bucket[freq].pop())
          k -= 1

      return res
