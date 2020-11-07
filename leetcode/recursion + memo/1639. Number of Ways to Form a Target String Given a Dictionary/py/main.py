class Solution:
    def numWays(self, words: List[str], target: str) -> int:
        chars_indexes = {}
        n = len(words[0])
        mod = 1e9 + 7
        
        for word in words:
          for i in range(len(word)):
            if word[i] not in chars_indexes:
              chars_indexes[word[i]] = [0] * n

            chars_indexes[word[i]][i] += 1

        dp = [[None] * n for _ in range(n)]

        def dfs(word_index, target_index):
          if target_index >= len(target):
            return 1
          
          if word_index >= n:
            return 0

          if dp[word_index][target_index] != None:
            return dp[word_index][target_index]

          res = dfs(word_index + 1, target_index)
          
          char = target[target_index]

          if char in chars_indexes and chars_indexes[char][word_index] > 0:
            res += dfs(word_index + 1, target_index + 1) * chars_indexes[char][word_index] 
            res %= mod
          
          dp[word_index][target_index] = res

          return res

        return int(dfs(0, 0))