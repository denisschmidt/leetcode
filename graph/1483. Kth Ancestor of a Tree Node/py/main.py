class TreeAncestor:

    def __init__(self, n: int, parent: List[int]):
      height = int(log2(n)) + 1

      dp = [[-1] * height for _ in range(n)]

      for i in range(n):
        dp[i][0] = parent[i]

      for h in range(height):
        for u in range(n):
          if dp[u][h - 1] != -1:
            k = dp[u][h - 1]
            dp[u][h] = dp[k][h - 1]

      self.dp = dp


    def getKthAncestor(self, node: int, k: int) -> int:
        while k > 0 and node != -1:
          i = int(log2(k))
          node = self.dp[node][i]
          k -= (1 << i)
        return node   
