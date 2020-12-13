class Solution:
  def calc(self, nums, subSum):
    curSum = 0
    cntSubArrays = 1

    for i in range(len(nums)):
      if nums[i] + curSum <= subSum:
        curSum += nums[i]
      else:
        curSum = nums[i]
        cntSubArrays += 1

    return cntSubArrays
  
  # Time O(N * Log(sumofarray))
  # Space O(N)
  def splitArray(self, nums, m):
      if len(nums) == m:
        return max(nums)

      left, right = 0, 0

      for num in nums:
        right += nums
        left = max(left, num)

      ans = right

      while left <= right:
        mid = left + ((right - left) // 2)

        if self.calc(nums, mid) > m:
          left = mid + 1
        else:
          right = mid - 1
          ans = min(ans, mid)

      return ans

  def splitArray_II(self, nums, m):
      if len(nums) == m:
        return max(nums)

      N = len(nums)
      prefix_sum = [0] * (N + 1)
      inf = float('inf')
      dp = [[-1] * (m + 1) for _ in range(N)]

      for i in range(1, N + 1):
          prefix_sum[i] = prefix_sum[i - 1] + nums[i - 1]
        
      def dfs(index, k):        
        if k < 0:
            return 0
        
        if k == 1:
          return prefix_sum[N] - prefix_sum[index]

        if dp[index][k] != -1:
            return dp[index][k]

        res = inf
      
        for i in range(index, N - 1):
          val = prefix_sum[i + 1] - prefix_sum[index]
          res = min(res, max(val, dfs(i + 1, k - 1)))

        dp[index][k] = res

        return res

      return dfs(0, m)
