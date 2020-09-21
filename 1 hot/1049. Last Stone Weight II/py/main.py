class Solution:
    def lastStoneWeightII(self, stones: List[int]) -> int:
        total = sum(stones)
        target = total >> 1
                
        dp = [False] * (target + 1)
        
        dp[0] = True
        
        for stone in stones:
          for num in reversed(range(stone, target + 1)):
            dp[num] = dp[num] or dp[num - stone]
        
        reachSum = target
        
        while dp[reachSum] == False:
          reachSum -= 1

        return total - (2 * reachSum)
        