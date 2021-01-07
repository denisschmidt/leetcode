import heapq
import collections

class Solution:
  # Deque(double-ended queue), the structure which pops from / pushes to either side with the same O(1) performance
  # Time O(N)
  # Space O(N)
  def maxSlidingWindow(self, nums, k):
        ans = []
        deque = collections.deque()
        
        for i in range(k):
            while deque and deque[-1][0] < nums[i]:
                deque.pop()
            deque.append([nums[i], i])
        
        ans.append(deque[0][0])
        
        for i in range(k, len(nums)):
            while deque and deque[-1][0] < nums[i]:
                deque.pop()
            
            if deque and i - deque[0][1] >= k:
              deque.popleft()

            deque.append([nums[i], i])

            ans.append(deque[0][0])
        
        return ans
  
  # Heap
  # Time O(NLogK)
  # Space O(N)
  def maxSlidingWindow_II(self, nums, k):
        heap, ans = [], []
        ans = []

        for i in range(len(nums)):
            heapq.heappush(heap, (-1 * nums[i], i))

            if len(heap) >= k:
                while heap and i - heap[0][1] >= k:
                    heapq.heappop(heap) 
  
                ans.append(-1 * heap[0][0])

        return ans
