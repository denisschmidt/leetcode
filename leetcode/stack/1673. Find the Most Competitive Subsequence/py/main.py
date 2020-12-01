# Time O(N)
# Space O(N)
class Solution:
    def mostCompetitive(self, nums, k):
        res, st = [], []

        for i in range(len(nums)):
          while st and nums[st[-1]] > nums[i] and N - i > k - len(st):
            st.pop()
          
          if len(st) < k:
            st.append(i)
        
        for index in st:
          res.append(nums[index])

        return res  