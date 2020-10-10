# Time O(N)
# Space O(N)
class Solution:
    def maxSlidingWindow(self, nums: List[int], k: int) -> List[int]:
      st = []
      i = 0

      while i < k:
        while len(st) and st[-1][0] < nums[i]: 
          st.pop()
        st.append([nums[i], i])
        i += 1

      res = []

      res.append(st[0][0])

      if st[0][1] + k == k:
        st.pop(0)

      for i in range(k, len(nums)):
        while len(st) and st[-1][0] < nums[i]:
          st.pop()
      
        st.append([nums[i], i])
        res.append(st[0][0])

        if i - st[0][1] == k - 1:
          st.pop(0)

      return res     
