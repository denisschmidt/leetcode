class Solution:
  def longestArithSeqLength(self, A: List[int]) -> int:
    dp = {}
    res = 0

    for i in range(len(A)):
      for j in range(0, i):
        d = A[i] - A[j]
        dp[i, d] = dp.get((j, d), 1) + 1
        res = max(res, dp[i, d])

    return res        
        