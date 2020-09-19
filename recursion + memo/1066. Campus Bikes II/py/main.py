# Time O(N * !M)
class Solution:
    def assignBikes(self, workers, bikes):
      def createKey(visited):
        key = 0
        for i in range(len(visitedBikes)):
          if visited[i] == False:
            key |= 1 << i
        return key

      def getDist(a, b):
        return abs(a[0] - b[0]) + abs(a[1] - b[1])

      def dfs(workerIndex, visitedBikes):
        if workerIndex == len(workers):
          return 0

        key = createKey(visitedBikes)

        if key in dp:
          return dp[key]

        res = float('inf')
        for i in range(len(bikes)):
          if visitedBikes[i]:
            continue

          visitedBikes[i] = True

          dist = getDist(workers[workerIndex], bikes[i])

          res = min(res, dist + dfs(workerIndex + 1, visitedBikes))

          visitedBikes[i] = False
        
        dp[key] = res

        return dp[key]

      dp = {}
      visitedBikes = [False] * len(bikes)
      
      return dfs(0, visitedBikes)