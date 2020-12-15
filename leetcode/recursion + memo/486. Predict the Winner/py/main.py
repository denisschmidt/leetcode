# Time O(N^2)
# Space O(N^2)
class Solution:
    def PredictTheWinner(self, nums):
        memo = {}

        def dfs(left, right, isFirst):
          playerId = 0 if isFirst else 1

          if left > right:
              return 0

          if (left, right, playerId) in memo:
              return memo[left, right, playerId]

          nextPlayer = False if isFirst else True

          if isFirst:
              memo[left, right, playerId] = max(nums[left] + dfs(left + 1, right, nextPlayer), nums[right] + dfs(left, right - 1, nextPlayer))
          else:
              memo[left, right, playerId] = min(-nums[left] + dfs(left + 1, right, nextPlayer), -nums[right] + dfs(left, right - 1, nextPlayer))
            
          return memo[left, right, playerId]

        N = len(nums)

        return dfs(0, N - 1, True) >= 0
