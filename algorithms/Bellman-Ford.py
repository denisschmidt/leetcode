"""
  Giver weighted graph (without negative cycles but with possible negative edges).

  Find shortest path length from vertex s to all other vertices.
  
  In particular, this allows to find shortest path from vertex s to vertex t
  “BFS on weighted graph” 

  Negative cycles - цикл с сумарным отрицательным весом. Можем зайти в цикл и набрать -INF вес пути. 
  Понятия мин растояния тут не будет. 

  dp[k][v] -- minimum path length from s to v if <= k edges are used
  dp[0][start_vertex] = 0, [0][v] = MAX_INT

  dp[k + 1][v] = min(dp[k][v], dp[k][x] + w_{x, v})
  
  Every path consists of no more than n - 1 edges so only n - 1 iterations are needed
  
  The answer is dp[n - 1][v]

"""


# Time O(V * E)
# Space O(V)
def fordBellman(n, graph, start_vertex):
    dp = [float('inf')] * n

    dp[0][start_vertex] = 0

    for k in range(n - 1):
        dp[k + 1] = dp[k]

        for u, v, weight in graph:
            dp[k + 1][v] = min(dp[k + 1][v], dp[k][u] + weight)