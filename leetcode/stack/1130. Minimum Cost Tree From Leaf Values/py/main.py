# Top down code with memo
# Time O(N^3)
# Space O(N^3)
class Solution:
    def mctFromLeafValues(self, arr):
        memo = {}

        def dfs(left, right):
          if left >= right:
            return 0

          if (left, right) in memo:
            return memo[left, right]

          res = float('inf')

          for i in range(left, right):
            val = max(arr[left : i+1]) * max(arr[i+1 : right+1])

            res = min(res , val + dfs(left, i) + dfs(i + 1, right))

          memo[left, right] = res

          return res


        return dfs(0, len(arr) - 1)
