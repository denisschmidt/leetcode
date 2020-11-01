# Time O(NLogN)
# Space O(N)
class Solution:
    def solve(self, nums):
        if not nums:
            return 0
        
        def search(nums, target):
            lo, hi = 0, len(nums) - 1
            
            while lo < hi:
                mid = (lo + hi) >> 1
                
                if target > nums[mid]:
                    lo = mid + 1
                else:
                    hi = mid
            
            return lo
            
        n = len(nums)
        stack = []
        
        for num in nums:
            if not stack or num > stack[-1]:
                stack.append(num)
            else:
                pos = search(stack, num)
                
                stack[pos] = num
                
        return len(stack)
        

# Time O(N^2)
# Space O(N)
class Solution_II:
    def lengthOfLIS(self, nums):
        if not len(nums):
          return 0
        
        n = len(nums)
        dp = [1] * n
        
        res = 1
        
        for i in range(0, n):
            for j in range(i + 1, n):
                if (nums[i] < nums[j]):
                    dp[j] = max(dp[j], dp[i] + 1)
                    
                res = max(res, dp[j])
                
        return res
 

# Time O(N^2)
# Space O(N^2)
class Solution_III:
    def lengthOfLIS(self, nums):
        if not len(nums):
          return 0
        
        n = len(nums)
        dp = [[None] * n for _ in range(n)]

        def dfs(prev_index, next_index):
          if next_index >= n:
            return 0
          
          if dp[prev_index + 1][next_index] is not None:
            return dp[prev_index + 1][next_index]

          res = 0

          if prev_index < 0 or nums[prev_index] < nums[next_index]:
            res = max(res, 1 + dfs(next_index, next_index + 1))
            
          res = max(res,  dfs(prev_index, next_index + 1))
            
          dp[prev_index + 1][next_index] = res

          return dp[prev_index + 1][next_index]
              
        return dfs(-1, 0)
