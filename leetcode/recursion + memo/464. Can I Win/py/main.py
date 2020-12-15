class Solution:
    def canIWin(self, maxChoosableInteger: int, desiredTotal: int) -> bool:  
      if maxChoosableInteger >= desiredTotal:
          return True
  
      if ((1 + maxChoosableInteger) / 2) * maxChoosableInteger < desiredTotal:
          return False

      memo = {}
      used = [False] * (maxChoosableInteger + 1)

      def getKey(used):
        num = 0

        for n in used:
          num <<= 1
          if n:
            num |= 1
        return num

      def dfs(currSum):
        if currSum <= 0:
          return False

        key = getKey(used)

        if key in memo:
          return memo[key] 

        for num in range(1, maxChoosableInteger + 1):
          if used[num]:
            continue

          used[num] = True

          if not dfs(currSum - num):
              memo[key] = True
              used[num] = False
              return True

          used[num] = False

        memo[key] = False

        return False

      return dfs(desiredTotal)