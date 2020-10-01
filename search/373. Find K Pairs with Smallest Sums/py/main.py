import heapq

# Time O(KLogK)
# Space O(K)
class Solution:
    def kSmallestPairs(self, nums1, nums2, k):
      if len(nums2) == 0:
        return []

      heap = []
      res = []

      for i in range(len(nums1)):
        heapq.heappush(heap, (nums1[i] + nums2[0], i, 0))


      while len(heap) and len(res) < k:
        _, i, j = heapq.heappop(heap)

        res.append([nums1[i], nums2[j]])

        if j + 1 < len(nums2):
          heapq.heappush(heap, (nums1[i] + nums2[j + 1], i, j + 1))

      return res