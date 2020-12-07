class Solution:
    def medianSlidingWindow_II(self, nums, k):
        def getMedian(indexes, n):
          half = n // 2
          return (nums[indexes[half - 1]] + nums[indexes[half]]) / 2  if n % 2 == 0 else nums[indexes[half]]

        def search(indexes, target):
          lo, hi = 0, len(indexes) - 1

          while lo < hi:
            mid = lo + ((hi - lo) // 2)

            if nums[indexes[mid]] < target:
              lo = mid + 1
            else:
              hi = mid

          if nums[indexes[lo]] < target:
            return lo + 1

          return lo

        size_k_array = []
        ans = []

        for i in range(len(nums)):
          if not size_k_array:
            size_k_array.append(i)
          else:
            index = search(size_k_array, nums[i])
            size_k_array.insert(index, i)


          if len(size_k_array) >= k:
            ans.append(getMedian(size_k_array, len(size_k_array)))    
            
            tmp = []

            for j in size_k_array:          
              if i + 1 - j < k:
                tmp.append(j)

            size_k_array = tmp

        return ans

