# DFS
class Solution:
    def wordBreak(self, s: str, wordDict: List[str]) -> bool:
      def dfs(start, dp):
        if start == len(s):
          return True

        if dp[start] != None:
          return dp[start]

        for end in range(start + 1, len(s) + 1):
          if s[start:end] in wordSet and dfs(end, dp):
            dp[start] = True
            return True

        dp[start] = False
        return False    
          
      wordSet = set(wordDict)
      dp = [None] * len(s)

      return dfs(0, dp)
