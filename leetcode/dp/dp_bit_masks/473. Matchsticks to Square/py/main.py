
class Solution:
    # Time O(N * 2^N)
    # Space O(2^N)
    def makesquare(self, nums: List[int]) -> bool:
        if not nums: return False
        totalSum = sum(nums)
        
        if totalSum % 4 != 0:
          return False

        N = len(nums)

        used = [False] * N

        def dfs(index, currSum, cnt, target):
          if cnt == 4:
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
          
        return dfs(0, 0, 0, totalSum / 4)

    # Time O(4^N)
    # Space O(N) 
    def makesquare_II(self, nums: List[int]) -> bool:
      if not nums: return False

      totalSum = sum(nums)
        
      if totalSum % 4 != 0:
          return False

      N = len(nums)
    
      sums = [0] * 4

      nums.sort(reverse=True)

      def dfs(index, target):
        if index == N:
            return sums[0] == sums[1] == sums[2] == target

        for i in range(4):
          if sums[i] + nums[index] <= target:
            sums[i] += nums[index]

            if dfs(index + 1, target):
              return True
            
            sums[i] -= nums[index]

        return False

      return dfs(0, totalSum / 4)
    