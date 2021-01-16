# Time O(N)
# Space O(N)
class Solution:
    def rob(self, nums):
        N = len(nums)
        dp = [[-1] * 2 for _ in range(N)]

        def dfs(index, isFirst):
            if index >= N:
                return 0

            if index == N - 1:
                return 0 if isFirst else nums[N - 1]

            stepId = 0 if isFirst else 1

            if dp[index][stepId] != -1:
                return dp[index][stepId]

            res = 0

            if index == 0:
                # Consider two cases if we start the search from the first index and from the second index
                res = max(res, nums[index] + dfs(index + 2, True), dfs(index + 1, False))
            else:
                # Can take the current value or can go forward
                res = max(res, nums[index] + dfs(index + 2, isFirst), dfs(index + 1, isFirst))

            dp[index][stepId] = res

            return res

        return dfs(0, False)
    