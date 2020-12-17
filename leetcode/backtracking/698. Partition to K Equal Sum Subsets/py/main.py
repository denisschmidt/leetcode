# Time O(N * 2^N)
# Space O(2^N)
class Solution:
    def canPartitionKSubsets(self, nums, k):
        totalSum = sum(nums)

        if totalSum % k != 0 or k == 0:
          return False

        N = len(nums)
        used = [False] * N
        
        def dfs(index, currSum, cnt, target):
          # first of all, we check all bases that return the required result
          if cnt == k:
              return True
            
          if currSum == target:
            return dfs(0, 0, cnt + 1, target) 

          if currSum > target or index >= N:
              return False

          for i in range(index, N):
            if used[i]: continue

            used[i] = True

            if dfs(i + 1, currSum + nums[i], cnt, target):
              used[i] = False
              return True

            used[i] = False

          return False
          
        return dfs(0, 0, 0, totalSum / k)